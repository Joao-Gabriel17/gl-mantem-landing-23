import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-ac-install.jpg";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-32 overflow-hidden bg-bg-900">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, rgba(220,158,21,.06) 0%, rgba(197,143,19,0) 60%)" }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 items-start">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 animate-fade-in-up">
            <Badge variant="outline" className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm border-primary-500/30 bg-primary-500/10">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
              <span className="whitespace-normal sm:whitespace-nowrap">Certificação NR10 • +350 clientes em Londrina</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] sm:leading-[1.1] text-textc-100">
              Ar-condicionado instalado com{" "}
              <span className="hl hl-dotted">pontualidade</span>{" "}
              e{" "}
              <span className="hl hl-marker hl-marker--v1 hl-shadow">acabamento</span>{" "}
              <span className="hl hl-marker hl-marker--v2 hl-shadow">impecável</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-textc-300 leading-relaxed max-w-2xl">
              Equipe certificada em Londrina e região. Higienização profissional que elimina ácaros, reduz consumo de energia e melhora sua saúde. Orçamento em até 2 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto text-sm sm:text-base" asChild>
                <WhatsAppLink onClick={() => trackEvent("click_whatsapp_hero", {event_category:"conversion",event_label:"hero_primary_cta",value:1})}>
                  Pedir orçamento no WhatsApp
                </WhatsAppLink>
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto text-sm sm:text-base"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior:"smooth", block:"start" })}>
                Ver nossos serviços
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in lg:translate-y-[15vh] mt-8 lg:mt-0">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated">
              <img src={heroImage} alt="Técnico instalando ar-condicionado split — G&L Manutenções em Londrina"
                   loading="eager" fetchPriority="high" decoding="async" className="w-full h-auto object-cover"
                   width={1280} height={853} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
