import { Button } from "@/components/ui/Button";

function KitchenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="6" y="28" width="52" height="26" rx="1" />
      <rect x="12" y="34" width="12" height="14" />
      <rect x="40" y="34" width="12" height="14" />
      <rect x="26" y="38" width="12" height="10" />
      <path d="M20 28V20" />
      <path d="M44 28V20" />
      <path d="M14 20H50" />
      <path d="M30 20V14" />
      <path d="M18 14H46" />
      <circle cx="32" cy="18" r="2" />
    </svg>
  );
}

function BathroomIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="6" y="6" width="24" height="52" rx="1" />
      <path d="M12 14h12" />
      <path d="M12 22h12" />
      <path d="M12 30h12" />
      <path d="M12 38h12" />
      <path d="M12 46h12" />
      <rect x="34" y="30" width="24" height="28" rx="1" />
      <ellipse cx="46" cy="22" rx="8" ry="6" />
      <path d="M46 16v-4" />
      <path d="M42 26h8" />
      <rect x="38" y="36" width="16" height="16" rx="1" />
      <path d="M38 44h16" />
    </svg>
  );
}

function AduIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M32 6L6 26h52L32 6z" />
      <path d="M10 26v32h44V26" />
      <rect x="22" y="36" width="10" height="22" rx="1" />
      <rect x="38" y="36" width="10" height="10" rx="1" />
      <path d="M26 36V28" />
      <path d="M34 36V28" />
    </svg>
  );
}

function AdditionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M28 8L6 24v32h22V8z" />
      <path d="M28 24h30v32H28" />
      <rect x="14" y="34" width="8" height="10" rx="1" />
      <rect x="38" y="34" width="8" height="10" rx="1" />
      <path d="M42 24V12" />
      <path d="M36 18h12" />
      <path d="M18 34V28" />
    </svg>
  );
}

function BasementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M6 58V30l16-16 16 16v28" />
      <path d="M22 14h24v44H22" />
      <path d="M22 30h24" />
      <path d="M22 46h24" />
      <path d="M30 14V6l8 8" />
      <rect x="36" y="36" width="8" height="8" rx="1" />
      <path d="M10 58h10" />
      <path d="M12 36l4-4 4 4" />
    </svg>
  );
}

function CommercialIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="8" y="12" width="48" height="44" rx="1" />
      <path d="M8 28h48" />
      <path d="M8 44h48" />
      <rect x="14" y="18" width="8" height="6" rx="1" />
      <rect x="28" y="18" width="8" height="6" rx="1" />
      <rect x="42" y="18" width="8" height="6" rx="1" />
      <rect x="14" y="34" width="8" height="6" rx="1" />
      <rect x="28" y="34" width="8" height="6" rx="1" />
      <rect x="42" y="34" width="8" height="6" rx="1" />
      <rect x="24" y="50" width="16" height="6" rx="1" />
    </svg>
  );
}

const services = [
  {
    icon: KitchenIcon,
    title: "Kitchen Remodeling",
    description:
      "Custom kitchen remodeling in Portland, including cabinetry, countertops, layout improvements, and full renovations built for long-term value.",
    href: "/kitchen-remodeling-portland",
  },
  {
    icon: BathroomIcon,
    title: "Bathroom Remodeling",
    description:
      "Bathroom remodeling in Portland with custom tile, showers, vanities, and layout upgrades designed for durability and everyday use.",
    href: "/bathrooms-tile",
  },
  {
    icon: AduIcon,
    title: "ADU Construction",
    description:
      "ADU construction in Portland, Oregon, including detached units and conversions for rental income, guest space, or multigenerational living.",
    href: "/adu-home-additions-portland",
  },
  {
    icon: AdditionIcon,
    title: "Home Additions",
    description:
      "Home additions in Portland designed to expand your living space with seamless design, structural integration, and quality construction.",
    href: "/adu-home-additions-portland",
  },
  {
    icon: BasementIcon,
    title: "Basement Finishing",
    description:
      "Basement remodeling in Portland, turning unfinished space into functional living areas with custom layouts and quality finishes.",
    href: "/basements",
  },
  {
    icon: CommercialIcon,
    title: "Commercial Remodeling",
    description:
      "Commercial remodeling in Portland, including tenant improvements and build-outs designed for durability, efficiency, and long-term performance.",
    href: "/project-photoshop",
  },
];

export function BathroomsTileServicesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4 lg:text-3xl">
            Our Services
          </h2>
          <h3 className="mt-4 font-heading text-2xl font-bold text-foreground lg:text-3xl">
            Custom Home Remodeling in Portland, Oregon
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground/80">
            From kitchens and bathrooms to full home additions and ADUs, we provide professional
            remodeling services in Portland designed to improve your space and add long-term value.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="flex flex-col items-center text-center">
                <div className="mb-4 h-28 w-28 text-foreground">
                  <Icon className="h-full w-full" />
                </div>
                <h4 className="font-heading text-base font-bold text-foreground underline decoration-1 underline-offset-4">
                  {service.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                  {service.description}
                </p>
                <Button
                  href={service.href}
                  variant="outline"
                  size="md"
                  className="mt-6 w-full"
                >
                  Learn More &rarr;
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
