import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const recentProjects = [
  {
    category: "Kitchen Remodel",
    location: "SE 76th, Portland",
    image: "/images/76th_Cover_c8ba1131.png",
    imageAlt: "SE Portland kitchen remodel",
    href: "/se-portland-kitchen-home-renovation",
  },
  {
    category: "ADU Build",
    location: "SW 78th, Portland",
    image: "/images/SW_78th_A1_74dff086.png",
    imageAlt: "Portland Oregon ADU build",
    href: "/sw-78th-detached-adu-portland",
  },
  {
    category: "Home Addition",
    location: "SE 76th, Portland",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
    imageAlt: "SE Portland home addition and whole home remodel",
    href: "/southeast-hawthorne-addition",
  },
  {
    category: "Basement Remodel",
    location: "SE Clay st, Portland",
    image: "/images/Clay_Basment_1_02f3c0cf.png",
    imageAlt: "Clay basement remodel in Southeast Portland",
    href: "/clay-basement-remodel-portland",
  },
  {
    category: "Bathroom Remodel",
    location: "NE 36th, Portland",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
    imageAlt: "Luxury primary bathroom remodel in Northeast Portland",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
  },
];

interface PortlandProjectsRecentSectionProps {
  className?: string;
}

export function PortlandProjectsRecentSection({ className }: PortlandProjectsRecentSectionProps) {
  return (
    <section className={cn("bg-[#fde8e8] py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
            Recent Projects
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {recentProjects.map((project) => (
            <Link
              key={project.category}
              href={project.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="mb-1 font-heading text-sm font-bold underline decoration-2 underline-offset-4 transition-colors group-hover:text-accent">
                {project.category}
              </h3>
              <p className="text-sm text-foreground/70">{project.location}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portland-remodeling-projects"
            className="inline-flex items-center justify-center bg-accent px-10 py-4 font-heading text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
          >
            View Projects <span className="ml-1">&rsaquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
