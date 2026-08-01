import { Award, BookOpen, Heart, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/hero-bg_2e11e4fc.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-in fade-in slide-in-from-bottom duration-500">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Certificado reconhecido pelo MEC</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Construa sua carreira{" "}
            <span className="text-gradient-brand italic">sem abrir mão</span>{" "}
            da sua fé
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Capacite-se para transformar vidas e ser reconhecida. Nossas formações preparam
            mulheres cristãs para ingressar no mercado de trabalho com reconhecimento,
            certificação e autoridade espiritual.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <a
              href="#formacoes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-brand text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Conheça Nossas Formações
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-semibold border border-border shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Quero ser uma Terapeuta
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 max-w-lg animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-brand">+50</p>
              <p className="text-sm text-muted-foreground mt-1">Mulheres transformadas</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-brand">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Online e flexível</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-brand">MEC</p>
              <p className="text-sm text-muted-foreground mt-1">Certificação oficial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-foreground/40" />
        </div>
      </div>
    </section>
  );
}
