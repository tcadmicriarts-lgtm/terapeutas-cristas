import { describe, expect, it } from "vitest";
import { getTrpcEndpoint } from "./apiEndpoint";

describe("getTrpcEndpoint", () => {
  it("usa o backend Manus para o domínio público do Vercel", () => {
    expect(getTrpcEndpoint("terapeutas-cristas.vercel.app")).toBe(
      "https://teracristas-fsnv789j.manus.space/api/trpc"
    );
  });

  it("mantém a API relativa no domínio que hospeda o backend", () => {
    expect(getTrpcEndpoint("teracristas-fsnv789j.manus.space")).toBe("/api/trpc");
  });
});
