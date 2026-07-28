import Image from "next/image";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface NixonHeroSectionProps {
  className?: string;
}

export function NixonHeroSection({ className }: NixonHeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-foreground", className)}>
      <div className="absolute inset-0">
        <Image
          src="/images/Nixon_Front_db052cca.png"
          alt="Nixon Basement ADU Conversion exterior in Milwaukie, Oregon"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-40 lg:min-h-[70vh] lg:px-10 lg:pb-24 lg:pt-48">
        <div className="max-w-3xl space-y-6 text-background">
          <h1 className="font-heading text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            <span className="border-b-4 border-accent pb-2">
              Nixon Basement ADU Conversion
            </span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed md:text-base">
            A complete basement ADU conversion in Milwaukie, Oregon featuring three bedrooms, two
            bathrooms, a full kitchen, custom architectural woodwork, and flexible living space
            designed for multigenerational living, guests, or rental income.
          </p>
          <div className="flex items-center gap-2 text-sm text-background/80">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Milwaukie, Oregon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
