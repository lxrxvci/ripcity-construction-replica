import { cn } from "@/lib/utils";

interface SePortlandServicesSectionProps {
  className?: string;
}

export function SePortlandServicesSection({ className }: SePortlandServicesSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-accent">
          Our Services
        </p>
        <h2 className="mt-4 text-center font-heading text-2xl font-bold md:text-3xl">
          Portland Remodeling Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-foreground/80">
          From kitchens and bathrooms to ADUs, additions, and basements, we bring quality
          craftsmanship to every project.
        </p>
      </div>
    </section>
  );
}
