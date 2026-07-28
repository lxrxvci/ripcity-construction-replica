import { Button } from "@/components/ui/Button";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex justify-center gap-1 text-accent">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const reviews = [
  {
    text: "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    text: "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn’t be happier with the final result.",
    author: "Chris, Peacock ln. Portland Bathroom Remodel",
  },
  {
    text: "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];

export function BathroomsTileReviewsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Client Reviews
          </h2>
          <h3 className="mt-3 font-heading text-3xl font-bold text-foreground lg:text-4xl">
            What Homeowners Are Saying
          </h3>
          <p className="mt-4 text-sm text-accent">
            We’ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="flex flex-col items-center text-center"
            >
              <StarRating />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-bold text-foreground">&mdash; {review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href="https://www.google.com/search?q=rip+city+construction+%26+remodeling+llc+google+reviews"
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More Reviews on Google &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
