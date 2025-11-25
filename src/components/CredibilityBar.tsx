import { Star, Shield, Zap, Clock, CheckCircle } from "lucide-react";
import { AutoCarousel } from "./AutoCarousel";

export const CredibilityBar = () => {
  const credentials = [
    {
      icon: Star,
      title: "Avaliações Google",
      value: "4,9★ / 32 reviews",
    },
    {
      icon: Shield,
      title: "Garantia de serviço",
      value: "90 dias garantidos",
    },
    {
      icon: Zap,
      title: "Certificação NR10",
      value: "Equipe certificada",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      value: "98% no horário",
    },
    {
      icon: CheckCircle,
      title: "Resposta rápida",
      value: "WhatsApp em 30min",
    },
  ];

  const credentialItems = credentials.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center space-y-3 p-6 md:p-8 animate-fade-in"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-500/10 flex items-center justify-center">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
        </div>
        <div>
          <p className="text-sm md:text-base text-textc-300 mb-1 font-medium">{item.title}</p>
          <p className="text-base md:text-lg font-semibold text-textc-100">{item.value}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="py-16 md:py-20 bg-surface-700/50 border-y border-line-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AutoCarousel autoplayDelay={3500}>
          {credentialItems}
        </AutoCarousel>
      </div>
    </section>
  );
};
