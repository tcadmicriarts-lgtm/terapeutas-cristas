import { createHash, createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { parse } from "cookie";
import type { Request } from "express";

import { getSessionCookieOptions } from "./_core/cookies";
import { ENV } from "./_core/env";

export const ADMIN_ACCESS_COOKIE = "tc_admin_access";
const ADMIN_SESSION_DURATION_MS = 8 * 60 * 60 * 1000;

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export function verifyAdminPassword(candidate: string) {
  if (!ENV.adminAccessPassword || !candidate) {
    return false;
  }

  return timingSafeEqual(digest(candidate), digest(ENV.adminAccessPassword));
}

function signAdminSession(payload: string) {
  return createHmac("sha256", ENV.cookieSecret).update(payload).digest("hex");
}

export function createAdminSessionToken(now = Date.now()) {
  const payload = `${now}.${randomUUID()}`;
  return `${payload}.${signAdminSession(payload)}`;
}

export function verifyAdminSessionToken(token?: string, now = Date.now()) {
  if (!token || !ENV.cookieSecret) return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [issuedAt, nonce, signature] = parts;
  const payload = `${issuedAt}.${nonce}`;
  const expectedSignature = signAdminSession(payload);
  const received = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) return false;

  const issuedAtTimestamp = Number(issuedAt);
  return (
    Number.isFinite(issuedAtTimestamp) &&
    issuedAtTimestamp <= now &&
    now - issuedAtTimestamp <= ADMIN_SESSION_DURATION_MS
  );
}

export function hasAdminSession(req: Request) {
  const cookies = parse(req.headers.cookie ?? "");
  return verifyAdminSessionToken(cookies[ADMIN_ACCESS_COOKIE]);
}

export function getAdminCookieOptions(req: Request) {
  return {
    ...getSessionCookieOptions(req),
    maxAge: ADMIN_SESSION_DURATION_MS,
    sameSite: "lax" as const,
  };
}
