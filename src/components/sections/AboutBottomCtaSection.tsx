import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AboutBottomCtaSectionProps {
  className?: string;
}

export function AboutBottomCtaSection({ className }: AboutBottomCtaSectionProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <Image
        src="/images/ChatGPT_Image_Apr_29__2026__01_16_18_PM_acc7ebcf.png"
        alt="Modern living room interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <h2 className="font-heading text-2xl font-bold text-background md:text-3xl lg:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/80">
          Let&apos;s talk about your project and get you a clear plan moving forward.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent px-10 py-4 text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
