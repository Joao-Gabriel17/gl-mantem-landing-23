import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import { AutoCarousel } from "./AutoCarousel";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Antero de Castro Moreira",
      location: "Londrina-PR",
      avatar: avatar1,
      rating: 5,
      text: "Qualidade, prazo e preço justo. Recomendo sem dúvida.",
    },
    {
      name: "Leandro Marcondes",
      location: "Londrina-PR",
      avatar: avatar2,
      rating: 5,
      text: "Profissionais excelentes, serviço de qualidade. Bruno super educado, estão de parabéns!",
    },
    {
      name: "Osok Brasil",
      location: "Londrina-PR",
      avatar: avatar3,
      rating: 5,
      text: "Profissionais em tudo. Parabéns pelo trabalho!",
    },
    {
      name: "Giovanni Toffoletto",
      location: "Londrina-PR",
      avatar: avatar4,
      rating: 5,
      text: "Recomendo! Bom preço e qualidade de verdade.",
    },
  ];

  const testimonialCards = testimonials.map((testimonial, index) => (
    <Card
      key={index}
      className="p-8 md:p-10 bg-surface-700 border-line-700 hover:border-primary-500/30 hover:shadow-elevated transition-all duration-500 h-full flex flex-col rounded-2xl"
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-primary-500 text-primary-500" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-lg md:text-xl text-textc-300 mb-8 leading-relaxed flex-grow">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-line-700">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name} - Cliente satisfeito G&L Manutenções`}
          loading="lazy"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-primary-500/20"
        />
        <div>
          <p className="font-semibold text-textc-100 text-base md:text-lg">
            {testimonial.name}
          </p>
          <p className="text-sm md:text-base text-textc-300">
            {testimonial.location}
          </p>
        </div>
      </div>
    </Card>
  ));

  return (
    <section id="testimonials" className="py-24 md:py-40 bg-surface-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textc-100 mb-8">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl md:text-2xl text-textc-300">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>

        {/* Testimonials Carousel */}
        <AutoCarousel autoplayDelay={5000}>
          {testimonialCards}
        </AutoCarousel>

        {/* Google Reviews Link */}
        <div className="text-center mt-12 animate-fade-in">
          <a 
            href="https://www.google.com/search?q=G%26L+Manuten%C3%A7%C3%B5es" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl text-primary-500 hover:text-primary-600 transition-colors font-semibold"
            onClick={() => {
              trackEvent("view_reviews", {
                event_category: "social_proof",
                event_label: "testimonials_google_link",
                value: 1,
              });
            }}
          >
            <Star className="w-6 h-6 fill-primary-500 text-primary-500" />
            4,9★ no Google • Ver todas as 32 avaliações →
          </a>
        </div>
      </div>
    </section>
  );
};
