import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const reviews = [
  {
    quote:
      "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    quote:
      "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn’t be happier with the final result.",
    author: "Chris, Peacock ln. Portland Bathroom Remodel",
  },
  {
    quote:
      "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];

interface AduHomeAdditionsPortlandReviewsSectionProps {
  className?: string;
}

export function AduHomeAdditionsPortlandReviewsSection({
  className,
}: AduHomeAdditionsPortlandReviewsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Client Reviews</p>
          <h2 className="font-heading text-3xl font-bold lg:text-4xl">What Homeowners Are Saying</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
            We&apos;ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="mb-4 text-lg text-accent">★★★★★</div>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80">&ldquo;{review.quote}&rdquo;</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="https://www.google.com/search?q=ripcity+construction+reviews" variant="outline">
            READ MORE REVIEWS ON GOOGLE →
          </Button>
        </div>
      </div>
    </section>
  );
}
