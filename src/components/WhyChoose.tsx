import { Clock, Wrench, Heart, MessageCircle } from "lucide-react";
import { AutoCarousel } from "./AutoCarousel";

export const WhyChoose = () => {
  const pillars = [
    {
      icon: Clock,
      title: "Pontualidade real",
      description:
        "Chegamos no horário combinado e respeitamos sua rotina - sem você ficar esperando o dia todo.",
    },
    {
      icon: Wrench,
      title: "Instalação sem improviso",
      description:
        "Nível, dreno e isolamento corretos = mais economia, zero goteira, acabamento que não envergonha.",
    },
    {
      icon: Heart,
      title: "Higienização que funciona",
      description:
        "Método profissional que elimina ácaros e fungos de verdade, não só limpa por cima.",
    },
    {
      icon: MessageCircle,
      title: "Suporte humanizado",
      description:
        "Atendimento rápido no WhatsApp, equipe treinada e garantia de 90 dias com pós-venda que responde.",
    },
  ];

  const pillarCards = pillars.map((pillar, index) => {
    const Icon = pillar.icon;
    return (
      <div
        key={index}
        className="group text-center space-y-6 p-8 md:p-12 rounded-2xl bg-surface-700/50 border border-line-700 hover:border-primary-500/30 hover:bg-surface-700 hover:shadow-elevated transition-all duration-500 h-full"
      >
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-500">
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary-500" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-textc-100">
            {pillar.title}
          </h3>
          <p className="text-lg md:text-xl text-textc-300 leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section id="why-choose" className="py-24 md:py-40 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textc-100 mb-8">
            Por Que Escolher a G&L?
          </h2>
          <p className="text-xl md:text-2xl text-textc-300">
            Comprometimento com excelência em cada detalhe do serviço
          </p>
        </div>

        {/* Pillars Carousel */}
        <AutoCarousel autoplayDelay={4500}>
          {pillarCards}
        </AutoCarousel>
      </div>
    </section>
  );
};
