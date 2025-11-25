import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "De quanto em quanto tempo devo higienizar?",
      answer:
        "Residencial: a cada 6 meses (ou antes se tiver alergias/pets). Comercial: 3-4 meses. A limpeza regular reduz consumo de energia e melhora a qualidade do ar que você respira.",
    },
    {
      question: "Quanto tempo leva a instalação ou higienização?",
      answer:
        "Instalação: 3-6h por aparelho (depende dos BTUs). Higienização: 60-90 min por aparelho. Protegemos o ambiente e deixamos tudo limpo. Você volta para casa e já está tudo pronto.",
    },
    {
      question: "Vocês atendem onde e em quanto tempo?",
      answer:
        "Londrina, Cambé, Ibiporã, Rolândia, Arapongas e região. Agendamento rápido - geralmente atendemos em 24-48h. Chegamos no horário combinado (sem aquela janela de 4 horas).",
    },
    {
      question: "Tem garantia? Quais formas de pagamento?",
      answer:
        "Sim, 90 dias de garantia sobre o serviço executado. Respeitamos a garantia do fabricante. Pagamento: PIX, cartão, definido no orçamento. Orçamento sempre sem compromisso.",
    },
    {
      question: "O que está incluído na higienização?",
      answer:
        "Limpeza completa de filtros, serpentina, gabinete, dreno e ventilador. Remoção de ácaros, fungos e bactérias. Aplicação de produtos profissionais. Teste de funcionamento e medição de temperatura. Você sente a diferença no cheiro e no frescor.",
    },
    {
      question: "E se o aparelho tiver problema depois?",
      answer:
        "Garantia de 90 dias cobre qualquer problema relacionado ao nosso serviço. Atendimento rápido via WhatsApp. Se precisar, voltamos sem custo adicional (dentro da garantia).",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-40 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textc-100 mb-8">
            Perguntas Frequentes
          </h2>
          <p className="text-xl md:text-2xl text-textc-300">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface-700 border border-line-700 rounded-2xl px-6 md:px-8 hover:border-primary-500/30 hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 md:py-8">
                  <span className="text-lg md:text-xl font-semibold text-textc-100 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-textc-300 pb-6 md:pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
