import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactProjectsSectionProps {
  className?: string;
}

const projects = [
  {
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    href: "/se-portland-kitchen-home-renovation",
    image: "/images/76th_Cover_c8ba1131.png",
  },
  {
    title: "ADU Build",
    location: "SW 78th, Portland",
    href: "/sw-78th-detached-adu-portland",
    image: "/images/SW_78th_A1_74dff086.png",
  },
  {
    title: "Home Addition",
    location: "Southeast Hawthorne, Portland",
    href: "/southeast-hawthorne-addition",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
  },
  {
    title: "Basement Remodel",
    location: "SE Clay St, Portland",
    href: "/clay-basement-remodel-portland",
    image: "/images/Clay_Basment_1_02f3c0cf.png",
  },
  {
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
  },
];

export function ContactProjectsSection({ className }: ContactProjectsSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group block overflow-hidden bg-foreground/5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-base font-bold text-foreground underline decoration-2 underline-offset-4 transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-foreground/70">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portland-remodeling-projects"
            className="inline-flex items-center justify-center bg-accent px-8 py-3 font-heading text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
          >
            View Projects &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
