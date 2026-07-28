import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  location: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    image: "/images/76th_Cover_c8ba1131.png",
    alt: "SE Portland Kitchen Remodel",
  },
  {
    title: "ADU Build",
    location: "SW 78th, Portland",
    image: "/images/SW_78th_A1_74dff086.png",
    alt: "Portland Oregon ADU Build",
  },
  {
    title: "Home Addition",
    location: "",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
    alt: "SE Portland Addition and whole home remodel",
  },
  {
    title: "Basement Remodel",
    location: "SE Clay st, Portland",
    image: "/images/Clay_Basment_1_02f3c0cf.png",
    alt: "Clay basement remodel in Southeast Portland featuring modern finishes",
  },
  {
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
    alt: "Luxury primary bathroom remodel in Northeast Portland",
  },
];

interface AboutProjectsSectionProps {
  className?: string;
}

export function AboutProjectsSection({ className }: AboutProjectsSectionProps) {
  return (
    <section className={cn("bg-accent py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white underline decoration-2 underline-offset-4">
            Recent Projects
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <div key={project.title} className="group bg-background p-3 text-center">
              <div className="relative mb-4 aspect-square w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {project.title}
              </h3>
              {project.location && (
                <p className="text-xs text-foreground/70">{project.location}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portland-remodeling-projects"
            className="inline-flex items-center justify-center bg-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider text-background transition-colors hover:bg-foreground/90"
          >
            View Projects &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
