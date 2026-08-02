import { CheckCircle2, ArrowRight, Clock, Globe, Award, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

const formacoes = [
  {
    id: "formacao-tc",
    image: "/manus-storage/formacao-tc_7cc0709d.png",
    title: "Formação Terapeuta Cristã",
    subtitle: "Com Certificação de Capacitação Profissional Validada",
    description: "Capacite-se para restaurar vidas com base na Palavra de Deus.",
    originalPrice: "R$ 4.499",
    price: "R$ 3.960",
    installments: "12x R$ 330",
    badge: "Certificação Validada",
    featured: true,
    highlights: [
      "Certificado de extensão universitária",
      "Chancela da Faculdade FEX Educação",
      "Aulas ao vivo e gravadas",
      "Aulas práticas + acompanhamento",
    ],
  },
  {
    id: "teologia",
    image: "/manus-storage/teologia_3ca58562.png",
    title: "Formação em Teologia",
    subtitle: "Quer entender melhor a vontade de Deus para sua vida?",
    description: "Aprenda a entender as escrituras, ter domínio sobre a palavra e viver o seu ministério com propósito.",
    originalPrice: "R$ 790,00",
    price: "R$ 417,00",
    installments: "mensal",
    badge: "Pós-Graduação",
    featured: false,
    highlights: [
      "Ministro de Cura",
      "Batalha Espiritual",
      "Cura Interior",
      "Fundamentos da Fé",
      "Libertação",
      "Apocalipse",
    ],
  },
  {
    id: "pos-graduacao",
    image: "/manus-storage/pos-graduacao_1bedc12c.png",
    title: "Pós-Graduação",
    subtitle: "Aprenda de forma profunda com embasamento na palavra.",
    description: "Especialização completa com reconhecimento acadêmico e profissional.",
    originalPrice: "R$ 10.000",
    price: "R$ 6.600",
    installments: "12x R$ 550,00 mensal",
    badge: "Pós-Graduação",
    featured: false,
    highlights: [
      "Pós-graduação credenciada",
      "Foco em terapia integrativa cristã",
      "Reconhecimento profissional",
      "Certificado válido em todo Brasil",
    ],
  },
];

export default function Formacoes() {
  return (
    <section id="formacoes" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "linear-gradient(135deg, #f3e8ff, #ede9fe)" }}>
            <Award className="w-4 h-4 text-purple-700" />
            <span className="text-sm font-semibold text-purple-700">Conheça Nossas Formações</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Formações com Certificação de Capacitação Profissional —{" "}
            <span className="text-gradient-brand">válidas em todo o Brasil</span>
          </h2>
          <p className="text-foreground/60 mt-4 text-lg">
            Cursos 100% online, com chancela da Faculdade FEX Educação. Comece hoje.
          </p>
        </div>

        {/* Features bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { icon: Globe, label: "100% Online" },
            { icon: Clock, label: "Aulas ao Vivo e Gravadas" },
            { icon: Award, label: "Certificação Validada" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-foreground/60">
              <f.icon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Formação TC - Full width featured */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl border border-purple-100">
          <img
            src="/manus-storage/formacao-tc_7cc0709d.png"
            alt="Formação Terapeuta Cristã"
            className="w-full h-auto"
          />
        </div>

        {/* Teologia + Pós-Graduação side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <img
              src="/manus-storage/teologia_3ca58562.png"
              alt="Formação em Teologia"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <img
              src="/manus-storage/pos-graduacao_1bedc12c.png"
              alt="Pós-Graduação"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* No conforto da sua casa */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-purple-100 mb-8">
          <img
            src="/manus-storage/no-conforto_487aec4f.png"
            alt="No conforto da sua casa - Formação online completa"
            className="w-full h-auto"
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-foreground/60 mb-6 text-lg">
            Parcelamento em até <strong className="text-foreground">12x sem juros</strong>. Comece hoje mesmo!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 text-lg"
            style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
          >
            Quero me inscrever agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
