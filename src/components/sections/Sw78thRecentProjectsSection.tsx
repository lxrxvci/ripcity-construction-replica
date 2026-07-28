import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface Sw78thRecentProjectsSectionProps {
  className?: string;
}

const projects = [
  {
    href: "/sw-78th-detached-adu-portland",
    image: "/images/SW_78th_A1_3f97d354.png",
    alt: "Portland Oregon ADU Build",
    title: "ADU Build",
    location: "SW 78th, Portland",
  },
  {
    href: "/se-portland-kitchen-home-renovation",
    image: "/images/76th_Cover_751b48d5.png",
    alt: "SE Portland Kitchen Remodel",
    title: "SE Portland Kitchen Remodel",
    location: "SE Portland",
  },
  {
    href: "/southeast-hawthorne-addition",
    image: "/images/Hawthorne_Addition_Back_15d3d10c.png",
    alt: "SE Portland Addition and whole home remodel",
    title: "SE Portland Addition and Whole Home Remodel",
    location: "Hawthorne, Portland",
  },
  {
    href: "/clay-basement-remodel-portland",
    image: "/images/Clay_Basment_1_7fb6d67c.png",
    alt: "Clay basement remodel in Southeast Portland featuring a new bedroom, bathroom, laundry room, and family room",
    title: "Clay Basement Remodel",
    location: "SE Portland",
  },
  {
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
    image: "/images/NE_36th_Bathroom_1_acd812c5.png",
    alt: "Luxury primary bathroom remodel in Northeast Portland featuring a custom double vanity, walk-in shower, custom tile flooring, and modern brass fixtures.",
    title: "NE 36th Primary Suite Bathroom Remodel",
    location: "NE Portland",
  },
];

export function Sw78thRecentProjectsSection({ className }: Sw78thRecentProjectsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent md:text-3xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/70">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group block overflow-hidden bg-background transition-all hover:opacity-90"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-heading text-sm font-semibold">{project.title}</h3>
                <p className="text-xs text-foreground/60">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/portland-remodeling-projects" size="md">
            View Projects &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
