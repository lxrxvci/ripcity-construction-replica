import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ServicesReviewsSectionProps {
  className?: string;
}

const reviews = [
  {
    stars: 5,
    text: "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    stars: 5,
    text: "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn’t be happier with the final result.",
    author: "Chris, Peacock ln. Portland Bathroom Remodel",
  },
  {
    stars: 5,
    text: "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];

export function ServicesReviewsSection({ className }: ServicesReviewsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">Client Reviews</p>
          <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl">
            What Homeowners Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            We’ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="flex flex-col items-center bg-card p-8 text-center"
            >
              <div className="text-lg text-accent">{"★".repeat(review.stars)}</div>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-foreground/80">
                “{review.text}”
              </p>
              <p className="mt-6 text-sm font-semibold text-foreground">— {review.author}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            href="https://www.google.com/search?q=rip+city+construction+%26+remodeling+llc+google+reviews"
            size="md"
          >
            Read More Reviews on Google &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
