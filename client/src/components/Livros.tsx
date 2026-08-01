import { BookOpen, Heart, Sparkles, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

const beneficios = [
  {
    icon: Heart,
    title: "Cura emocional à luz da Palavra",
    description: "Encontre restauração e libertação através de ensinamentos bíblicos práticos.",
  },
  {
    icon: Sparkles,
    title: "Fortalecimento da fé",
    description: "Devocionais que aproximam você de Deus e fortalecem sua caminhada espiritual.",
  },
  {
    icon: BookOpen,
    title: "Autoconhecimento cristão",
    description: "Descubra quem você é em Cristo e viva o propósito para o qual foi criada.",
  },
];

const dores = [
  "Você se sente cansada de ser forte sozinha?",
  "Carrega dores emocionais que parecem não ter fim?",
  "Sente que perdeu a conexão com Deus?",
  "Deseja um recomeço verdadeiro com Ele?",
];

export default function Livros() {
  return (
    <section id="livros" className="py-20 md:py-28 bg-gradient-brand-soft">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-display italic text-lg text-primary mb-3">Livros para Mulheres</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Livros para mulheres que estão{" "}
            <span className="text-gradient-brand italic">cansadas de ser fortes sozinhas</span>
          </h2>
          <p className="text-foreground/60 mt-4 text-lg">
            Livros cristãos devocionais e terapêuticos para mulheres que desejam cura emocional,
            fortalecimento da fé e um recomeço verdadeiro com Deus.
          </p>
        </div>

        {/* Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/livros-card_03e40fa6.png"
                alt="Livros cristãos devocionais e terapêuticos"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Social proof badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="font-display text-3xl font-bold text-gradient-brand">+50</p>
              <p className="text-sm text-foreground/60 mt-1">
                mulheres já vivem a transformação em suas vidas com os nossos livros!
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Se alguma dessas dores é sua…
            </h3>
            <ul className="space-y-3">
              {dores.map((dor, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-lg">{dor}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-border/30">
              <p className="text-foreground/70 leading-relaxed">
                <strong className="text-foreground">Saiba que existe esperança.</strong> Muitas mulheres
                já passaram por isso e encontraram cura e transformação através da Palavra.
                Nossos livros te conectam com Deus.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-brand text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Comprar agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-semibold border border-border shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Falar com uma terapeuta cristã
              </a>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {beneficios.map((beneficio, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-brand-soft flex items-center justify-center mx-auto mb-5">
                <beneficio.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                {beneficio.title}
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
