import Image from "next/image";
import { MapPin } from "lucide-react";

export function HawthorneHeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center lg:min-h-[700px]">
      <Image
        src="/images/Hawthorne_Addition_Back_32ddb9aa.png"
        alt="Southeast Hawthorne Portland whole home addition and backyard fire pit"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="font-heading text-3xl font-bold text-white underline decoration-accent decoration-2 underline-offset-4 lg:text-5xl">
            SE Hawthorne, Portland Whole Home Addition
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-white/90 lg:text-base">
            Custom home addition and full home renovation in Southeast Portland featuring
            expanded living spaces, custom bathrooms, outdoor entertaining areas, and a complete
            exterior transformation.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/90 lg:text-base">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Southeast Portland, Oregon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
