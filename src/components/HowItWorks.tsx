import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Wrench, CheckCircle } from "lucide-react";
import { AutoCarousel } from "./AutoCarousel";

export const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "1",
      title: "Chamar no WhatsApp",
      description: "Respondemos em até 30 minutos. Conte o que precisa e tire suas dúvidas.",
    },
    {
      icon: Calendar,
      step: "2",
      title: "Agendar visita",
      description: "Você escolhe dia e horário. Chegamos pontualmente (98% no horário combinado).",
    },
    {
      icon: Wrench,
      step: "3",
      title: "Realizar serviço",
      description: "Equipe certificada NR10, ambiente protegido, acabamento impecável. 3-6h por instalação.",
    },
    {
      icon: CheckCircle,
      step: "4",
      title: "Garantia e suporte",
      description: "90 dias de garantia + suporte rápido via WhatsApp. Você respira tranquilo.",
    },
  ];

  const stepCards = steps.map((item, index) => {
    const Icon = item.icon;
    return (
      <Card
        key={index}
        className="relative p-8 md:p-10 bg-surface-700 border-line-700 hover:border-primary-500/30 hover:shadow-elevated transition-all duration-300 text-center space-y-6 h-full"
      >
        {/* Step Number Badge */}
        <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-primary-500 text-white font-bold text-2xl flex items-center justify-center shadow-lg">
          {item.step}
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-500/10">
          <Icon className="w-10 h-10 text-primary-500" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-textc-100">
            {item.title}
          </h3>
          <p className="text-lg text-textc-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      </Card>
    );
  });

  return (
    <section id="how-it-works" className="py-24 md:py-40 bg-surface-700/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textc-100 mb-8">
            Como Funciona
          </h2>
          <p className="text-xl md:text-2xl text-textc-300">
            Processo simples e transparente do orçamento até o pós-venda
          </p>
        </div>

        {/* Steps Carousel */}
        <AutoCarousel autoplayDelay={4000}>
          {stepCards}
        </AutoCarousel>
      </div>
    </section>
  );
};
