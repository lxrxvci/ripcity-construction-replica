import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectPhotoshopRecentProjectsSectionProps {
  className?: string;
}

const projects = [
  {
    src: "/images/76th_Cover_c8ba1131.png",
    alt: "SE Portland Kitchen Remodel",
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
  },
  {
    src: "/images/SW_78th_A1_74dff086.png",
    alt: "Portland Oregon ADU Build",
    title: "ADU Build",
    location: "SW 78th, Portland",
  },
  {
    src: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
    alt: "SE Portland Addition and whole home remodel",
    title: "Home Addition",
    location: "",
  },
  {
    src: "/images/Clay_Basment_1_02f3c0cf.png",
    alt: "Clay basement remodel in Southeast Portland",
    title: "Basement Remodel",
    location: "SE Clay st, Portland",
  },
  {
    src: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
    alt: "Luxury primary bathroom remodel in Northeast Portland",
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
  },
];

export function ProjectPhotoshopRecentProjectsSection({ className }: ProjectPhotoshopRecentProjectsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Recent Projects
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <Link key={project.src} href="/portland-remodeling-projects" className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  {project.title}
                </h3>
                {project.location && (
                  <p className="mt-1 text-xs text-foreground/70">{project.location}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/portland-remodeling-projects" size="lg">
            View Projects &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}
