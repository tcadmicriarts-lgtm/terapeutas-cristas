/* @vitest-environment jsdom */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { mutate } = vi.hoisted(() => ({ mutate: vi.fn() }));

vi.mock("@/lib/trpc", () => ({
  trpc: {
    leads: {
      create: {
        useMutation: () => ({
          mutate,
          isSuccess: false,
          isPending: false,
          error: null,
        }),
      },
    },
  },
}));

import PsicanaliseLeadForm from "./PsicanaliseLeadForm";

describe("PsicanaliseLeadForm", () => {
  beforeEach(() => {
    mutate.mockReset();
    window.history.replaceState({}, "", "/formacao?utm_source=instagram&utm_medium=paid_social&utm_campaign=aulas-gratuitas&utm_term=terapia&utm_content=reel-01");
  });

  it("anexa os UTMs da URL à mutation de cadastro ao enviar o formulário", async () => {
    render(<PsicanaliseLeadForm />);

    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Ana Ferreira" } });
    fireEvent.change(screen.getByLabelText("WhatsApp"), { target: { value: "(11) 99999-9999" } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: "ana@example.com" } });
    fireEvent.submit(screen.getByRole("button", { name: "Quero receber novidades" }).closest("form")!);

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({
        nome: "Ana Ferreira",
        whatsapp: "(11) 99999-9999",
        email: "ana@example.com",
        utm_source: "instagram",
        utm_medium: "paid_social",
        utm_campaign: "aulas-gratuitas",
        utm_term: "terapia",
        utm_content: "reel-01",
      });
    });
  });
});
