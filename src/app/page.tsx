import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsBar from "@/components/StatsBar";
import AnalysisSection from "@/components/AnalysisSection";
import FutureSection from "@/components/FutureSection";
import StoriesSection from "@/components/StoriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LocationsSection from "@/components/LocationsSection";
import FooterSection from "@/components/FooterSection";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Stats Bar Section */}
      <StatsBar />
      
      {/* Analysis Section */}
      <AnalysisSection />
      
      {/* Future Section */}
      <FutureSection />
      
      {/* Stories Section */}
      <StoriesSection />

     
      
      {/* Case Studies Section */}
      <CaseStudiesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Locations Section */}
      <LocationsSection />
      
      {/* Footer Section */}
      <FooterSection />




      <Process />
    </main>
  );
}
