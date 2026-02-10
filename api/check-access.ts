// api/check-access.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { hasAccess } from "./store";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { orderId } = req.query;

  if (!orderId || typeof orderId !== "string") {
    return res.status(400).json({ allowed: false });
  }

  const allowed = hasAccess(orderId);

  return res.status(200).json({ allowed });
}
