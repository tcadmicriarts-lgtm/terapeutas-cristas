import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

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
                src="/manus-storage/logo-tc-oficial_ab31c903.png"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-full text-white font-semibold shadow-md"
              style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
