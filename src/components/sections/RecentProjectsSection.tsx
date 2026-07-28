import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    image: "/images/76th_Cover_c8ba1131.png",
    href: "/se-portland-kitchen-home-renovation",
  },
  {
    title: "ADU Build",
    location: "SW 78th, Portland",
    image: "/images/SW_78th_A1_74dff086.png",
    href: "/sw-78th-detached-adu-portland",
  },
  {
    title: "Home Addition",
    location: "SE Portland",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_de08f472.png",
    href: "/southeast-hawthorne-addition",
  },
  {
    title: "Basement Remodel",
    location: "SE Clay st, Portland",
    image: "/images/Clay_Basment_1_02f3c0cf.png",
    href: "/clay-basement-remodel-portland",
  },
  {
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_f3761e34.png",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
  },
];

export function RecentProjectsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            Recent Projects
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/80">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block overflow-hidden bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="py-4 text-center">
                <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-foreground/70">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/portland-remodeling-projects" size="lg">
            View Projects &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}
