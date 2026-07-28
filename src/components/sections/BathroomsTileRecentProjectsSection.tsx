import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Kitchen Remodel",
    location: "SE 76th, Portland",
    image: "/images/76th_Cover_751b48d5.png",
    alt: "SE Portland kitchen remodel featuring custom cabinetry and countertops.",
    href: "/portland-remodeling-projects",
  },
  {
    title: "ADU Build",
    location: "SW 78th, Portland",
    image: "/images/SW_78th_A1_4806054f.png",
    alt: "Portland Oregon ADU build with detached unit design.",
    href: "/portland-remodeling-projects",
  },
  {
    title: "Home Addition",
    location: "SE 76th, Portland",
    image: "/images/ChatGPT_Image_Apr_29__2026__01_05_28_PM_d54ba12d.png",
    alt: "SE Portland addition and whole home remodel.",
    href: "/portland-remodeling-projects",
  },
  {
    title: "Basement Remodel",
    location: "SE Clay st, Portland",
    image: "/images/Clay_Basment_1_7fb6d67c.png",
    alt: "Clay basement remodel in Southeast Portland with new bedroom, bathroom, laundry room, and family room.",
    href: "/portland-remodeling-projects",
  },
  {
    title: "Bathroom Remodel",
    location: "NE 36th, Portland",
    image: "/images/NE_36th_Bathroom_1_acd812c5.png",
    alt: "Luxury primary bathroom remodel in Northeast Portland with custom double vanity and walk-in shower.",
    href: "/portland-remodeling-projects",
  },
];

export function BathroomsTileRecentProjectsSection() {
  return (
    <section className="bg-red-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            A selection of kitchen remodels, bathrooms, ADUs, additions, and basement finishing
            projects completed throughout Portland, Oregon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group block overflow-hidden bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-sm font-bold text-accent underline decoration-1 underline-offset-4">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-foreground/80">{project.location}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/portland-remodeling-projects" size="lg">
            View Projects &gt;
          </Button>
        </div>
      </div>
    </section>
  );
}
