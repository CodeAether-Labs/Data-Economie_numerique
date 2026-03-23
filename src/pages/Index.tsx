import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import WhyDataSection from "@/components/WhyDataSection";
import ImageBannerSection from "@/components/ImageBannerSection";
import DataRoleSection from "@/components/DataRoleSection";
import ExamplesSection from "@/components/ExamplesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ChallengesSection from "@/components/ChallengesSection";
import SocietyImpactSection from "@/components/SocietyImpactSection";
import ConclusionSection from "@/components/ConclusionSection";
const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark background */}
      <HeroSection />
      
      {/* Why Data is Essential - Light background */}
      <WhyDataSection />
      
      {/* Image with Info Banner - Light background */}
      <ImageBannerSection />
      
      {/* Role of Data - Light background */}
      <DataRoleSection />
      
      {/* Concrete Examples - Light background */}
      <ExamplesSection />
      
      {/* Emerging Technologies - Dark background */}
      <TechnologiesSection />
      
      {/* Challenges - Dark background */}
      <ChallengesSection />
      
      {/* Society Impact - Light background */}
      <SocietyImpactSection />
      
      {/* Conclusion - Dark background */}
      <ConclusionSection />
      
      {/* Footer */}
      <motion.footer 
        className="section-dark py-8 px-4 border-t border-border/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 — Données et économie numérique
          </p>
        </div>
      </motion.footer>
    </main>
  );
};

export default Index;
