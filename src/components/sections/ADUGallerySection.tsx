import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "SW 78th Custom ADU Construction",
    location: "SW 78th, Portland",
    image: "/images/SW_78th_A1_78a45982.png",
    alt: "Custom detached ADU built by Rip City Construction featuring Hardie siding, energy-efficient windows, and professional landscaping in Portland, Oregon",
    href: "/sw-78th-detached-adu-portland",
  },
  {
    title: "Nixon Basement ADU Conversion",
    location: "Nixon, Portland",
    image: "/images/Nixon_Front_ebd3de68.png",
    alt: "Rear view of a modern house with dark wooden siding, a small wooden deck, a stone pathway, and landscaped garden after a Nixon basement ADU conversion by Rip City Construction",
    href: "/nixon-adu",
  },
];

interface ADUGallerySectionProps {
  className?: string;
}

export function ADUGallerySection({ className }: ADUGallerySectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Recent Projects</p>
          <h2 className="font-heading text-3xl font-bold lg:text-4xl">Recent Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
            A selection of ADU and home addition projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group block overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-base font-bold">{project.title}</h3>
                <p className="text-xs text-foreground/70">{project.location}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/portland-remodeling-projects" variant="outline">
            View Projects &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}
