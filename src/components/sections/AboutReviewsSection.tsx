import Link from "next/link";
import { cn } from "@/lib/utils";

interface Review {
  stars: number;
  quote: string;
  author: string;
}

const reviews: Review[] = [
  {
    stars: 5,
    quote:
      "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    stars: 5,
    quote:
      "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn't be happier with the final result.",
    author: "Chris, Peacock ln. Portland Bathroom Remodel",
  },
  {
    stars: 5,
    quote:
      "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];

interface AboutReviewsSectionProps {
  className?: string;
}

export function AboutReviewsSection({ className }: AboutReviewsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Client Reviews
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
            What Homeowners Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80">
            We&apos;ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.author} className="text-center">
              <div className="mb-4 text-lg text-accent" aria-label={`${review.stars} out of 5 stars`}>
                {"★".repeat(review.stars)}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-foreground/80">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-foreground/70">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://www.google.com/search?sca_esv=123&q=ripcity+construction+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Read More Reviews on Google &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
