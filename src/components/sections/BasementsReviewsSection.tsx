import { Button } from "@/components/ui/Button";

const reviews = [
  {
    stars: 5,
    text: "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "— Zach, SE Portland Kitchen Remodel",
  },
  {
    stars: 5,
    text: "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn't be happier with the final result.",
    author: "— Chris, Peacock ln. Portland Bathroom Remodel",
  },
  {
    stars: 5,
    text: "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "— Matt, SE 54th Portland Home Remodel",
  },
];

export function BasementsReviewsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Client Reviews
          </p>
          <h2 className="mb-3 font-heading text-2xl font-bold leading-tight text-foreground lg:text-3xl">
            What Homeowners Are Saying
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80">
            We've built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-lg text-accent">{"★".repeat(review.stars)}</div>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80">{review.text}</p>
              <p className="text-sm font-bold text-foreground">{review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href="https://www.google.com/search?q=rip+city+construction+%26+remodel"
            variant="outline"
            size="md"
          >
            Read More Reviews on Google &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
