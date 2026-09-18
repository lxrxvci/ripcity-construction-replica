/**
 * Services index hero (/services).
 *
 * Why it exists: introduces the service catalog.
 * How it works: renders services-page.json hero block, stamped
 * services-page.hero.heading/.support.
 * How to change it: edit services-page.json (portal Services Page
 * collection).
 */
import { cn } from "@/lib/utils";
import servicesPage from "@/content/services-page.json";

interface ServicesHeroSectionProps {
  className?: string;
}

export function ServicesHeroSection({ className }: ServicesHeroSectionProps) {
  const copy = servicesPage.hero;
  return (
    <section
      className={cn(
        "bg-background py-24 pt-36 text-center lg:py-32 lg:pt-44",
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1
          className="font-heading text-4xl font-medium text-accent underline decoration-2 underline-offset-8 md:text-5xl lg:text-6xl"
          data-cms="services-page.hero.heading"
        >
          {copy.heading}
        </h1>
        <p
          className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base"
          data-cms="services-page.hero.support"
        >
          {copy.support}
        </p>
      </div>
    </section>
  );
}
