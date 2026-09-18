/**
 * Homepage services grid.
 *
 * Why it exists: routes homepage visitors into the five service pages.
 * How it works: copy from sections.json services block (stamped
 * sections.services.*); cards map services.json stamping services.N.title/
 * .description/.image with learn-more links.
 * How to change it: edit services.json and sections.json (portal
 * collections). Card hrefs are code - they must match the service page
 * routes.
 */
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import services from "@/content/services.json";
import sections from "@/content/sections.json";

export function ServicesSection() {
  const copy = sections.services;
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p
            className="mb-4 text-sm font-bold uppercase tracking-wider text-accent"
            data-cms="sections.services.eyebrow"
          >
            {copy.eyebrow}
          </p>
          <h2
            className="mb-4 font-heading text-3xl font-bold lg:text-4xl"
            data-cms="sections.services.heading"
          >
            {copy.heading}
          </h2>
          <p
            className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80"
            data-cms="sections.services.support"
          >
            {copy.support}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="flex flex-col items-center bg-white p-6 text-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={112}
                height={112}
                className="mb-6 h-28 w-auto object-contain"
                data-cms={`services.${i}.image`}
              />
              <h3
                className="mb-3 font-heading text-xl font-semibold"
                data-cms={`services.${i}.title`}
              >
                {service.title}
              </h3>
              <p
                className="mb-6 text-sm leading-relaxed text-foreground/80"
                data-cms={`services.${i}.description`}
              >
                {service.description}
              </p>
              <Button href={service.href} variant="outline" size="sm">
                <span data-cms="sections.services.learnMoreLabel">{copy.learnMoreLabel}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
