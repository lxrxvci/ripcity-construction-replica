import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/testimonials";

const reviews = TESTIMONIALS;

export function ReviewsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            Client Reviews
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
            What Homeowners Are Saying
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80">
            We’ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 lg:p-8">
              <div className="mb-4 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/80">{review.text}</p>
              <p className="text-sm font-semibold text-foreground">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="https://www.google.com/search?q=Rip+City+Construction+reviews"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            Read More Reviews on Google &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
