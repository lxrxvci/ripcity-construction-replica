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
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
    icon: "/images/Kitchen_Graphic_99ebdb00.png",
    href: "/kitchen-remodeling-portland",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Bathroom remodeling in Portland with custom tile, showers, vanities, and layout upgrades designed for durability and everyday use.",
    icon: "/images/ChatGPT_Image_May_5__2026__03_30_40_PM_e5fc8657.png",
    href: "/bathrooms-tile",
  },
  {
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    icon: "/images/ADU_Graphic_724dacc9.png",
    href: "/adu-home-additions-portland",
  },
  {
    title: "Home Additions",
    description:
      "Home additions in Portland designed to expand your living space with seamless design, structural integration, and quality construction.",
    icon: "/images/Addition_Graphic_9cab53de.png",
    href: "/new-build",
  },
  {
    title: "Basement Finishing",
    description:
      "Basement remodeling in Portland, turning unfinished space into functional living areas with custom layouts and quality finishes.",
    icon: "/images/Basement_Graphic_ce30ad11.png",
    href: "/basements",
  },
  {
    title: "Commercial Remodeling",
    description:
      "Commercial remodeling in Portland, including tenant improvements and build-outs designed for durability, efficiency, and long-term performance.",
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
            Custom Home Remodeling in Portland, Oregon
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
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
