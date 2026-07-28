import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CtaFooter, AboutFooter, Footer } from "@/components/Footer";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactProjectsSection } from "@/components/sections/ContactProjectsSection";
import { ContactServicesSection } from "@/components/sections/ContactServicesSection";
import { ContactReviewsSection } from "@/components/sections/ContactReviewsSection";

export const metadata: Metadata = {
  title: "Contact Portland Remodeling Contractor | Rip City Construction",
  description:
    "Get in touch with Rip City Construction for a free estimate on your next kitchen, bathroom, ADU, addition, or basement remodeling project in Portland, Oregon.",
};

export default function ContactPage() {
  return (
    <>
      <Header variant="light" />
      <main className="flex-1 pt-28 lg:pt-32">
        <ContactFormSection />
        <ContactProjectsSection />
        <ContactServicesSection />
        <ContactReviewsSection />
      </main>
      <CtaFooter />
      <AboutFooter />
      <Footer />
    </>
  );
}
