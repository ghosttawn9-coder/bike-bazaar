import crypto from "crypto";
import type { Request } from "express";

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function getSecret(): string {
  return process.env.SESSION_SECRET ?? "powersport-marketplace-secret-2024";
}

export function signAdminToken(adminId: number): string {
  const payload = JSON.stringify({ adminId, exp: Date.now() + TOKEN_TTL_MS });
  const payloadB64 = Buffer.from(payload).toString("base64url");
  const sig = crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
  return `${payloadB64}.${sig}`;
}

export function verifyAdminToken(token: string): number | null {
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return null;

  const payload = Buffer.from(payloadB64, "base64url").toString();
  const expected = crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
  if (sig !== expected) return null;

  try {
    const data = JSON.parse(payload) as { adminId?: number; exp?: number };
    if (!data.adminId || !data.exp || data.exp < Date.now()) return null;
    return data.adminId;
  } catch {
    return null;
  }
}

export function getAdminId(req: Request): number | undefined {
  const sessionAdminId = (req.session as { adminId?: number }).adminId;
  if (sessionAdminId) return sessionAdminId;

  const auth = req.headers.authorization;
  if (auth?.startsWith("Bearer ")) {
    const adminId = verifyAdminToken(auth.slice(7));
    if (adminId) return adminId;
  }

  return undefined;
}
