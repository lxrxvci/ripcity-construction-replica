import Image from "next/image";
import { MapPinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ClayBasementHeroSectionProps {
  className?: string;
  imageSrc: string;
  imageAlt: string;
}

export function ClayBasementHeroSection({
  className,
  imageSrc,
  imageAlt,
}: ClayBasementHeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-foreground", className)}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-40 lg:min-h-[65vh] lg:px-10 lg:pb-24 lg:pt-48">
        <div className="max-w-3xl space-y-6 text-background">
          <h1 className="font-heading text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            SE Clay, Portland Basement Remodel
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed md:text-base">
            This Southeast Portland basement remodel transformed an unfinished lower level into a
            fully finished living space featuring a new family room, bedroom, bathroom, laundry area,
            egress window, and extensive plumbing and mechanical upgrades.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium">
            <MapPinIcon size={20} className="h-5 w-5" />
            <span>Southeast Portland, Oregon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
