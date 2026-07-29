import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ServicesListSectionProps {
  className?: string;
}

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "From layout redesigns and open-concept conversions to custom cabinetry, countertops, tile, and lighting, we build kitchens around the way your household actually cooks and gathers. Every project is managed in-house from design through final walkthrough.",
    icon: "/images/Kitchen_Graphic_99ebdb00.png",
    href: "/kitchen-remodeling-portland",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Walk-in showers, soaking tubs, vanities, and precision tilework — we remodel bathrooms of every size with waterproofing and ventilation done right the first time, so the finishes stay beautiful for years.",
    icon: "/images/ChatGPT_Image_May_5__2026__03_30_40_PM_e5fc8657.png",
    href: "/bathrooms-tile",
  },
  {
    title: "ADU Construction",
    description:
      "Detached backyard cottages, garage conversions, and basement ADUs built to Portland code. We handle feasibility, permitting, and construction for units designed to house family or generate rental income.",
    icon: "/images/ADU_Graphic_724dacc9.png",
    href: "/adu-home-additions-portland",
  },
  {
    title: "Home Additions",
    description:
      "Second stories, bump-outs, and full wings that tie into your existing structure cleanly — matching rooflines, siding, and interior finishes so the addition feels like it was always part of the house.",
    icon: "/images/Addition_Graphic_9cab53de.png",
    href: "/new-build",
  },
  {
    title: "Basement Finishing",
    description:
      "We turn damp, unfinished basements into warm, code-compliant living space: family rooms, guest suites, home offices, and theaters with proper moisture control, egress, and insulation.",
    icon: "/images/Basement_Graphic_ce30ad11.png",
    href: "/basements",
  },
  {
    title: "Commercial Remodeling",
    description:
      "Tenant improvements, office and retail build-outs, and light commercial renovations completed on a schedule that keeps your business running. We coordinate directly with owners and property managers.",
    icon: "/images/Commercial_Graphic_389324fa.png",
    href: "/project-photoshop",
  },
];

export function ServicesListSection({ className }: ServicesListSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">Our Services</p>
          <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl">
            What We Build for Portland Homeowners
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            Every service below is delivered by our own Portland-based crew with one point of
            contact, a clear schedule, and craftsmanship we stand behind. Select a service to see
            detailed scope, process, and completed projects.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col items-center bg-card p-6 text-center"
            >
              <div className="relative h-24 w-24">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
              <div className="mt-6">
                <Button variant="outline" href={service.href} size="md">
                  Learn more &rarr;
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
