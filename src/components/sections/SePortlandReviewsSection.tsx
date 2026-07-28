import { cn } from "@/lib/utils";

interface SePortlandReviewsSectionProps {
  className?: string;
}

export function SePortlandReviewsSection({ className }: SePortlandReviewsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-accent">
          Client Reviews
        </p>
        <h2 className="mt-4 text-center font-heading text-2xl font-bold md:text-3xl">
          What Homeowners Are Saying
        </h2>
      </div>
    </section>
  );
}
