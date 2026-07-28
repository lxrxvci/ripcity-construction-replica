import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Home, Bath, ChefHat, Warehouse, PlusSquare, Paintbrush } from "lucide-react";

interface Sw78thServicesSectionProps {
  className?: string;
}

const services = [
  {
    icon: Home,
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    href: "/adu-home-additions-portland",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    description:
      "Custom bathroom remodels, including tile showers, vanities, fixtures, and accessibility updates.",
    href: "/bathrooms-tile",
  },
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    description:
      "Full kitchen renovations, including cabinetry, countertops, flooring, lighting, and layout reconfiguration.",
    href: "/kitchen-remodeling-portland",
  },
  {
    icon: Warehouse,
    title: "Basement Finishing",
    description:
      "Basement finishing and remodeling to create bedrooms, family rooms, bathrooms, and rental spaces.",
    href: "/basements",
  },
  {
    icon: PlusSquare,
    title: "Home Additions",
    description:
      "Room additions and whole-home renovations that expand your living space and improve functionality.",
    href: "/adu-home-additions-portland",
  },
  {
    icon: Paintbrush,
    title: "Custom Home Remodeling",
    description:
      "Whole-home remodeling and custom renovations tailored to your lifestyle and long-term goals.",
    href: "/services",
  },
];

export function Sw78thServicesSection({ className }: Sw78thServicesSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent md:text-3xl">
              Our Services
            </h2>
            <p className="mt-4 text-sm font-bold md:text-base">
              Custom Home Remodeling in Portland, Oregon
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              From kitchens and bathrooms to full home additions and ADUs, we provide professional
              remodeling services in Portland designed to improve your space and add long-term value.
            </p>
            <div className="relative mx-auto mt-8 aspect-square w-full max-w-sm lg:mx-0">
              <Image
                src="/images/ADU_Graphic_724dacc9.png"
                alt="ADU construction services in Portland, Oregon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <div className="mb-4 text-accent">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" href={service.href} size="sm">
                      Learn More &rarr;
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
