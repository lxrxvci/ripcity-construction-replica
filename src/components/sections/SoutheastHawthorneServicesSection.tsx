import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
    href: "/kitchen-remodeling-portland",
    icon: "/images/Kitchen_Graphic_99ebdb00.png",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Bathroom remodeling in Portland with custom tile, showers, vanities, and layout upgrades designed for durability and everyday use.",
    href: "/bathrooms-tile",
    icon: "/images/ChatGPT_Image_May_5__2026__03_30_40_PM_e5fc8657.png",
  },
  {
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    href: "/adu-home-additions-portland",
    icon: "/images/ADU_Graphic_724dacc9.png",
  },
  {
    title: "Home Additions",
    description:
      "Home additions in Portland designed to expand your living space with seamless design, structural integration, and quality construction.",
    href: "/new-build",
    icon: "/images/Addition_Graphic_9cab53de.png",
  },
  {
    title: "Basement Finishing",
    description:
      "Basement remodeling in Portland, turning unfinished space into functional living areas with custom layouts and quality finishes.",
    href: "/basements",
    icon: "/images/Basement_Graphic_ce30ad11.png",
  },
  {
    title: "Commercial Remodeling",
    description:
      "Commercial remodeling in Portland, including tenant improvements and build-outs designed for durability, efficiency, and long-term performance.",
    href: "/project-photoshop",
    icon: "/images/Commercial_Graphic_389324fa.png",
  },
];

export function SoutheastHawthorneServicesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-accent decoration-2 underline-offset-4 lg:text-3xl">
            Our Services
          </h2>
          <h3 className="mt-4 font-heading text-2xl font-bold text-foreground lg:text-4xl">
            Custom Home Remodeling in Portland, Oregon
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 lg:text-base">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center"
            >
              {service.icon && (
                <div className="relative mb-4 h-16 w-16">
                  <Image
                    src={service.icon}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              )}
              <h4 className="font-heading text-base font-bold text-foreground underline decoration-accent decoration-2 underline-offset-4">
                {service.title}
              </h4>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
              <Button
                variant="outline"
                href={service.href}
                size="sm"
                className="mt-6"
              >
                Learn More <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
