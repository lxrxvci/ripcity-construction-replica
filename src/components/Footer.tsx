import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import site from "@/content/site.json";
import footer from "@/content/footer.json";
import sections from "@/content/sections.json";

interface CtaFooterProps {
  className?: string;
}

export function CtaFooter({ className }: CtaFooterProps) {
  const copy = footer.cta;
  return (
    <section className={cn("bg-foreground py-16 text-background lg:py-24", className)}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="space-y-6">
          <h2
            className="font-heading text-2xl font-bold underline decoration-2 underline-offset-4 lg:text-3xl"
            data-cms="footer.cta.heading"
          >
            {copy.heading}
          </h2>
          <p
            className="max-w-md text-sm leading-relaxed text-background/80"
            data-cms="footer.cta.body"
          >
            {copy.body}
          </p>
          <Button variant="secondary" href={copy.ctaHref} size="lg">
            <span data-cms="footer.cta.ctaLabel">{copy.ctaLabel}</span>
          </Button>
        </div>

        <div className="flex items-center justify-between gap-8 lg:justify-end">
          {copy.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-5xl font-bold lg:text-6xl">
                <span data-cms={`footer.cta.stats.${i}.value`}>{stat.value}</span>
                {stat.sub ? (
                  <>
                    <br />
                    <span
                      className="text-2xl font-normal"
                      data-cms={`footer.cta.stats.${i}.sub`}
                    >
                      {stat.sub}
                    </span>
                  </>
                ) : null}
              </div>
              <p
                className="mt-2 text-xs uppercase tracking-wider text-background/70"
                data-cms={`footer.cta.stats.${i}.label`}
              >
                {stat.label}
              </p>
            </div>
          ))}
          <div className="relative hidden h-32 w-32 sm:block lg:h-40 lg:w-40">
            <Image
              src={copy.shieldImage}
              alt={copy.shieldAlt}
              fill
              className="object-contain"
              data-cms="footer.cta.shieldImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface AboutFooterProps {
  className?: string;
  hideCtaButton?: boolean;
}

export function AboutFooter({ className, hideCtaButton }: AboutFooterProps) {
  const copy = sections.about;
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p
              className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4"
              data-cms="sections.about.eyebrow"
            >
              {copy.eyebrow}
            </p>
            <h2
              className="font-heading text-3xl font-bold leading-tight lg:text-4xl"
              data-cms="sections.about.heading"
            >
              {copy.heading}
            </h2>
            {copy.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-foreground/80"
                data-cms={`sections.about.paragraphs.${i}`}
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={copy.linkHref}
              className="inline-block text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
              data-cms="sections.about.linkLabel"
            >
              {copy.linkLabel}
            </Link>
          </div>

          <div className="space-y-6 lg:pl-12">
            <h3
              className="font-heading text-2xl font-bold text-accent underline decoration-2 underline-offset-4"
              data-cms="sections.about.whyHeading"
            >
              {copy.whyHeading}
            </h3>
            <ul className="space-y-3">
              {copy.bullets.map((item, i) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="text-accent">&#10003;</span>
                  <span data-cms={`sections.about.bullets.${i}`}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={copy.image}
                alt={copy.imageAlt}
                fill
                className="object-cover"
                data-cms="sections.about.image"
              />
            </div>
          </div>
        </div>

        {!hideCtaButton && (
          <div className="mt-16 flex justify-center">
            <Button href={copy.ctaHref} size="lg">
              <span data-cms="sections.about.ctaLabel">{copy.ctaLabel}</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground py-8 text-center text-xs text-background/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <address className="not-italic">
          <p className="font-semibold text-background/90" data-cms="site.legalName">
            {site.legalName}
          </p>
          <p className="mt-1">
            <span data-cms="site.streetAddress">{site.streetAddress}</span>,{" "}
            <span data-cms="site.addressLocality">{site.addressLocality}</span>,{" "}
            <span data-cms="site.addressRegion">{site.addressRegion}</span>{" "}
            <span data-cms="site.postalCode">{site.postalCode}</span>
          </p>
          <p className="mt-1">
            <a
              href={`tel:${site.telephone}`}
              className="underline-offset-2 hover:underline"
              data-cms="site.telephoneDisplay"
            >
              {site.telephoneDisplay}
            </a>
            <span className="mx-2">|</span>
            <a
              href={`mailto:${site.email}`}
              className="underline-offset-2 hover:underline"
              data-cms="site.email"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-1" data-cms="site.hoursDisplay">
            {site.hoursDisplay}
          </p>
        </address>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} <span data-cms="site.name">{site.name}</span>.{" "}
          <span data-cms="footer.rightsReserved">{footer.rightsReserved}</span>
        </p>
      </div>
    </footer>
  );
}
