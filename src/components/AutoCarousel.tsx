import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

interface AutoCarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoplayDelay?: number;
}

export const AutoCarousel = ({ 
  children, 
  className = "",
  autoplayDelay = 3000 
}: AutoCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Resume autoplay after manual interaction
    emblaApi.on("pointerUp", () => {
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) {
        autoplay.play();
      }
    });
  }, [emblaApi]);

  return (
    <div className="relative -mx-4 sm:-mx-6">
      <div className="overflow-hidden px-4 sm:px-6" ref={emblaRef}>
        <div className={`flex ${className}`}>
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
