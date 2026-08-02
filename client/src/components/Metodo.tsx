import { Scale, Heart, Apple, Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

const publicoAlvo = [
  "Pessoas que vivem no efeito sanfona e não aguentam mais tentar de tudo e fazer restrições",
  "Quem busca uma abordagem que integra corpo, alma e espírito",
  "Mulheres que desejam cuidar do corpo como templo do Espírito Santo",
  "Quem precisa de direção profissional e espiritual para uma vida saudável",
];

const pilares = [
  {
    icon: Apple,
    title: "Nutrição Consciente",
    description: "Aprenda a se alimentar com sabedoria, sem extremismos, honrando seu corpo como criação de Deus.",
  },
  {
    icon: Heart,
    title: "Cura Emocional",
    description: "Trate a raiz emocional que afeta sua relação com a comida e com seu próprio corpo.",
  },
  {
    icon: Sparkles,
    title: "Espiritualidade Integrada",
    description: "Conecte sua jornada de saúde com seu propósito e chamado espiritual.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-display italic text-lg text-primary mb-3">Método Integrado</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            O peso que você carrega na alma{" "}
            <span className="text-gradient-brand italic">também molda o seu corpo</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Content */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "linear-gradient(135deg, #faf5ff, #f3e8ff)" }}
            >
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nutrição + Terapia Cristã</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Para quem é esse método
            </h3>

            <ul className="space-y-4">
              {publicoAlvo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
                  >
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-foreground/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
            >
              Quero conhecer o método
            </a>
          </div>

          {/* Right - Visual card with quote, no AI image */}
          <div className="relative">
            <div
              className="rounded-3xl p-8 md:p-12 shadow-xl h-full flex flex-col justify-center"
              style={{ background: "linear-gradient(135deg, #3d0070 0%, #6b1fa8 100%)" }}
            >
              <Scale className="w-12 h-12 mb-6" style={{ color: "#D4AF37" }} />
              <blockquote className="font-display text-xl md:text-2xl text-white leading-relaxed italic mb-6">
                "Seu corpo é o templo do Espírito Santo. Cuidar dele é um ato de adoração."
              </blockquote>
              <p className="text-white/70 leading-relaxed">
                Nosso método integra nutrição, terapia e fé cristã para tratar a raiz —
                não apenas os sintomas. Porque verdadeira saúde nasce de dentro para fora.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pilares.map((pilar, i) => (
            <div
              key={i}
              className="group rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, #faf5ff, #f3e8ff)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm transition-all"
              >
                <pilar.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                {pilar.title}
              </h4>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
