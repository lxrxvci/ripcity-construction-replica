import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactServicesSectionProps {
  className?: string;
}

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
    href: "/kitchen-remodeling-portland",
    image: "/images/Kitchen_Graphic_99ebdb00.png",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Bathroom remodeling in Portland with custom tile, showers, vanities, and layout upgrades designed for durability and everyday use.",
    href: "/bathrooms-tile",
    image: "/images/ChatGPT_Image_May_5__2026__03_30_40_PM_e5fc8657.png",
  },
  {
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    href: "/adu-home-additions-portland",
    image: "/images/ADU_Graphic_724dacc9.png",
  },
  {
    title: "Home Additions",
    description:
      "Home additions in Portland designed to expand your living space with seamless design, structural integration, and quality construction.",
    href: "/new-build",
    image: "/images/Addition_Graphic_9cab53de.png",
  },
  {
    title: "Basement Finishing",
    description:
      "Basement remodeling in Portland, turning unfinished space into functional living areas with custom layouts and quality finishes.",
    href: "/basements",
    image: "/images/Basement_Graphic_ce30ad11.png",
  },
  {
    title: "Commercial Remodeling",
    description:
      "Commercial remodeling in Portland, including tenant improvements and build-outs designed for durability, efficiency, and long-term performance.",
    href: "/project-photoshop",
    image: "/images/Commercial_Graphic_389324fa.png",
  },
];

export function ContactServicesSection({ className }: ContactServicesSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
            Our Services
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold lg:text-3xl">
            Custom Home Remodeling in Portland, Oregon
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-foreground/70">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.href}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-accent underline decoration-2 underline-offset-4">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-block border border-foreground px-6 py-2 font-heading text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
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
