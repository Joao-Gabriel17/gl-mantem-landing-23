import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-ac-install.jpg";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20 sm:pb-24 md:pb-32 lg:pb-40 overflow-hidden bg-bg-900">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, rgba(220,158,21,.06) 0%, rgba(197,143,19,0) 60%)" }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 xl:gap-24 items-center">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 animate-fade-in-up">
            <Badge variant="outline" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base border-primary-500/30 bg-primary-500/10 shadow-subtle">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
              <span className="whitespace-normal sm:whitespace-nowrap font-medium">Certificação NR10 • +350 clientes em Londrina</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] text-textc-100">
              Ar-condicionado instalado com{" "}
              <span className="text-primary">pontualidade</span>{" "}
              e{" "}
              <span className="text-primary">acabamento impecável</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-textc-300 leading-relaxed max-w-2xl">
              Equipe certificada em Londrina e região. Higienização profissional que elimina ácaros, reduz consumo de energia e melhora sua saúde. Orçamento em até 2 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6">
              <Button variant="hero" size="xl" className="w-full sm:w-auto text-base sm:text-lg shadow-elevated hover:shadow-glow" asChild>
                <WhatsAppLink onClick={() => trackEvent("click_whatsapp_hero", {event_category:"conversion",event_label:"hero_primary_cta",value:1})}>
                  Pedir orçamento no WhatsApp
                </WhatsAppLink>
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto text-base sm:text-lg"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior:"smooth", block:"start" })}>
                Ver nossos serviços
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in mt-12 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated">
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
