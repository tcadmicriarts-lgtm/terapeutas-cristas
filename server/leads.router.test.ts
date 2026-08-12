import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {} as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("leads.create", () => {
  it("rejeita cadastro sem nome, WhatsApp e e-mail válidos", async () => {
    const caller = appRouter.createCaller(createPublicContext());

    await expect(
      caller.leads.create({ nome: "A", whatsapp: "123", email: "invalido" })
    ).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});
