import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectsHeroSectionProps {
  className?: string;
}

export function ProjectsHeroSection({ className }: ProjectsHeroSectionProps) {
  return (
    <section className={cn("relative min-h-[70vh] overflow-hidden bg-foreground", className)}>
      <Image
        src="/images/ChatGPT_Image_May_19__2026__02_32_47_PM_0c742e4d.png"
        alt="Portland remodeling projects by Rip City Construction"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl space-y-8 pt-24 text-background">
          <h1 className="font-heading text-4xl font-medium leading-tight text-accent md:text-5xl lg:text-6xl">
            Portland Remodeling Projects
          </h1>
          <p className="max-w-lg text-sm leading-relaxed md:text-base">
            Explore kitchen remodels, bathroom renovations, ADU construction, basement finishing,
            and home additions completed throughout Portland and surrounding areas.
          </p>
          <Button href="/contact" size="lg">
            Request a Walkthrough
          </Button>
        </div>
      </div>
    </section>
  );
}
