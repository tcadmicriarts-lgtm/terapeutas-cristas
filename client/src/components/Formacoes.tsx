/**
 * Direção visual: identidade Instituto TC — púrpura profundo, dourado e presença editorial.
 * Esta seção prioriza imagens reais das formações e CTAs de checkout claros e seguros.
 */
import { ArrowUpRight, Award, CreditCard, Globe, Clock } from "lucide-react";

const checkoutLinks = {
  formacaoTc: "https://pay.kiwify.com.br/KPuty2z",
  teologia: "https://pay.kiwify.com.br/7CAZL0N",
  posGraduacao: "https://pay.kiwify.com.br/thmk8Hg",
};

function CheckoutButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
      style={{
        background: "linear-gradient(135deg, #D4AF37, #F0D060)",
        color: "#3d0070",
      }}
    >
      <CreditCard className="h-4 w-4" />
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export default function Formacoes() {
  return (
    <section id="formacoes" className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "linear-gradient(135deg, #f3e8ff, #ede9fe)" }}
          >
            <Award className="h-4 w-4 text-purple-700" />
            <span className="text-sm font-semibold text-purple-700">Conheça Nossas Formações</span>
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Formações com Certificação de Capacitação Profissional —{" "}
            <span className="text-gradient-brand">válidas em todo o Brasil</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Cursos 100% online, com chancela da Faculdade FEX Educação. Comece hoje.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            { icon: Globe, label: "100% Online" },
            { icon: Clock, label: "Aulas ao Vivo e Gravadas" },
            { icon: Award, label: "Certificação Validada" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-foreground/60">
              <Icon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Formação principal */}
        <article className="mb-8 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl">
          <img
            src="/manus-storage/formacao-tc_7cc0709d.png"
            alt="Formação Terapeuta Cristã"
            className="h-auto w-full"
          />
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-7">
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">Formação Terapeutas Cristãs</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                Faça sua inscrição e prossiga para o checkout com cartão ou PIX.
              </p>
            </div>
            <CheckoutButton href={checkoutLinks.formacaoTc} label="Inscreva-se Agora" />
          </div>
        </article>

        {/* Formações complementares */}
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/manus-storage/teologia_3ca58562.png"
              alt="Formação em Teologia"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="font-display text-2xl font-semibold text-foreground">Formação em Teologia</p>
              <p className="mt-1 mb-5 text-sm leading-relaxed text-foreground/60">
                Clique para escolher cartão ou PIX no checkout seguro.
              </p>
              <CheckoutButton href={checkoutLinks.teologia} label="Matricule-se em Teologia" />
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/manus-storage/pos-graduacao_1bedc12c.png"
              alt="Pós-Graduação em Neurociência Cristã e Transformação Comportamental"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="font-display text-2xl font-semibold text-foreground">Pós-Graduação</p>
              <p className="mt-1 mb-5 text-sm leading-relaxed text-foreground/60">
                Neurociência Cristã e Transformação Comportamental.
              </p>
              <CheckoutButton href={checkoutLinks.posGraduacao} label="Inscreva-se na Pós" />
            </div>
          </article>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-purple-100 shadow-xl">
          <img
            src="/manus-storage/no-conforto_487aec4f.png"
            alt="Formações online no conforto da sua casa"
            className="h-auto w-full"
          />
        </div>

        <p className="mt-8 text-center text-sm text-foreground/55">
          Ao clicar em “Inscreva-se”, você será direcionada ao checkout para finalizar o pagamento por cartão ou PIX.
        </p>
      </div>
    </section>
  );
}
