import Image from "next/image";
import { cn } from "@/lib/utils";

interface Sw78thHeroSectionProps {
  className?: string;
}

export function Sw78thHeroSection({ className }: Sw78thHeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-foreground", className)}>
      <div className="absolute inset-0">
        <Image
          src="/images/SW_78th_A1_3f97d354.png"
          alt="Custom detached ADU construction completed in Southwest Portland featuring modern exterior finishes and private entry."
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-40 lg:min-h-[70vh] lg:px-10 lg:pb-24 lg:pt-48">
        <div className="max-w-3xl space-y-6 text-background">
          <h1 className="font-heading text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            SW 78th Detached ADU Construction
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed md:text-base">
            This Southwest Portland project involved the construction of a custom detached accessory
            dwelling unit (ADU) designed as a comfortable grandmother suite. Built from the ground
            up, the new home includes a full kitchen, bathroom, bedroom, study, living area, and
            all-new utility connections.
          </p>
        </div>
      </div>
    </section>
  );
}
