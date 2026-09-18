/**
 * Featured service cards on /services.
 *
 * Why it exists: the visual catalog of the four headline services.
 * How it works: cards map services-featured.json stamping
 * services-featured.N.title/.description/.image; the learn-more label is
 * the shared services-page.featuredLearnMoreLabel stamp.
 * How to change it: edit services-featured.json; the label in
 * services-page.json.
 */
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import servicesFeatured from "@/content/services-featured.json";
import servicesPage from "@/content/services-page.json";

interface ServicesFeaturedSectionProps {
  className?: string;
}

export function ServicesFeaturedSection({ className }: ServicesFeaturedSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesFeatured.map((service, i) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden bg-card text-center"
            >
              <Link href={service.href} className="block overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  data-cms={`services-featured.${i}.image`}
                />
              </Link>
              <div className="flex flex-1 flex-col items-center p-6">
                <h3 className="font-heading text-lg font-semibold text-accent">
                  <Link
                    href={service.href}
                    className="underline decoration-1 underline-offset-4 hover:opacity-80"
                    data-cms={`services-featured.${i}.title`}
                  >
                    {service.title}
                  </Link>
                </h3>
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80"
                  data-cms={`services-featured.${i}.description`}
                >
                  {service.description}
                </p>
                <div className="mt-6">
                  <Button variant="outline" href={service.href} size="md">
                    <span data-cms="services-page.featuredLearnMoreLabel">
                      {servicesPage.featuredLearnMoreLabel}
                    </span>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
