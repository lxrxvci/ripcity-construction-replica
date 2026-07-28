import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    src: "/images/76th_Cover_c8ba1131.png",
    alt: "SE Portland Kitchen Remodel",
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    href: "/se-portland-kitchen-home-renovation",
  },
  {
    src: "/images/SW_78th_A1_74dff086.png",
    alt: "Portland Oregon ADU Build",
    title: "ADU Build",
    location: "SW 78th, Portland",
    href: "/sw-78th-detached-adu-portland",
  },
  {
    src: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
    alt: "SE Portland Addition and whole home remodel",
    title: "Home Addition",
    location: "Hawthorne, Portland",
    href: "/southeast-hawthorne-addition",
  },
  {
    src: "/images/Clay_Basment_1_02f3c0cf.png",
    alt: "Clay basement remodel in Southeast Portland featuring a new bedroom, bathroom, laundry room, and family room",
    title: "Basement Remodel",
    location: "SE Clay St, Portland",
    href: "/clay-basement-remodel-portland",
  },
  {
    src: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
    alt: "Luxury primary bathroom remodel in Northeast Portland featuring a custom double vanity, walk-in shower, custom tile flooring, and modern brass fixtures.",
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
  },
];

export function NewBuildRecentProjectsSection() {
  return (
    <section className="bg-background px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Recent Projects
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/80">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement
            finishing projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group block overflow-hidden bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
                  {project.title}
                </p>
                <p className="text-sm text-foreground/70">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/portland-remodeling-projects" size="lg">
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
