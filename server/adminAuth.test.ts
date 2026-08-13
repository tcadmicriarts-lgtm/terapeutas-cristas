import { describe, expect, it } from "vitest";

import { ENV } from "./_core/env";
import {
  createAdminSessionToken,
  verifyAdminPassword,
  verifyAdminSessionToken,
} from "./adminAuth";

describe("credencial do painel administrativo", () => {
  it("aceita a senha administrativa configurada e rejeita uma senha incorreta", () => {
    expect(ENV.adminAccessPassword, "ADMIN_ACCESS_PASSWORD deve estar configurada").toBeTruthy();
    expect(verifyAdminPassword(ENV.adminAccessPassword)).toBe(true);
    expect(verifyAdminPassword("senha-incorreta-para-teste")).toBe(false);
  });

  it("cria uma sessão assinada com expiração definida", () => {
    const now = 1_760_000_000_000;
    const token = createAdminSessionToken(now);

    expect(verifyAdminSessionToken(token, now + 60_000)).toBe(true);
    expect(verifyAdminSessionToken(`${token}alterado`, now + 60_000)).toBe(false);
    expect(verifyAdminSessionToken(token, now + 8 * 60 * 60 * 1000 + 1)).toBe(false);
  });
});
