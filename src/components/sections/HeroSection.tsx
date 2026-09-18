import Image from "next/image";
import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import hero from "@/content/hero.json";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-[90vh] overflow-hidden bg-foreground", className)}>
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover opacity-80"
        data-cms="hero.image"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl space-y-8 pt-24 text-background">
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
              {hero.titleLines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 ? <br /> : null}
                  <span
                    className="pointer-events-auto"
                    data-cms={`hero.titleLines.${i}`}
                  >
                    {line}
                  </span>
                </Fragment>
              ))}
            </h1>
          </div>
          <p
            className="pointer-events-auto max-w-lg text-sm leading-relaxed md:text-base"
            data-cms="hero.sub"
          >
            {hero.sub}
          </p>
          <Button href={hero.ctaHref} size="lg" className="pointer-events-auto">
            <span data-cms="hero.ctaLabel">{hero.ctaLabel}</span>
          </Button>
        </div>

        <div className="relative ml-auto hidden h-40 w-40 lg:block lg:h-52 lg:w-52">
          <Image
            src={hero.shieldImage}
            alt={hero.shieldAlt}
            fill
            className="pointer-events-auto object-contain"
            data-cms="hero.shieldImage"
          />
        </div>
      </div>
    </section>
  );
}
