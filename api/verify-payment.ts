import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";


function base64url(input: string | Buffer) {
  const buffer = typeof input === "string"
    ? Buffer.from(input, "utf8")
    : input;

  return buffer
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (
    !process.env.RAZORPAY_KEY_SECRET ||
    !process.env.DOWNLOAD_TOKEN_SECRET
  ) {
    return res.status(500).json({ success: false });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      productId,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !productId
    ) {
      return res.status(400).json({ success: false });
    }

    // --------------------------------------------------
    // 1️. Verify Razorpay signature
    // --------------------------------------------------
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false });
    }

    // --------------------------------------------------
    // 2️. Generate signed, time-limited download token
    // --------------------------------------------------
    const expiresInSeconds = 5 * 60; // 5 minutes
    const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;

    const payload = {
      pid: productId,
      oid: razorpay_order_id,
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

    // --------------------------------------------------
    // 3️. Return token
    // --------------------------------------------------
    return res.status(200).json({
      success: true,
      orderId: razorpay_order_id,
      token,
    });
  } catch (err) {
    return res.status(500).json({ success: false });
  }
}
