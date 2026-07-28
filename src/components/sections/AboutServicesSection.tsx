import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
}

const services: Service[] = [
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
    href: "/services",
  },
];

interface AboutServicesSectionProps {
  className?: string;
}

export function AboutServicesSection({ className }: AboutServicesSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Our Services
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Custom Home Remodeling in Portland, Oregon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center">
              <div className="relative mb-5 h-40 w-40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-5 inline-flex items-center justify-center bg-accent px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
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
