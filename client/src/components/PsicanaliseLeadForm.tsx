import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { captureUtmParameters, type UTMParameters, withUtmParameters } from "@/lib/utm";
import { CheckCircle2, Download, Gift, Loader2, Send, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type LeadFormValues = {
  nome: string;
  whatsapp: string;
  email: string;
} & UTMParameters;

export default function PsicanaliseLeadForm() {
  const [utmParameters] = useState(() => captureUtmParameters(window.location.search));
  const form = useForm<LeadFormValues>({
    defaultValues: { nome: "", whatsapp: "", email: "" },
  });
  const createLead = trpc.leads.create.useMutation({
    onSuccess: () => form.reset(),
  });

  const handleSubmit = (values: LeadFormValues) => {
    createLead.mutate(withUtmParameters(values, utmParameters));
  };

  return (
    <div className="rounded-[1.35rem] border border-purple-100 bg-white/95 p-5 shadow-[0_16px_35px_rgba(61,0,112,0.10)] sm:p-6">
      <p className="font-display text-xl font-semibold text-foreground">Quero receber as novidades</p>
      <p className="mt-1 text-sm leading-relaxed text-foreground/60">
        Cadastre seus dados e nossa equipe entrará em contato quando as inscrições forem abertas.
      </p>

      {createLead.isSuccess ? (
        <div className="lead-success-panel mt-5 overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-[#f8f0ff] p-4 text-emerald-950 shadow-sm" role="status">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold leading-none">Cadastro confirmado!</p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-950/75">Seu interesse foi registrado. Em breve, nossa equipe falará com você.</p>
            </div>
          </div>
          {createLead.data?.leadMagnet && (
            <div className="mt-4 rounded-xl border border-[#D4AF37]/35 bg-white/90 p-4 shadow-[0_10px_24px_rgba(61,0,112,0.08)]">
              <div className="flex items-center gap-2 text-[#6b1fa8]">
                <Gift className="h-5 w-5" aria-hidden="true" />
                <p className="font-bold">Seu devocional está liberado</p>
                <Sparkles className="ml-auto h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{createLead.data.leadMagnet.description}</p>
              <a
                href={createLead.data.leadMagnet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lead-magnet-download mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#6b1fa8] px-4 py-3 text-center text-sm font-extrabold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#541583] hover:shadow-xl active:scale-[0.97]"
              >
                <Download className="relative z-10 h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="relative z-10">Baixar “{createLead.data.leadMagnet.title}”</span>
              </a>
              <p className="mt-3 text-center text-xs text-emerald-950/65">Também enviamos o acesso para o seu e-mail.</p>
            </div>
          )}
        </div>
      ) : (
        <form className="mt-5 grid gap-4" onSubmit={form.handleSubmit(handleSubmit)} noValidate>
          <div className="grid gap-2">
            <Label htmlFor="lead-nome">Nome</Label>
            <Input
              id="lead-nome"
              autoComplete="name"
              placeholder="Seu nome completo"
              disabled={createLead.isPending}
              {...form.register("nome", { required: "Informe seu nome.", minLength: { value: 2, message: "Informe seu nome completo." } })}
            />
            {form.formState.errors.nome && <p className="text-xs text-destructive">{form.formState.errors.nome.message}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lead-whatsapp">WhatsApp</Label>
            <Input
              id="lead-whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              disabled={createLead.isPending}
              {...form.register("whatsapp", {
                required: "Informe seu WhatsApp.",
                validate: value => value.replace(/\D/g, "").length >= 10 || "Informe um WhatsApp válido.",
              })}
            />
            {form.formState.errors.whatsapp && <p className="text-xs text-destructive">{form.formState.errors.whatsapp.message}</p>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lead-email">E-mail</Label>
            <Input
              id="lead-email"
              type="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              disabled={createLead.isPending}
              {...form.register("email", {
                required: "Informe seu e-mail.",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Informe um e-mail válido." },
              })}
            />
            {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
          </div>

          {createLead.error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {createLead.error.message}
            </p>
          )}

          <button
            type="submit"
            disabled={createLead.isPending}
            className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.97]"
            style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)", color: "white" }}
          >
            {createLead.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {createLead.isPending ? "Enviando..." : "Quero receber novidades"}
          </button>
          <p className="text-center text-xs leading-relaxed text-foreground/50">
            Ao enviar, você concorda em receber contato do Instituto TC sobre esta formação.
          </p>
        </form>
      )}
    </div>
  );
}
