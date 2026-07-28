import { cn } from "@/lib/utils";

interface SePortlandRecentProjectsSectionProps {
  className?: string;
}

export function SePortlandRecentProjectsSection({
  className,
}: SePortlandRecentProjectsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-accent">
          Recent Projects
        </p>
        <h2 className="mt-4 text-center font-heading text-2xl font-bold md:text-3xl">
          More Projects from Rip City Construction
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-foreground/80">
          Explore additional kitchen remodels, bathroom renovations, ADUs, and whole-home remodels
          completed throughout Portland.
        </p>
      </div>
    </section>
  );
}
