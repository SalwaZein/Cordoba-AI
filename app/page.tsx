import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreServiceSection from "@/components/CoreServiceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="service">
        <CoreServiceSection />
      </div>
      <HowItWorksSection />
      <QuoteSection />
      <div id="cta">
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
