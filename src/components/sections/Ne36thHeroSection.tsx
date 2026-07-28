import Image from "next/image";
import { cn } from "@/lib/utils";
import { MapPinIcon } from "@/components/icons";

interface Ne36thHeroSectionProps {
  className?: string;
}

export function Ne36thHeroSection({ className }: Ne36thHeroSectionProps) {
  return (
    <section className={cn("relative h-[600px] lg:h-[650px]", className)}>
      <div className="absolute inset-0">
        <Image
          src="/images/NE_36th_Bathroom_1_1ffb3e0b.png"
          alt="NE 36th Primary Suite & Bathroom Remodel in Northeast Portland featuring a custom double vanity and walk-in shower."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
          <h1 className="font-heading text-3xl font-bold text-white underline decoration-accent decoration-2 underline-offset-4 md:text-4xl lg:text-5xl">
            NE 36th Primary Suite & Bathroom Remodel
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            This Northeast Portland primary suite renovation transformed an outdated bathroom into a
            bright, functional retreat with a custom walk-in shower, double vanity, custom tile work,
            and premium finishes throughout. The project also included framing a new walk-in closet
            and laundry room directly off the bathroom, along with updates to the adjoining primary
            bedroom, stair railings, and custom built-ins. The result is a modern, spa-inspired primary
            suite designed for comfort, storage, and everyday living.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/90">
            <MapPinIcon size={16} className="text-accent" />
            <span>Northeast Portland, Oregon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
