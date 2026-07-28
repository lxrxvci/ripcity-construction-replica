import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectPhotoshopServicesSectionProps {
  className?: string;
}

const services = [
  {
    src: "/images/Kitchen_Graphic_99ebdb00.png",
    alt: "Kitchen remodeling icon",
    title: "Kitchen Remodeling",
    description:
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
    href: "/services/kitchen-remodeling",
  },
  {
    src: "/images/ChatGPT_Image_May_5__2026__03_30_40_PM_e5fc8657.png",
    alt: "Bathroom remodeling icon",
    title: "Bathroom Remodeling",
    description:
      "Bathroom remodeling in Portland with custom tile, showers, vanities, and layout upgrades designed for durability and everyday use.",
    href: "/services/bathroom-remodeling",
  },
  {
    src: "/images/ADU_Graphic_724dacc9.png",
    alt: "ADU construction icon",
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    href: "/services/adu-construction",
  },
  {
    src: "/images/Addition_Graphic_9cab53de.png",
    alt: "Home additions icon",
    title: "Home Additions",
    description:
      "Home additions in Portland designed to expand your living space with seamless design, structural integration, and quality construction.",
    href: "/services/home-additions",
  },
  {
    src: "/images/Basement_Graphic_ce30ad11.png",
    alt: "Basement finishing icon",
    title: "Basement Finishing",
    description:
      "Basement remodeling in Portland, turning unfinished space into functional living areas with custom layouts and quality finishes.",
    href: "/services/basement-finishing",
  },
  {
    src: "/images/Commercial_Graphic_389324fa.png",
    alt: "Commercial remodeling icon",
    title: "Commercial Remodeling",
    description:
      "Commercial remodeling in Portland, including tenant improvements and build-outs designed for durability, efficiency, and long-term performance.",
    href: "/services/commercial-remodeling",
  },
];

export function ProjectPhotoshopServicesSection({ className }: ProjectPhotoshopServicesSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Our Services
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Custom Home Remodeling in Portland, Oregon
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center">
              <div className="relative h-28 w-28">
                <Image
                  src={service.src}
                  alt={service.alt}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-block text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
