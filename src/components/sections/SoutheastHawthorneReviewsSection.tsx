import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

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

export function SoutheastHawthorneReviewsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-accent decoration-2 underline-offset-4 lg:text-3xl">
            Client Reviews
          </h2>
          <h3 className="mt-4 font-heading text-2xl font-bold text-foreground lg:text-4xl">
            What Homeowners Are Saying
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-accent lg:text-base">
            We’ve built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="flex flex-col items-center text-center"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                “{review.text}”
              </p>
              <p className="mt-4 text-sm font-bold text-foreground">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            href="https://www.google.com/search?q=Rip+City+Construction+reviews"
            size="lg"
          >
            Read More Reviews on Google <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
