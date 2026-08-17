/* @vitest-environment jsdom */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { mutate, mutationState } = vi.hoisted(() => ({
  mutate: vi.fn(),
  mutationState: {
    data: undefined as
      | {
          leadMagnet: { title: string; description: string; url: string };
        }
      | undefined,
    isSuccess: false,
    isPending: false,
    error: null as Error | null,
  },
}));

vi.mock("@/lib/trpc", () => ({
  trpc: {
    leads: {
      create: {
        useMutation: () => ({ mutate, ...mutationState }),
      },
    },
  },
}));

import PsicanaliseLeadForm from "./PsicanaliseLeadForm";

describe("PsicanaliseLeadForm", () => {
  beforeEach(() => {
    mutate.mockReset();
    mutationState.data = undefined;
    mutationState.isSuccess = false;
    mutationState.isPending = false;
    mutationState.error = null;
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

  it("libera o download do brinde somente após o cadastro concluído", () => {
    mutationState.isSuccess = true;
    mutationState.data = {
      leadMagnet: {
        title: "5 Dias para Silenciar a Ansiedade e Ouvir a Voz de Deus",
        description: "Um devocional gratuito para mulheres.",
        url: "https://teracristas-fsnv789j.manus.space/manus-storage/guia-5-dias-silenciar-ansiedade_587d0f06.pdf",
      },
    };

    render(<PsicanaliseLeadForm />);

    const downloadLink = screen.getByRole("link", { name: /baixar “5 dias para silenciar/i });

    expect(screen.getByText("Cadastro confirmado!")).toBeTruthy();
    expect(screen.getByText("Seu devocional está liberado")).toBeTruthy();
    expect(downloadLink.getAttribute("href")).toBe(
      mutationState.data.leadMagnet.url
    );
    expect(downloadLink.className).toContain("lead-magnet-download");
    expect(screen.getByText("Também enviamos o acesso para o seu e-mail.")).toBeTruthy();
  });
});
