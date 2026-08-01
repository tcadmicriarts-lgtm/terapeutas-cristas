import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Formações", href: "#formacoes" },
  { label: "Livros", href: "#livros" },
  { label: "Método", href: "#metodo" },
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
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-brand flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <span className="font-display font-bold text-white text-lg md:text-xl">TC</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-display text-lg md:text-xl font-semibold leading-none transition-colors ${scrolled ? "text-foreground" : "text-foreground"}`}>
                Terapeutas Cristãs
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Formação com Fé e Certificação</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-brand text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/50 animate-in fade-in slide-in-from-top duration-200">
          <div className="container py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-full gradient-brand text-white font-semibold shadow-md"
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
