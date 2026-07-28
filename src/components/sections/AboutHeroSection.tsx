import Image from "next/image";
import { cn } from "@/lib/utils";

interface AboutHeroSectionProps {
  className?: string;
}

export function AboutHeroSection({ className }: AboutHeroSectionProps) {
  return (
    <section className={cn("bg-background py-16 pt-32 lg:py-24 lg:pt-40", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="font-heading text-4xl font-medium text-accent md:text-5xl lg:text-6xl">
              About Us
            </h1>

            <div className="space-y-6 text-sm leading-relaxed text-foreground/80">
              <p>
                Rip City Construction is a Portland remodeling contractor specializing in
                high-quality renovations and straightforward communication. Founded in 2012,
                we&apos;ve built our business on referrals and repeat clients by doing things the
                right way.
              </p>
              <p>
                We specialize in kitchen remodels, bathrooms, ADUs, home additions, and basement
                finishing. Whether it&apos;s a full renovation or a focused upgrade, the goal is
                always the same. Build it right, stay organized, and make the process as smooth as
                possible for the homeowner.
              </p>
              <p>
                Most of our work comes from referrals, and we take that seriously. Showing up on
                time, keeping a clean jobsite, and following through on what we say matters just as
                much as the finished product.
              </p>
            </div>

            <div className="space-y-1 text-xs font-medium uppercase tracking-wider text-foreground/70">
              <p>Licensed and insured</p>
              <p>CCB #197600</p>
              <p>Serving Portland and surrounding areas</p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-sm font-bold uppercase tracking-wider text-accent">
                Owner & Founder
              </p>
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                About Us
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80">
                Rip City Construction is owned and operated by Cameron Taylor. Since starting the
                company in 2012, Cameron has built the company around quality craftsmanship,
                reliability, and straightforward communication.
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">
                With hands-on experience in framing, finish carpentry, and full-scale remodeling,
                he works closely with homeowners and subcontractors to ensure every project is
                completed the right way from start to finish.
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">
                Serving Portland and surrounding areas including SE Portland, NE Portland, and the
                greater metro area.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_2b6b2905.png"
                alt="Front view of a modern two-story house with a well maintained landscape and paved walkway"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/family_photo_portfolio_polish_635a13f3.png"
                alt="A family of four taking a selfie in front of a decorated Christmas tree"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
