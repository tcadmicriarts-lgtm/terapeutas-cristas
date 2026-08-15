import { describe, expect, it, vi } from "vitest";
import { allowVercelProductionCors } from "./vercelCors";

function createResponse() {
  const response = {
    setHeader: vi.fn(),
    status: vi.fn(),
    end: vi.fn(),
  };
  response.status.mockReturnValue(response);
  return response;
}

describe("allowVercelProductionCors", () => {
  it("aceita o preflight exclusivamente do domínio Vercel publicado", () => {
    const res = createResponse();
    const next = vi.fn();

    allowVercelProductionCors(
      { method: "OPTIONS", headers: { origin: "https://terapeutas-cristas.vercel.app" } } as never,
      res as never,
      next
    );

    expect(res.setHeader).toHaveBeenCalledWith("Access-Control-Allow-Origin", "https://terapeutas-cristas.vercel.app");
    expect(res.setHeader).toHaveBeenCalledWith("Access-Control-Allow-Credentials", "true");
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.end).toHaveBeenCalledOnce();
    expect(next).not.toHaveBeenCalled();
  });

  it("não concede CORS a outras origens", () => {
    const res = createResponse();
    const next = vi.fn();

    allowVercelProductionCors(
      { method: "POST", headers: { origin: "https://origem-nao-autorizada.example" } } as never,
      res as never,
      next
    );

    expect(res.setHeader).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledOnce();
  });
});
