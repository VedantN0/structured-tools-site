import type { VercelRequest, VercelResponse } from "@vercel/node";
import { payments } from "./_payments";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { orderId } = req.query;

  if (!orderId || typeof orderId !== "string") {
    return res.status(400).json({ allowed: false });
  }

  const record = payments.get(orderId);

  if (record?.paid) {
    return res.status(200).json({ allowed: true });
  }

  return res.status(403).json({ allowed: false });
}
