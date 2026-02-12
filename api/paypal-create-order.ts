import type { VercelRequest, VercelResponse } from "@vercel/node";

const baseUrl =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getAccessToken() {
  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_SECRET) {
    throw new Error("Missing PayPal credentials");
  }

  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  if (!data.access_token) {
    console.error("PayPal token error:", data);
    throw new Error("Failed to obtain PayPal access token");
  }

  return data.access_token;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({ error: "Missing amount or currency" });
    }

    const accessToken = await getAccessToken();

    const orderResponse = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: (amount / 100).toFixed(2),
            },
          },
        ],
        application_context: {
          return_url: "https://structuredtools.com",
          cancel_url: "https://structuredtools.com",
          user_action: "PAY_NOW",
          shipping_preference: "NO_SHIPPING",
        },
      }),
    });

    const order = await orderResponse.json();

    if (!order.id) {
      console.error("PayPal order creation error:", order);
      return res.status(500).json({ error: "Order creation failed" });
    }

    return res.status(200).json({ id: order.id });
  } catch (err) {
    console.error("PayPal create-order error:", err);
    return res.status(500).json({ error: "PayPal order failed" });
  }
}
