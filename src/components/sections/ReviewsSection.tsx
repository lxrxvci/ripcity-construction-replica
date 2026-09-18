/**
 * Homepage reviews section.
 *
 * Why it exists: testimonial social proof before the footer CTA.
 * How it works: copy from sections.json reviews block (eyebrow, heading,
 * support, googleCtaLabel); cards map reviews.json (via lib/testimonials)
 * stamping reviews.N.text/.author.
 * How to change it: edit reviews.json (portal Reviews collection) and
 * sections.json reviews block.
 */
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import reviews from "@/content/reviews.json";
import sections from "@/content/sections.json";

export function ReviewsSection() {
  const copy = sections.reviews;
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p
            className="mb-4 text-sm font-bold uppercase tracking-wider text-accent"
            data-cms="sections.reviews.eyebrow"
          >
            {copy.eyebrow}
          </p>
          <h2
            className="mb-4 font-heading text-3xl font-bold lg:text-4xl"
            data-cms="sections.reviews.heading"
          >
            {copy.heading}
          </h2>
          <p
            className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80"
            data-cms="sections.reviews.support"
          >
            {copy.support}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 lg:p-8">
              <div className="mb-4 flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p
                className="mb-6 text-sm leading-relaxed text-foreground/80"
                data-cms={`reviews.${i}.text`}
              >
                {review.text}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {"— "}
                <span data-cms={`reviews.${i}.author`}>{review.author}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href={copy.googleCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <span data-cms="sections.reviews.googleCtaLabel">{copy.googleCtaLabel}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
