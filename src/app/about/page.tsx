import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutProjectsSection } from "@/components/sections/AboutProjectsSection";
import { AboutServicesSection } from "@/components/sections/AboutServicesSection";
import { AboutReviewsSection } from "@/components/sections/AboutReviewsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portland Remodeling Contractor | Kitchens, ADUs & Additions | Rip City Construction",
  description:
    "Rip City Construction is a Portland remodeling contractor owned and operated by Cameron Taylor. Since 2012, we’ve built our business on quality craftsmanship, clear communication, and referrals.",
};

export default function AboutPage() {
  return (
    <>
      <Header variant="light" />
      <main id="page" className="flex-1">
        <AboutHeroSection />
        <AboutProjectsSection />
        <AboutServicesSection />
        <AboutReviewsSection />
        <CtaFooter />
        <AboutFooter hideCtaButton />
      </main>
      <Footer />
    </>
  );
}
