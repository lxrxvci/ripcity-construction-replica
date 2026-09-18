import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import projects from "@/content/projects.json";
import sections from "@/content/sections.json";

export function RecentProjectsSection() {
  const copy = sections.recentProjects;
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p
            className="mb-4 text-sm font-bold uppercase tracking-wider text-accent"
            data-cms="sections.recentProjects.eyebrow"
          >
            {copy.eyebrow}
          </p>
          <p
            className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/80"
            data-cms="sections.recentProjects.support"
          >
            {copy.support}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block overflow-hidden bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-cms={`projects.${i}.image`}
                />
              </div>
              <div className="py-4 text-center">
                <h3 className="font-heading text-lg font-semibold" data-cms={`projects.${i}.title`}>
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70" data-cms={`projects.${i}.location`}>
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={copy.ctaHref} size="lg">
            <span data-cms="sections.recentProjects.ctaLabel">{copy.ctaLabel}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
