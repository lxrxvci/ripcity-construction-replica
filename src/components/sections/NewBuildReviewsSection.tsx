import { Button } from "@/components/ui/Button";

const reviews = [
  {
    quote:
      "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    quote:
      "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally.",
    author: "Chris, Peacock Ln. Portland Bathroom Remodel",
  },
  {
    quote:
      "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the results speak for themselves.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];

export function NewBuildReviewsSection() {
  return (
    <section className="bg-background px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Client Reviews
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold leading-tight lg:text-4xl">
            What Homeowners Are Saying
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/80">
            We&apos;ve built our business on referrals, repeat clients, and quality
            remodeling work throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.author} className="text-center md:text-left">
              <div className="mb-4 text-accent">★★★★★</div>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href="https://www.google.com/search?q=rip+city+construction+%26+remodeling+llc+google+"
            size="lg"
            variant="outline"
          >
            Read More Reviews on Google &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
