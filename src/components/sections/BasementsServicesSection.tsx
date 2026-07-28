import Image from "next/image";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: "/images/Kitchen_Graphic_99ebdb00.png",
    title: "Kitchen Remodeling",
    description:
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
    href: "/kitchen-remodeling-portland",
  },
  {
    icon: "/images/ChatGPT_Image_May_5__2026__03_30_40_PM_e5fc8657.png",
    title: "Bathroom Remodeling",
    description:
      "Bathroom remodeling in Portland with custom tile, showers, vanities, and layout upgrades designed for durability and everyday use.",
    href: "/bathrooms-tile",
  },
  {
    icon: "/images/ADU_Graphic_724dacc9.png",
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    href: "/adu-home-additions-portland",
  },
  {
    icon: "/images/Addition_Graphic_9cab53de.png",
    title: "Home Additions",
    description:
      "Home additions in Portland designed to expand your living space with seamless design, structural integration, and quality construction.",
    href: "/new-build",
  },
  {
    icon: "/images/Basement_Graphic_ce30ad11.png",
    title: "Basement Finishing",
    description:
      "Basement remodeling in Portland, turning unfinished space into functional living areas with custom layouts and quality finishes.",
    href: "/basements",
  },
  {
    icon: "/images/Commercial_Graphic_389324fa.png",
    title: "Commercial Remodeling",
    description:
      "Commercial remodeling in Portland, including tenant improvements and build-outs designed for durability, efficiency, and long-term performance.",
    href: "/project-photoshop",
  },
];

export function BasementsServicesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Our Services
          </p>
          <h2 className="mb-3 font-heading text-2xl font-bold leading-tight text-foreground lg:text-3xl">
            Custom Home Remodeling in Portland, Oregon
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.href} className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-24 w-24">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 font-heading text-base font-bold text-foreground underline decoration-accent decoration-2 underline-offset-4">
                {service.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
              <Button href={service.href} variant="outline" size="sm">
                Learn More &rarr;
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
