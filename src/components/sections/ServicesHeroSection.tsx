import { cn } from "@/lib/utils";

interface ServicesHeroSectionProps {
  className?: string;
}

export function ServicesHeroSection({ className }: ServicesHeroSectionProps) {
  return (
    <section
      className={cn(
        "bg-background py-24 pt-36 text-center lg:py-32 lg:pt-44",
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1 className="font-heading text-4xl font-medium text-accent underline decoration-2 underline-offset-8 md:text-5xl lg:text-6xl">
          Our Remodeling Services
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
          We specialize in high-quality residential remodeling in Portland, including kitchens,
          bathrooms, ADUs, home additions, and basement renovations. Every project is built with
          attention to detail, clear communication, and a focus on long-term value.
        </p>
      </div>
    </section>
  );
}
