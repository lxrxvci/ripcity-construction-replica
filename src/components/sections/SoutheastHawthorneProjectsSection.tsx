import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    href: "/se-portland-kitchen-home-renovation",
    image: "/images/76th_Cover_c8ba1131.png",
    alt: "SE Portland Kitchen Remodel",
  },
  {
    title: "ADU Build",
    location: "SW 78th, Portland",
    href: "/sw-78th-detached-adu-portland",
    image: "/images/SW_78th_A1_74dff086.png",
    alt: "Portland Oregon ADU Build",
  },
  {
    title: "Home Addition",
    location: "SE 76th, Portland",
    href: "/southeast-hawthorne-addition",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
    alt: "SE Portland Addition and whole home remodel",
  },
  {
    title: "Basement Remodel",
    location: "SE Clay st, Portland",
    href: "/clay-basement-remodel-portland",
    image: "/images/Clay_Basment_1_02f3c0cf.png",
    alt: "Clay basement remodel in Southeast Portland featuring a new bedroom, bathroom, laundry room, and family room",
  },
  {
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
    alt: "Luxury primary bathroom remodel in Northeast Portland featuring a custom double vanity, walk-in shower, custom tile flooring, and modern brass fixtures",
  },
];

export function SoutheastHawthorneProjectsSection() {
  return (
    <section className="bg-[#ffe8e8] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-accent decoration-2 underline-offset-4 lg:text-3xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 lg:text-base">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/70">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/portland-remodeling-projects" size="lg">
            View Projects <span aria-hidden="true">&gt;</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
