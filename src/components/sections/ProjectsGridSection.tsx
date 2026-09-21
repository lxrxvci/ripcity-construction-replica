/**
 * Projects index grid: the portfolio cards.
 *
 * Why it exists: the core of /portland-remodeling-projects.
 * How it works: section copy from projects-page.json grid block; cards
 * map projects-gallery.json stamping projects-gallery.N.title/.location/
 * .paragraphs.N/.image, linking to each project page.
 * How to change it: edit projects-gallery.json (portal Projects Gallery
 * collection); grid copy in projects-page.json.
 */
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import projectsGallery from "@/content/projects-gallery.json";
import projectsPage from "@/content/projects-page.json";

interface ProjectsGridSectionProps {
  className?: string;
}

export function ProjectsGridSection({ className }: ProjectsGridSectionProps) {
  const copy = projectsPage.grid;
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4"
            data-cms="projects-page.grid.eyebrow"
          >
            {copy.eyebrow}
          </p>
          <h2
            className="font-heading text-3xl font-bold leading-tight lg:text-4xl"
            data-cms="projects-page.grid.heading"
          >
            {copy.heading}
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed text-foreground/80"
            data-cms="projects-page.grid.support"
          >
            {copy.support}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsGallery.map((project, i) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  data-cms={`projects-gallery.${i}.image`}
                />
              </div>
              <div className="flex flex-col space-y-4 p-6 lg:p-8">
                <div className="flex items-start gap-3">
                  <h3
                    className="font-heading text-lg font-bold leading-tight lg:text-xl"
                    data-cms={`projects-gallery.${i}.title`}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <MapPinIcon className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span data-cms={`projects-gallery.${i}.location`}>{project.location}</span>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
                  {project.paragraphs.map((paragraph, j) => (
                    <p key={j} data-cms={`projects-gallery.${i}.paragraphs.${j}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={project.href}
                    className="inline-block text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
                    data-cms="projects-page.grid.galleryLinkLabel"
                  >
                    {copy.galleryLinkLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
