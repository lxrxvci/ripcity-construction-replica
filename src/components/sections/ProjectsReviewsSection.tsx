import { cn } from "@/lib/utils";

const reviews = [
  {
    text: "Cameron and his crew did an extensive, high-end remodel on my kitchen and entry. He was extremely communicative, transparent, and timely throughout the process. The quality of work exceeded our expectations, and the entire experience felt organized from start to finish.",
    author: "Zach, SE Portland Kitchen Remodel",
  },
  {
    text: "Rip City Construction was professional, detail-oriented, and easy to work with. As with any remodeling project, small issues came up along the way, but Cameron handled everything quickly and professionally. We couldn't be happier with the final result.",
    author: "Chris, Peacock Ln. Portland Bathroom Remodel",
  },
  {
    text: "Rip City Construction completed a major remodel for our home including a master bathroom, office, and attic conversion. The craftsmanship and communication throughout the project were excellent and the final work turned out beautiful.",
    author: "Matt, SE 54th Portland Home Remodel",
  },
];

interface ProjectsReviewsSectionProps {
  className?: string;
}

export function ProjectsReviewsSection({ className }: ProjectsReviewsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            Client Reviews
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
            What Homeowners Are Saying
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80">
            We've built our business on referrals, repeat clients, and quality remodeling work
            throughout Portland and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 lg:p-8">
              <div className="mb-4 text-lg text-accent">★★★★★</div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/80">{review.text}</p>
              <p className="text-sm font-semibold text-foreground">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Rip+City+Construction+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-accent bg-transparent px-12 py-4 font-heading text-base font-medium uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            READ MORE REVIEWS ON GOOGLE &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
