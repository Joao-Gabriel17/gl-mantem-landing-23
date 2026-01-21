import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import logoImage from "@/assets/logo.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "services", label: "Serviços", href: "#features" },
    { id: "why-choose", label: "Diferenciais", href: "#why-choose" },
    { id: "how-it-works", label: "Como Funciona", href: "#how-it-works" },
    { id: "avaliacoes", label: "Avaliações", href: "#avaliacoes" },
    { id: "faq", label: "FAQs", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-900/80 backdrop-blur-lg border-b border-line-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src={logoImage} 
              alt="G&L Manutenções" 
              className="w-[180px] max-w-[200px] md:w-[240px] md:max-w-[260px] h-auto" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-textc-300 hover:text-textc-100 focus:text-textc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded px-2 py-1 -mx-2 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="hero" size="lg" asChild>
              <WhatsAppLink>WhatsApp</WhatsAppLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-surface-700 border-t border-line-700 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-2 -mx-2 text-textc-300 hover:text-textc-100 focus:text-textc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="w-full" asChild>
              <WhatsAppLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                WhatsApp
              </WhatsAppLink>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
