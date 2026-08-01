import { Target, Users, Shield, HeartHandshake } from "lucide-react";

const valores = [
  {
    icon: Target,
    title: "Propósito",
    description: "Despertar mulheres para viverem seu chamado, cumprindo seu ministério com excelência e fé.",
  },
  {
    icon: Shield,
    title: "Certificação",
    description: "Reconhecimento oficial e credibilidade acadêmica para atuar com segurança profissional.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Uma rede de mulheres cristãs que se apoiam e crescem juntas em fé e técnica.",
  },
  {
    icon: HeartHandshake,
    title: "Acolhimento",
    description: "Um espaço seguro para superar medos e sentimentos de incapacidade com amor e direção.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gradient-brand-soft">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/formacao-card_76da877f.png"
                alt="Formação de Terapeutas Cristãs"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-8 -left-4 md:left-8 max-w-sm bg-white rounded-2xl shadow-xl p-6">
              <p className="font-display italic text-lg text-foreground/80 leading-relaxed">
                "Você pode viver do que ama, cumprir seu propósito e ainda impactar
                vidas com excelência."
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="font-display italic text-lg text-primary">Nossa Missão</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Uma plataforma que une{" "}
              <span className="text-gradient-brand">fé, técnica e reconhecimento</span>{" "}
              para mulheres cristãs
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Nascemos do desejo de ver mulheres cristãs ocupando seus lugares no mercado de
              trabalho com dignidade, competência e autoridade espiritual. Acreditamos que é
              possível servir a Deus através do profissionalismo, e que a certificação é uma
              ponte entre o chamado e a realização.
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Nossas formações preparam mulheres cristãs para ingressar no mercado de trabalho
              com reconhecimento, certificação e autoridade espiritual — superando medos e
              sentimentos de incapacidade.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {valores.map((valor, i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-border/30 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl gradient-brand-soft flex items-center justify-center mb-3">
                    <valor.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground mb-1">
                    {valor.title}
                  </h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
