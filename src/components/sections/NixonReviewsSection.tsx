import { Button } from "@/components/ui/Button";

const reviews = [
  {
    stars: 5,
    quote:
      "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    stars: 5,
    quote:
      "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn\u2019t be happier with the final result.",
    author: "Chris, Peacock ln. Portland Bathroom Remodel",
  },
  {
    stars: 5,
    quote:
      "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];

export function NixonReviewsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
            Client Reviews
          </h2>
          <h3 className="mt-4 font-heading text-3xl font-bold text-foreground lg:text-4xl">
            What Homeowners Are Saying
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-accent lg:text-base">
            We\u2019ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.author} className="text-center">
              <div className="mb-4 text-2xl text-accent">{"\u2605".repeat(review.stars)}</div>
              <p className="text-sm italic leading-relaxed text-foreground/80">"{review.quote}"</p>
              <p className="mt-4 text-xs font-bold text-foreground">\u2014 {review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Button href="https://www.google.com/search?q=Rip+City+Construction+Portland+reviews" variant="outline" size="lg">
            Read More Reviews on Google &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
