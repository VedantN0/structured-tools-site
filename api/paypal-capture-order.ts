import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";

function base64url(input: string | Buffer) {
  const buffer =
    typeof input === "string" ? Buffer.from(input, "utf8") : input;

  return buffer
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
  );

  const data = await response.json();
  return data.access_token;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    const { orderId, productId } = req.body;

    const accessToken = await getAccessToken();

    const captureResponse = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const captureData = await captureResponse.json();

    if (captureData.status !== "COMPLETED") {
      return res.status(400).json({ success: false });
    }

    // Generate same signed token as Razorpay
    const exp = Math.floor(Date.now() / 1000) + 5 * 60;

    const payload = {
      pid: productId,
      oid: orderId,
      exp,
    };

    const payloadEncoded = base64url(JSON.stringify(payload));

    const signature = crypto
      .createHmac(
        "sha256",
        process.env.DOWNLOAD_TOKEN_SECRET as string
      )
      .update(payloadEncoded)
      .digest("hex");

    const token = `${payloadEncoded}.${signature}`;

    return res.status(200).json({
      success: true,
      orderId,
      token,
    });
  } catch {
    return res.status(500).json({ success: false });
  }
}
