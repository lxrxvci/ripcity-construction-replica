import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";

interface Sw78thReviewsSectionProps {
  className?: string;
}

const reviews = [
  {
    rating: 5,
    text: "Rip City Construction built a beautiful detached ADU for our family. The team was professional, communicative, and delivered quality work from foundation to finish.",
    author: "Homeowner in Southwest Portland",
  },
  {
    rating: 5,
    text: "We could not be happier with our kitchen and living room renovation. Rip City kept the project organized and on schedule, and the craftsmanship exceeded our expectations.",
    author: "Homeowner in Southeast Portland",
  },
  {
    rating: 5,
    text: "From design to final walkthrough, Rip City made our basement remodel easy. They were transparent, reliable, and the finished space is exactly what we wanted.",
    author: "Homeowner in Northeast Portland",
  },
];

export function Sw78thReviewsSection({ className }: Sw78thReviewsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">Client Reviews</p>
          <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
            What Homeowners Are Saying
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background p-6 text-center">
              <div className="flex justify-center gap-1 text-accent">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-foreground/60">
                {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" href="https://www.google.com/search?q=Rip+City+Construction+Portland+reviews" size="md">
            Read More Reviews on Google &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
