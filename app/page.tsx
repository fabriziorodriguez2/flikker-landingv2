import { CTAFinal } from "@/components/sections/CTAFinal";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reputation } from "@/components/sections/Reputation";
import { Reactivation } from "@/components/sections/Reactivation";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientCarousel } from "@/components/sections/ClientCarousel";
import { ClientLogoCarousel } from "@/components/sections/ClientLogoCarousel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ClientLogoCarousel />
        <Problem />
        <ClientCarousel />
        <Solution />
        <HowItWorks />
        <Reputation />
        <Reactivation />
        <Testimonials hasTestimonials />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />

      <WhatsAppButton
        variant="floating"
        message={WHATSAPP_MESSAGES.floating}
        label="Hablar por WhatsApp"
      />
    </>
  );
}
