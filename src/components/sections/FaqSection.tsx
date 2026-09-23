/**
 * Homepage FAQ section: visible Q&A backing the FAQPage JSON-LD.
 *
 * Why it exists: the 2026-09-23 ECARAT audit found no FAQPage schema on
 * the main pages; Google requires marked-up Q&A to be visible on the
 * page, so the homepage carries a compact FAQ built only from copy that
 * already exists elsewhere on the site (about/services copy and the blog
 * post FAQ in posts.json).
 * How it works: renders faq.json (engine-managed collection, like
 * posts.json - edited by commit, no data-cms stamps) as a static,
 * always-expanded list; page.tsx feeds the same items to
 * createFaqPageSchema so markup and visible copy can never drift.
 * How to change it: edit src/content/faq.json. Keep answers factual and
 * sourced from real site copy - never invent pricing or credentials.
 */
import { cn } from "@/lib/utils";
import faq from "@/content/faq.json";

interface FaqSectionProps {
  className?: string;
}

export function FaqSection({ className }: FaqSectionProps) {
  return (
    <section className={cn("bg-secondary py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            {faq.eyebrow}
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
            {faq.heading}
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80">
            {faq.support}
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-foreground/10 border-y border-foreground/10">
          {faq.items.map((item) => (
            <div key={item.question} className="py-6">
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                {item.question}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
