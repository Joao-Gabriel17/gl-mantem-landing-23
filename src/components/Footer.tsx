import { Instagram, Phone, Mail, Clock, Facebook } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import logoImage from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-bg-800 to-bg-900 border-t border-line-700">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Logo e Tagline - Centralizado e Destacado */}
        <div className="flex flex-col items-center text-center pt-12 md:pt-16 pb-8 md:pb-12">
          <div className="mb-0 animate-fade-in">
            <img 
              src={logoImage} 
              alt="G&L Manutenções" 
              className="w-[140px] max-w-[160px] md:w-[180px] md:max-w-[200px] h-auto transition-all duration-300 hover:scale-105 drop-shadow-lg" 
            />
          </div>
          <p className="text-base md:text-lg text-textc-200 font-medium max-w-md animate-fade-in">
            Valores que viram confiança.<br />
            E confiança que vira parceria!
          </p>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 py-8 md:py-12">
          {/* Contact */}
          <div className="text-center md:text-left space-y-5 animate-fade-in">
            <h3 className="font-bold text-lg md:text-xl text-textc-100 mb-4">
              Fale Conosco
            </h3>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <WhatsAppLink
                className="flex items-center gap-3 text-textc-200 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-primary-500/10 font-medium w-fit"
                onClick={() => {
                  trackEvent("click_phone_footer", {
                    event_category: "engagement",
                    event_label: "footer_contact",
                    value: 1,
                  });
                }}
              >
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>(43) 99168-5885</span>
              </WhatsAppLink>
              <a
                href="mailto:glplacaseletronicas@gmail.com"
                className="flex items-center gap-3 text-textc-200 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-primary-500/10 font-medium w-fit"
              >
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="break-all">glplacaseletronicas@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-textc-300 px-4 py-2.5 w-fit">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div className="text-sm text-left">
                  <p>Seg a Sex: 08:00 às 18:00</p>
                  <p>Sábado: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left space-y-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-bold text-lg md:text-xl text-textc-100 mb-4">
              Navegação
            </h3>
            <nav className="space-y-2">
              <a
                href="#features"
                className="block text-textc-300 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg transition-all duration-300 py-2.5 px-4 hover:bg-primary-500/10 hover:translate-x-1"
              >
                Nossos Serviços
              </a>
              <a
                href="#how-it-works"
                className="block text-textc-300 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg transition-all duration-300 py-2.5 px-4 hover:bg-primary-500/10 hover:translate-x-1"
              >
                Como Funciona
              </a>
              <a
                href="#testimonials"
                className="block text-textc-300 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg transition-all duration-300 py-2.5 px-4 hover:bg-primary-500/10 hover:translate-x-1"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="block text-textc-300 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg transition-all duration-300 py-2.5 px-4 hover:bg-primary-500/10 hover:translate-x-1"
              >
                Perguntas Frequentes
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left space-y-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-bold text-lg md:text-xl text-textc-100 mb-4">
              Redes Sociais
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/glmanutencoesereparo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center hover:from-primary-500/30 hover:to-primary-600/20 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900 transition-all duration-300 shadow-lg hover:shadow-primary-500/20"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581539174971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center hover:from-primary-500/30 hover:to-primary-600/20 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900 transition-all duration-300 shadow-lg hover:shadow-primary-500/20"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors" />
                </a>
              </div>
              <p className="text-sm text-textc-400 italic">
                Siga-nos para dicas, novidades e promoções!
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-line-700/50 py-6 md:py-8 mt-8 md:mt-12">
          <p className="text-center text-sm text-textc-400">
            © {new Date().getFullYear()} <span className="text-textc-300 font-semibold">G&L Manutenções e Reparos</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
