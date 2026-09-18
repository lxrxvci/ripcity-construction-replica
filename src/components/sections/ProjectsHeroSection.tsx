/**
 * Projects index hero (/portland-remodeling-projects).
 *
 * Why it exists: introduces the portfolio with a full-bleed image.
 * How it works: renders projects-page.json hero block, stamped
 * projects-page.hero.heading/.support/.ctaLabel/.image.
 * How to change it: edit projects-page.json (portal Projects Page
 * collection).
 */
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import projectsPage from "@/content/projects-page.json";

interface ProjectsHeroSectionProps {
  className?: string;
}

export function ProjectsHeroSection({ className }: ProjectsHeroSectionProps) {
  const copy = projectsPage.hero;
  return (
    <section className={cn("relative min-h-[70vh] overflow-hidden bg-foreground", className)}>
      <Image
        src={copy.image}
        alt={copy.imageAlt}
        fill
        priority
        className="object-cover opacity-70"
        data-cms="projects-page.hero.image"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl space-y-8 pt-24 text-background">
          <h1 className="font-heading text-4xl font-medium leading-tight text-accent md:text-5xl lg:text-6xl">
            <span className="pointer-events-auto" data-cms="projects-page.hero.heading">
              {copy.heading}
            </span>
          </h1>
          <p
            className="pointer-events-auto max-w-lg text-sm leading-relaxed md:text-base"
            data-cms="projects-page.hero.support"
          >
            {copy.support}
          </p>
          <Button href={copy.ctaHref} size="lg" className="pointer-events-auto">
            <span data-cms="projects-page.hero.ctaLabel">{copy.ctaLabel}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
