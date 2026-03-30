import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VideoShowreelSection } from "@/components/sections/VideoShowreelSection";

export default function HomePage() {
  return (
    <div className="relative isolate overflow-x-clip bg-[var(--color-bg-primary)]">
      <div id="top" />
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection />
        <ProblemSection />
        <TestimonialsSection />
        <VideoShowreelSection />
        <StatsSection />
        <TeamSection />
        <ProcessSection />
        <ServicesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
