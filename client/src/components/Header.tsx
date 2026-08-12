import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Formações", href: "#formacoes" },
  { label: "Cursos", href: "#cursos" },
  { label: "Livros", href: "#livros" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo oficial + texto */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="rounded-xl overflow-hidden shadow-lg transition-transform group-hover:scale-105 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <img
                src="/manus-storage/logo-tc-oficial_fff2ae0d.png"
                alt="Logo Instituto TC - Terapeutas Cristãs"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-display text-lg md:text-xl font-semibold leading-none transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
                style={{ letterSpacing: "0.02em" }}
              >
                Formação Terapeutas Cristãs
              </p>
              <p className={`text-xs mt-1 ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Instituto TC · Adeilda & Débora
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  scrolled ? "text-foreground/70 hover:text-purple-700" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"
                  style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
                />
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                color: scrolled ? "#9b3fd4" : "rgba(255,255,255,0.85)",
                background: scrolled ? "transparent" : "rgba(255,255,255,0.08)",
                border: scrolled ? "1px solid rgba(155,63,212,0.3)" : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </a>
            <a
              href="#formacoes"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                color: "#3d0070",
                border: "1px solid rgba(212,175,55,0.5)",
              }}
            >
              <GraduationCap className="w-4 h-4" />
              Inscreva-se Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-purple-50 text-foreground" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-purple-100 animate-in fade-in slide-in-from-top duration-200">
          <div className="container py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground/80 hover:bg-purple-50 hover:text-purple-700 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#formacoes"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold shadow-md"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                  color: "#3d0070",
                }}
              >
                <GraduationCap className="w-4 h-4" />
                Inscreva-se Agora
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-md"
                style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
              >
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
