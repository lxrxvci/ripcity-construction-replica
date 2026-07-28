import { cn } from "@/lib/utils";

interface ProjectPhotoshopReviewsSectionProps {
  className?: string;
}

const reviews = [
  {
    stars: 5,
    quote:
      "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    attribution: "— Zach, SE Portland Kitchen Remodel",
  },
  {
    stars: 5,
    quote:
      "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn’t be happier with the final result.",
    attribution: "— Chris, Peacock ln. Portland Bathroom Remodel",
  },
  {
    stars: 5,
    quote:
      "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    attribution: "— Matt, SE 54th Portland Home Remodel",
  },
];

export function ProjectPhotoshopReviewsSection({ className }: ProjectPhotoshopReviewsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Client Reviews
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground lg:text-3xl">
            What Homeowners Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            We’ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center gap-1 text-accent">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="sr-only">{review.stars} out of 5 stars</p>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                “{review.quote}”
              </blockquote>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-foreground/60">
                {review.attribution}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/search?q=Rip+City+Construction+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-heading text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
          >
            Read More Reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
