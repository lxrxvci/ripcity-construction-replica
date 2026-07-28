import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "SE 76th Kitchen & Home Renovation",
    location: "SE Portland, Oregon",
    image: "/images/76th_Cover_751b48d5.png",
    imageAlt: "SE Portland kitchen and home renovation",
    href: "/se-portland-kitchen-home-renovation",
    paragraphs: [
      "This Southeast Portland home renovation included a full remodel of the kitchen, living room, mud room, and laundry room with a focus on custom craftsmanship, functionality, and high-end finishes. The layout was redesigned with modified window openings to improve natural light and create a more open, connected living space.",
      "The project featured custom white oak cabinetry, quartz countertops, handmade ceramic backsplash tile, large-format travertine kitchen flooring, and custom cement tile in the mud room. Every detail was carefully selected to blend warmth, durability, and modern design while maintaining a timeless feel throughout the home.",
    ],
  },
  {
    title: "SE Hawthorne Whole Home Addition",
    location: "SE Portland, Oregon",
    image: "/images/Hawthorne_Addition_Front_Finish_c61f0233.png",
    imageAlt: "SE Portland home addition and whole home remodel",
    href: "/southeast-hawthorne-addition",
    paragraphs: [
      "This Southeast Portland whole home renovation and addition transformed a small 900 square foot house into a fully remodeled custom home with over 1,600 square feet of additional living space and a new oversized garage with living quarters above.",
      "The project included a complete interior remodel, new primary suite, office, living space, custom tile bathrooms, new siding, roofing, windows, plumbing, electrical, and a fully updated exterior envelope. Designed and built to feel like a brand new custom home, the renovation blended modern functionality, high-end finishes, and long-term durability throughout.",
    ],
  },
  {
    title: "SW 78th Detached ADU Construction",
    location: "SW Portland, Oregon",
    image: "/images/SW_78th_A1_4806054f.png",
    imageAlt: "Custom detached ADU built as a private grandmother suite",
    href: "/sw-78th-detached-adu-portland",
    paragraphs: [
      "This detached ADU (Accessory Dwelling Unit) was designed and built as a private grandmother suite in Southwest Portland. The project involved complete ground-up construction, including site preparation, foundation work, utility connections, framing, roofing, siding, windows, insulation, electrical, plumbing, HVAC, and interior finishes.",
      "The completed ADU functions as a fully independent living space featuring a private bedroom, full bathroom, custom kitchen, dedicated study area, and comfortable living room. We installed all new water, sewer, electrical, and mechanical systems to serve the new structure while carefully integrating the project into the existing property.",
    ],
  },
  {
    title: "NE 36th Primary Suite & Bathroom Remodel",
    location: "NE Portland, Oregon",
    image: "/images/NE_36th_Bathroom_1_acd812c5.png",
    imageAlt: "Luxury primary bathroom remodel in Northeast Portland",
    href: "/projects/ne-36th-primary-suite-bathroom-remodel",
    paragraphs: [
      "This Northeast Portland primary suite remodel completely transformed an outdated upper-level space into a luxury retreat designed for comfort, functionality, and everyday living. The project included a full bathroom remodel featuring a custom walk-in shower with frameless glass enclosure, recessed shower niche, premium tile installation, double vanity, quartz countertops, and designer plumbing fixtures.",
      "In addition to the bathroom renovation, we framed and constructed a new walk-in closet and dedicated laundry room to improve storage and convenience. The scope included extensive framing modifications, plumbing relocation, electrical upgrades, finish carpentry, custom railings, and detailed trim work throughout.",
    ],
  },
  {
    title: "SE Clay St. Basement Remodel",
    location: "SE Portland, Oregon",
    image: "/images/Clay_Basment_1_7fb6d67c.png",
    imageAlt: "Clay basement remodel in Southeast Portland",
    href: "/clay-basement-remodel-portland",
    paragraphs: [
      "This Southeast Portland basement remodel transformed an unfinished lower level into a fully finished and highly functional living space designed for everyday comfort and flexibility.",
      "The project included a new family room, private bedroom, full bathroom, dedicated laundry area, and a rebuilt staircase. To create a code-compliant bedroom, we installed a new egress window and completed extensive infrastructure upgrades including trenching for new plumbing lines and relocating the home's furnace system.",
    ],
  },
  {
    title: "Nixon Basement ADU Conversion",
    location: "Milwaukie, Oregon",
    image: "/images/Nixon_Front_db052cca.png",
    imageAlt: "Nixon basement ADU conversion in Milwaukie, Oregon",
    href: "/nixon-adu",
    paragraphs: [
      "This basement ADU conversion in Milwaukie, Oregon transformed an underutilized lower level into a fully independent living space. The project included three bedrooms, two full bathrooms, a complete kitchen, dedicated living areas, upgraded mechanical systems, and extensive custom finish work.",
      "A defining feature is the custom architectural woodwork integrated throughout the stairway, hallways, and living spaces. Designed for multigenerational living, extended family, guests, or rental opportunities, this conversion added both versatility and long-term property value.",
    ],
  },
];

interface ProjectsGridSectionProps {
  className?: string;
}

export function ProjectsGridSection({ className }: ProjectsGridSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Featured Projects
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight lg:text-4xl">
            Remodeling Projects Throughout Portland
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            A collection of kitchen remodels, bathroom renovations, ADUs, home additions, and
            basement finishing projects completed by Rip City Construction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col space-y-4 p-6 lg:p-8">
                <div className="flex items-start gap-3">
                  <h3 className="font-heading text-lg font-bold leading-tight lg:text-xl">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <MapPinIcon className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span>{project.location}</span>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
                  {project.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={project.href}
                    className="inline-block text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
                  >
                    View Project Gallery &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
