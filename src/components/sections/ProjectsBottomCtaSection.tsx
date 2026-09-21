/**
 * Bottom CTA band on the projects page.
 *
 * Why it exists: closing conversion ask after the portfolio.
 * How it works: renders projects-page.json bottomCta block, stamped
 * projects-page.bottomCta.heading/.body/.ctaLabel/.image.
 * How to change it: edit projects-page.json.
 */
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import projectsPage from "@/content/projects-page.json";

interface ProjectsBottomCtaSectionProps {
  className?: string;
}

export function ProjectsBottomCtaSection({ className }: ProjectsBottomCtaSectionProps) {
  const copy = projectsPage.bottomCta;
  return (
    <section className={cn("relative min-h-[320px] overflow-hidden", className)}>
      <Image
        src={copy.image}
        alt={copy.imageAlt}
        fill
        className="object-cover"
        data-cms="projects-page.bottomCta.image"
      />
      <div className="pointer-events-none absolute inset-0 bg-foreground/60" />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[320px] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center text-background lg:px-10">
        <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
          <span className="pointer-events-auto" data-cms="projects-page.bottomCta.heading">
            {copy.heading}
          </span>
        </h2>
        <p
          className="pointer-events-auto mb-8 max-w-xl text-sm leading-relaxed text-background/90"
          data-cms="projects-page.bottomCta.body"
        >
          {copy.body}
        </p>
        <Button href={copy.ctaHref} size="lg" className="pointer-events-auto">
          <span data-cms="projects-page.bottomCta.ctaLabel">{copy.ctaLabel}</span>
        </Button>
      </div>
    </section>
  );
}
