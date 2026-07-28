import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    src: "/images/76th_Cover_c8ba1131.png",
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    href: "/se-portland-kitchen-home-renovation",
  },
  {
    src: "/images/SW_78th_A1_74dff086.png",
    title: "ADU Build",
    location: "SW 78th, Portland",
    href: "/sw-78th-detached-adu-portland",
  },
  {
    src: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
    title: "Home Addition",
    location: "",
    href: "/southeast-hawthorne-addition",
  },
  {
    src: "/images/Clay_Basment_1_02f3c0cf.png",
    title: "Basement Remodel",
    location: "SE Clay st, Portland",
    href: "/clay-basement-remodel-portland",
  },
  {
    src: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
  },
];

export function BasementsProjectsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Recent Projects
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/80">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-heading text-sm font-bold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                {project.location && (
                  <p className="mt-1 text-xs text-foreground/70">{project.location}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/portland-remodeling-projects" size="md">
            View Projects &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}
