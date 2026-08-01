import { CheckCircle2, ArrowRight, Clock, Globe, Award } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

const formacoes = [
  {
    title: "Formação de Terapeutas Cristãs",
    description:
      "A primeira formação com certificado do MEC. Capacitação profissional e espiritual para transformar vidas com sabedoria, técnica e direção do Espírito Santo.",
    highlights: [
      "Certificado de extensão universitária",
      "Chancela da Faculdade FEX Educação",
      "Base bíblica e terapêutica integradas",
    ],
    badge: "Certificado MEC",
    featured: true,
  },
  {
    title: "Teologia Cristã",
    description:
      "Fundamente sua prática terapêutica na Palavra de Deus. Estudos teológicos que integram fé, conhecimento e ministério para atuar com autoridade espiritual.",
    highlights: [
      "Formação teológica completa",
      "Reconhecimento oficial",
      "Integrada à prática terapêutica",
    ],
    badge: "Pós-MEC",
    featured: false,
  },
  {
    title: "Pós-Graduação em Terapia Cristã",
    description:
      "Especialize-se com uma pós-graduação credenciada pela FEX Educação. Aprimore suas habilidades e conquiste reconhecimento acadêmico e profissional.",
    highlights: [
      "Pós-graduação credenciada",
      "Foco em terapia integrativa cristã",
      "Reconhecimento profissional",
    ],
    badge: "Pós-Graduação",
    featured: false,
  },
];

const features = [
  { icon: Globe, label: "100% Online" },
  { icon: Clock, label: "Estude no seu ritmo" },
  { icon: Award, label: "Certificação oficial" },
];

export default function Formacoes() {
  return (
    <section id="formacoes" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-display italic text-lg text-primary mb-3">Conheça Nossas Formações</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Formações Certificadas para{" "}
            <span className="text-gradient-brand">quem deseja atuar</span> com conhecimento,
            técnica e reconhecimento oficial.
          </h2>
        </div>

        {/* Features bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-foreground/60">
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {formacoes.map((formacao, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                formacao.featured
                  ? "gradient-brand text-white shadow-xl lg:scale-105"
                  : "bg-white border border-border/50 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6 ${
                  formacao.featured
                    ? "bg-white/20 text-white"
                    : "gradient-brand-soft text-primary"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                {formacao.badge}
              </div>

              {/* Title */}
              <h3 className={`font-display text-2xl font-semibold mb-4 ${formacao.featured ? "text-white" : "text-foreground"}`}>
                {formacao.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${formacao.featured ? "text-white/80" : "text-foreground/60"}`}>
                {formacao.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {formacao.highlights.map((highlight, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${formacao.featured ? "text-white" : "text-primary"}`} />
                    <span className={`text-sm ${formacao.featured ? "text-white/90" : "text-foreground/70"}`}>
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group ${
                  formacao.featured ? "text-white hover:gap-3" : "text-primary hover:gap-3"
                }`}
              >
                Quero saber mais
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">
            <strong className="text-foreground">Curso 100% online</strong>, com chancela da Faculdade FEX Educação.
            Comece hoje com certificado de extensão universitária reconhecido pelo MEC.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-brand text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Quero ser uma Terapeuta
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
