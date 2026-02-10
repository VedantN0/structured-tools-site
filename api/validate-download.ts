import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";

function base64urlDecode(input: string): string {
  return Buffer.from(
    input.replace(/-/g, "+").replace(/_/g, "/"),
    "base64"
  ).toString("utf8");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  try {
    const { productId, orderId, token } = req.body;

    if (!productId || !orderId || !token) {
      return res.status(400).json({ ok: false });
    }

    // --------------------------------------------------
    // 1️. Parse token
    // --------------------------------------------------
    const parts = token.split(".");
    if (parts.length !== 2) {
      return res.status(400).json({ ok: false });
    }

    const [payloadEncoded, signatureHex] = parts;

    // --------------------------------------------------
    // 2️. Verify signature (constant-time)
    // --------------------------------------------------
    const expectedSignatureHex = crypto
      .createHmac(
        "sha256",
        process.env.DOWNLOAD_TOKEN_SECRET as string
      )
      .update(payloadEncoded)
      .digest("hex");

    const sigBytes = Uint8Array.from(Buffer.from(signatureHex, "hex"));
    const expectedBytes = Uint8Array.from(
      Buffer.from(expectedSignatureHex, "hex")
    );

    if (
      sigBytes.length !== expectedBytes.length ||
      !crypto.timingSafeEqual(sigBytes, expectedBytes)
    ) {
      return res.status(401).json({ ok: false });
    }


    // --------------------------------------------------
    // 3️. Decode + validate payload
    // --------------------------------------------------
    let payload: {
      pid: string;
      oid: string;
      exp: number;
    };

    try {
      payload = JSON.parse(base64urlDecode(payloadEncoded));
    } catch {
      return res.status(400).json({ ok: false });
    }

    if (payload.pid !== productId || payload.oid !== orderId) {
      return res.status(403).json({ ok: false });
    }

    const now = Math.floor(Date.now() / 1000);
    if (now > payload.exp) {
      return res.status(403).json({ ok: false });
    }

    // --------------------------------------------------
    // 4️. Access granted
    // --------------------------------------------------
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("validate-download error:", err);
    return res.status(500).json({ ok: false });
  }
}
