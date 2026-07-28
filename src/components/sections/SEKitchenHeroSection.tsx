import Image from "next/image";
import { cn } from "@/lib/utils";

interface SEKitchenHeroSectionProps {
  className?: string;
}

export function SEKitchenHeroSection({ className }: SEKitchenHeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-foreground", className)}>
      <div className="absolute inset-0">
        <Image
          src="/images/ChatGPT_Image_May_2__2026__11_50_51_AM_eb356924.png"
          alt="Custom kitchen and home renovation in Southeast Portland with white oak cabinetry and warm natural materials."
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
            SE 76th, Portland Kitchen &amp; Home Renovation
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed md:text-base">
            Custom kitchen, living room, mud room, and laundry room renovation completed in SE
            Portland with handcrafted finishes and warm natural materials throughout.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Image
              src="/images/ChatGPT_Image_May_19__2026__02_58_44_PM_835acc3c.png"
              alt="Location pin"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span>SE Portland, Oregon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
