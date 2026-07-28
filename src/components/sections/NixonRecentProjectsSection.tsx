import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    image: "/images/76th_Cover_751b48d5.png",
    href: "/se-portland-kitchen-home-renovation",
  },
  {
    title: "ADU Build",
    location: "SW 78th, Portland",
    image: "/images/SW_78th_A1_4806054f.png",
    href: "/sw-78th-detached-adu-portland",
  },
  {
    title: "Home Addition",
    location: "SE 76th, Portland",
    image: "/images/Hawthorne_Addition_Front_Finish_c61f0233.png",
    href: "/southeast-hawthorne-addition",
  },
  {
    title: "Basement Remodel",
    location: "SE Clay st, Portland",
    image: "/images/Clay_Basment_1_7fb6d67c.png",
    href: "/clay-basement-remodel-portland",
  },
  {
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    image: "/images/NE_36th_Bathroom_1_acd812c5.png",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
  },
];

export function NixonRecentProjectsSection() {
  return (
    <section className="bg-accent/10 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70 lg:text-base">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <a key={project.title} href={project.href} className="group block text-center">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-sm font-bold underline decoration-2 underline-offset-4 group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-foreground/70">{project.location}</p>
            </a>
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
