import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CredibilityBar } from "@/components/CredibilityBar";
import { Features } from "@/components/Features";
import { WhyChoose } from "@/components/WhyChoose";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for all anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const offset = 80; // Height of fixed navigation
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Scroll depth tracking (75%)
    let scrollDepth75Tracked = false;
    const handleScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 75 && !scrollDepth75Tracked) {
        scrollDepth75Tracked = true;
        trackEvent("scroll_depth_75", {
          event_category: "engagement",
          event_label: "page_scroll",
          value: 75,
        });
      }
    };

    window.addEventListener('scroll', handleScrollDepth);
    
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener('scroll', handleScrollDepth);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-900 text-textc-300">
      <Navigation />
      <Hero />
      <CredibilityBar />
      <Features />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <GoogleReviewsSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
