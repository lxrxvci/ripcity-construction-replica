import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
    href: "/adu-home-additions-portland",
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

export function ServicesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            Our Services
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
            Custom Home Remodeling in Portland, Oregon
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/80">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center bg-white p-6 text-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={112}
                height={112}
                className="mb-6 h-28 w-auto object-contain"
              />
              <h3 className="mb-3 font-heading text-xl font-semibold">{service.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground/80">
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
