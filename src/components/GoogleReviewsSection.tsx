import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AutoCarousel } from "./AutoCarousel";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  author: string;
  rating: number;
  text: string;
  relative_time: string;
  profile_photo_url?: string;
}

interface ReviewsData {
  name: string;
  rating: number;
  total_reviews: number;
  google_maps_url: string;
  reviews: Review[];
  attribution: string;
}

const MAX_TEXT_LENGTH = 240;

export const GoogleReviewsSection = () => {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedReview, setExpandedReview] = useState<Review | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Use Edge Function to avoid CORS issues
        const { data: reviewsData, error: fetchError } = await supabase.functions.invoke(
          'google-reviews',
          {
            body: {},
          }
        );

        if (fetchError) {
          console.error("Error from edge function:", fetchError);
          throw new Error("Failed to fetch reviews");
        }

        if (reviewsData && reviewsData.reviews && reviewsData.reviews.length > 0) {
          setData(reviewsData);
          setError(false);
        } else {
          throw new Error("No reviews data received");
        }
      } catch (err) {
        console.error("Error fetching Google reviews:", err);
        setError(true);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const truncateText = (text: string) => {
    if (text.length <= MAX_TEXT_LENGTH) return { text, isTruncated: false };
    return {
      text: text.substring(0, MAX_TEXT_LENGTH).trim() + "…",
      isTruncated: true,
    };
  };

  const handleReadMore = (review: Review) => {
    setExpandedReview(review);
    trackEvent("read_more_review", {
      event_category: "social_proof",
      event_label: review.author,
      value: 1,
    });
  };

  const handleViewAllClick = () => {
    trackEvent("view_all_google_reviews", {
      event_category: "social_proof",
      event_label: "google_maps_link",
      value: 1,
    });
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-24 md:py-40 bg-bg-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !data) {
    return (
      <section className="py-24 md:py-40 bg-bg-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center py-12">
            <p className="text-textc-300 text-lg">
              Avaliações indisponíveis no momento.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const reviewCards = data.reviews.map((review, index) => {
    const { text: displayText, isTruncated } = truncateText(review.text);

    return (
      <Card
        key={index}
        className="p-6 md:p-8 bg-surface-700 border-line-700 hover:border-primary-500/30 hover:shadow-elevated transition-all duration-500 h-full flex flex-col rounded-2xl"
      >
        {/* Author Info - Top */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-12 h-12 ring-2 ring-primary-500/20">
            {review.profile_photo_url ? (
              <AvatarImage
                src={review.profile_photo_url}
                alt={review.author}
                className="object-cover"
              />
            ) : null}
            <AvatarFallback className="bg-surface-600 text-textc-100 font-semibold">
              {review.author
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2)
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-textc-100 text-base truncate">
              {review.author}
            </p>
            <p className="text-sm text-textc-300">{review.relative_time}</p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? "fill-primary-500 text-primary-500"
                  : "fill-surface-600 text-surface-600"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-base text-textc-300 leading-relaxed flex-grow">
          "{displayText}"
        </p>

        {/* Read More Button */}
        {isTruncated && (
          <button
            onClick={() => handleReadMore(review)}
            className="text-primary-500 hover:text-primary-400 text-sm font-medium mt-3 text-left transition-colors"
          >
            Ler mais
          </button>
        )}
      </Card>
    );
  });

  return (
    <>
      <section id="avaliacoes" className="py-24 md:py-40 bg-bg-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textc-100 mb-6">
              Avaliações do Google
            </h2>

            {/* Trust Microcopy */}
            <p className="text-sm text-textc-300/70 flex items-center justify-center gap-1.5">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Avaliações verificadas no Google • Atualizadas automaticamente
            </p>
          </div>

          {/* Carousel for all screen sizes */}
          <AutoCarousel autoplayDelay={5000}>{reviewCards}</AutoCarousel>

          {/* Rating Summary - Moved below carousel */}
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl mt-10 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 md:w-7 md:h-7 ${
                    i < Math.floor(data.rating)
                      ? "fill-primary-500 text-primary-500"
                      : "fill-surface-600 text-surface-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-textc-100 font-bold">{data.rating}</span>
            <span className="text-textc-300">•</span>
            <span className="text-textc-300">
              {data.total_reviews} avaliações
            </span>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="group"
            >
              <a
                href={data.google_maps_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleViewAllClick}
              >
                Ver todas no Google
                <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Read More Modal */}
      <Dialog
        open={!!expandedReview}
        onOpenChange={() => setExpandedReview(null)}
      >
        <DialogContent className="bg-surface-700 border-line-700 max-w-lg">
          <DialogHeader>
            {expandedReview && (
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="w-12 h-12 ring-2 ring-primary-500/20">
                  {expandedReview.profile_photo_url ? (
                    <AvatarImage
                      src={expandedReview.profile_photo_url}
                      alt={expandedReview.author}
                      className="object-cover"
                    />
                  ) : null}
                  <AvatarFallback className="bg-surface-600 text-textc-100 font-semibold">
                    {expandedReview.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="text-textc-100 text-lg">
                    {expandedReview.author}
                  </DialogTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < expandedReview.rating
                              ? "fill-primary-500 text-primary-500"
                              : "fill-surface-600 text-surface-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-textc-300">
                      {expandedReview.relative_time}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </DialogHeader>
          {expandedReview && (
            <p className="text-textc-300 leading-relaxed mt-4">
              "{expandedReview.text}"
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
