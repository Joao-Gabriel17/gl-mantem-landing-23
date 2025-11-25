import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Phone } from "lucide-react";
import whatsappHero from "@/assets/whatsapp-hero.png";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-surface-700/20 to-bg-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent/5 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Card className="bg-surface-700/80 backdrop-blur-sm border-line-700 shadow-elevated overflow-visible rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 p-8 sm:p-12 md:p-16 lg:p-20">
            {/* Left Column - Content */}
            <div className="space-y-10 md:space-y-12 flex flex-col justify-center">
              <div className="space-y-6 md:space-y-8 animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textc-100 leading-tight">
                  Respire ar limpo hoje mesmo
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-textc-300 leading-relaxed">
                  Atendimento rápido em Londrina e região. Orçamento sem compromisso em até 2 horas. Chegamos no horário combinado.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-4 md:space-y-5 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full inline-flex items-center justify-center text-base sm:text-lg shadow-elevated hover:shadow-glow h-auto py-4 whitespace-normal break-words text-center"
                  asChild
                >
                  <WhatsAppLink
                    onClick={() => {
                      trackEvent("click_whatsapp_final", {
                        event_category: "conversion",
                        event_label: "final_cta",
                        value: 1,
                      });
                    }}
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    <span className="min-w-0 whitespace-normal break-words leading-snug">
                      Chamar no WhatsApp (43) 98491-0234
                    </span>
                  </WhatsAppLink>
                </Button>
                <Button
                  variant="hero-outline"
                  size="xl"
                  className="w-full inline-flex items-center justify-center text-base sm:text-lg h-auto py-4 whitespace-normal break-words text-center"
                  asChild
                >
                  <WhatsAppLink
                    message="Olá! Quero agendar uma visita técnica gratuita."
                    onClick={() => {
                      trackEvent("click_whatsapp_final", {
                        event_category: "conversion",
                        event_label: "final_cta_secondary",
                        value: 1,
                      });
                    }}
                  >
                    <span className="min-w-0 whitespace-normal break-words leading-snug">
                      Agendar visita técnica gratuita
                    </span>
                  </WhatsAppLink>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4 md:space-y-5 pt-6 md:pt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-3 text-sm md:text-base text-textc-300">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary-500 flex-shrink-0" />
                  <span>Atendemos hoje em Londrina, Cambé, Ibiporã e região</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-textc-300">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary-500 flex-shrink-0" />
                  <span>Orçamento grátis e sem compromisso</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-textc-300">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary-500 flex-shrink-0" />
                  <span>Equipe certificada NR10</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base text-textc-300">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary-500 flex-shrink-0" />
                  <span className="font-semibold text-textc-100">
                    Garantia de 90 dias
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Mockup */}
            <div className="flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative max-w-md w-full">
                <img
                  src={whatsappHero}
                  alt="Atendimento WhatsApp G&L Manutenções - Resposta em até 30 minutos"
                  loading="lazy"
                  className="w-full h-auto rounded-3xl shadow-elevated hover:shadow-glow transition-shadow duration-500"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
