import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ServicesFeaturedSectionProps {
  className?: string;
}

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Full kitchen renovations from demo to final walkthrough — layout redesigns, cabinetry, countertops, tile, flooring, and lighting tailored to your home.",
    image: "/images/Burnside_Kitchen_1_86683ebd.png",
    href: "/kitchen-remodeling-portland",
  },
  {
    title: "ADUs & Home Additions",
    description:
      "Accessory dwelling units and home additions are designed and built to expand your living space with quality craftsmanship and efficient design.",
    image: "/images/Nixon_Front_ebd3de68.png",
    href: "/adu-home-additions-portland",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Full bathroom renovations, including tile, showers, vanities, lighting, and layout upgrades built for durability and function.",
    image: "/images/IMG_20191212_123254_854_d253bd5f.jpg",
    href: "/bathrooms-tile",
  },
  {
    title: "Basement Remodeling",
    description:
      "Transform your basement into a functional living space with full remodeling, finishing, and layout improvements.",
    image: "/images/20200408_163838_5e2d96e4.jpg",
    href: "/basements",
  },
  {
    title: "New Build",
    description:
      "Custom new construction and residential builds in Portland, designed and built with quality materials, clear planning, and lasting craftsmanship.",
    image: "/images/41782933_2172806549458542_3972088585447800832_o_525fed99.jpg",
    href: "/new-build",
  },
  {
    title: "Commercial Remodeling",
    description:
      "Tenant improvements, office and retail build-outs, and light commercial renovations completed on schedule with minimal downtime.",
    image: "/images/12246940_945227248883151_6762714107473264736_n_d97ce95c.jpg",
    href: "/project-photoshop",
  },
];

export function ServicesFeaturedSection({ className }: ServicesFeaturedSectionProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden bg-card text-center"
            >
              <Link href={service.href} className="block overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-1 flex-col items-center p-6">
                <h3 className="font-heading text-lg font-semibold text-accent">
                  <Link
                    href={service.href}
                    className="underline decoration-1 underline-offset-4 hover:opacity-80"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Button variant="outline" href={service.href} size="md">
                    Learn more &gt;
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
