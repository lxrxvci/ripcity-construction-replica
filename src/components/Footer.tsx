import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CtaFooterProps {
  className?: string;
}

export function CtaFooter({ className }: CtaFooterProps) {
  return (
    <section className={cn("bg-foreground py-16 text-background lg:py-24", className)}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-bold underline decoration-2 underline-offset-4 lg:text-3xl">
            Ready to Start Your Remodeling Project?
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-background/80">
            From kitchens and bathrooms to ADUs, additions, and basement remodeling, Rip City
            Construction provides high-quality remodeling services throughout Portland and
            surrounding areas.
          </p>
          <Button variant="secondary" href="/contact" size="lg">
            Request a Consultation &rarr;
          </Button>
        </div>

        <div className="flex items-center justify-between gap-8 lg:justify-end">
          <div className="text-center">
            <div className="font-heading text-5xl font-bold lg:text-6xl">200+</div>
            <p className="mt-2 text-xs uppercase tracking-wider text-background/70">
              Remodeling Projects Completed
            </p>
          </div>
          <div className="text-center">
            <div className="font-heading text-5xl font-bold lg:text-6xl">
              14+
              <br />
              <span className="text-2xl font-normal">Years</span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-wider text-background/70">
              remodeling homes
            </p>
          </div>
          <div className="relative hidden h-32 w-32 sm:block lg:h-40 lg:w-40">
            <Image
              src="/images/Sheild_Image_0d2954ec.png"
              alt="Serving Portland and surrounding areas"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface AboutFooterProps {
  className?: string;
  hideCtaButton?: boolean;
}

export function AboutFooter({ className, hideCtaButton }: AboutFooterProps) {
  return (
    <section className={cn("bg-background py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-wider text-accent underline decoration-2 underline-offset-4">
              About Rip City Construction
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight lg:text-4xl">
              Portland Remodeling Built on Quality Craftsmanship.
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              Rip City Construction is a Portland remodeling contractor specializing in kitchen
              remodeling, bathroom renovations, ADU construction, home additions, basement
              finishing, and full residential remodeling throughout Portland and surrounding areas.
              Since 2012, we&apos;ve built our business on quality workmanship, clear communication,
              and referrals from satisfied homeowners.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              Our goal is to make the remodeling process organized, transparent, and well-managed
              from start to finish while delivering high-quality results built to last.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80"
            >
              Learn More About Us &rarr;
            </Link>
          </div>

          <div className="space-y-6 lg:pl-12">
            <h3 className="font-heading text-2xl font-bold text-accent underline decoration-2 underline-offset-4">
              Why Homeowners Choose Us
            </h3>
            <ul className="space-y-3">
              {[
                "Licensed & Insured",
                "Family-Owned Since 2012",
                "Portland Owned & Operated",
                "Kitchens, Bathrooms & ADUs",
                "Clear Communication",
                "Built on Referrals & Repeat Clients",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="text-accent">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_acc7ebcf.png"
                alt="Modern living room interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {!hideCtaButton && (
          <div className="mt-16 flex justify-center">
            <Button href="/contact" size="lg">
              Request a Consultation
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground py-6 text-center text-xs text-background/60">
      <p>&copy; {new Date().getFullYear()} Rip City Construction. All rights reserved.</p>
    </footer>
  );
}
