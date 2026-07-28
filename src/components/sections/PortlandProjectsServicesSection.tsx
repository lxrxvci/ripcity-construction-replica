import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
    image: "/images/Kitchen_Graphic_99ebdb00.png",
    href: "/kitchen-remodeling-portland",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Bathroom remodeling in Portland with custom tile, showers, vanities, and layout upgrades designed for durability and everyday use.",
    image: "/images/ChatGPT_Image_May_5__2026__03_30_40_PM_e5fc8657.png",
    href: "/bathrooms-tile",
  },
  {
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    image: "/images/ADU_Graphic_724dacc9.png",
    href: "/adu-home-additions-portland",
  },
  {
    title: "Home Additions",
    description:
      "Home additions in Portland designed to expand your living space with seamless design, structural integration, and quality construction.",
    image: "/images/Addition_Graphic_9cab53de.png",
    href: "/new-build",
  },
  {
    title: "Basement Finishing",
    description:
      "Basement remodeling in Portland, turning unfinished space into functional living areas with custom layouts and quality finishes.",
    image: "/images/Basement_Graphic_ce30ad11.png",
    href: "/basements",
  },
  {
    title: "Commercial Remodeling",
    description:
      "Commercial remodeling in Portland, including tenant improvements and build-outs designed for durability, efficiency, and long-term performance.",
    image: "/images/Commercial_Graphic_389324fa.png",
    href: "/project-photoshop",
  },
];

interface PortlandProjectsServicesSectionProps {
  className?: string;
}

export function PortlandProjectsServicesSection({ className }: PortlandProjectsServicesSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
            Our Services
          </h2>
          <h3 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
            Custom Home Remodeling in Portland, Oregon
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col items-center overflow-hidden bg-white p-6 text-center shadow-sm lg:p-8"
            >
              <div className="relative mb-4 aspect-square w-24">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <h4 className="mb-3 font-heading text-base font-bold underline decoration-2 underline-offset-4 lg:text-lg">
                {service.title}
              </h4>
              <p className="mb-6 flex-grow text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
              <Button variant="outline" href={service.href} className="w-full">
                Learn More &rarr;
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
