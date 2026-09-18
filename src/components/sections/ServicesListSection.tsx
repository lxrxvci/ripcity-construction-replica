/**
 * Services cross-sell list on the projects page.
 *
 * Why it exists: routes portfolio browsers to service pages.
 * How it works: copy from projects-page.json servicesList block; items
 * map services-list.json stamping services-list.N.icon/.title/
 * .description.
 * How to change it: edit services-list.json and projects-page.json
 * (portal collections).
 */
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import servicesList from "@/content/services-list.json";
import projectsPage from "@/content/projects-page.json";

interface ServicesListSectionProps {
  className?: string;
}

export function ServicesListSection({ className }: ServicesListSectionProps) {
  const copy = projectsPage.servicesList;
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p
            className="text-sm font-bold uppercase tracking-wider text-accent"
            data-cms="projects-page.servicesList.eyebrow"
          >
            {copy.eyebrow}
          </p>
          <h2
            className="mt-4 font-heading text-3xl font-bold md:text-4xl"
            data-cms="projects-page.servicesList.heading"
          >
            {copy.heading}
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80"
            data-cms="projects-page.servicesList.support"
          >
            {copy.support}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, i) => (
            <article
              key={service.title}
              className="flex flex-col items-center bg-card p-6 text-center"
            >
              <div className="relative h-24 w-24">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  data-cms={`services-list.${i}.icon`}
                />
              </div>
              <h3
                className="mt-6 font-heading text-lg font-semibold text-foreground"
                data-cms={`services-list.${i}.title`}
              >
                {service.title}
              </h3>
              <p
                className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80"
                data-cms={`services-list.${i}.description`}
              >
                {service.description}
              </p>
              <div className="mt-6">
                <Button variant="outline" href={service.href} size="md">
                  <span data-cms="projects-page.servicesList.learnMoreLabel">
                    {copy.learnMoreLabel}
                  </span>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
