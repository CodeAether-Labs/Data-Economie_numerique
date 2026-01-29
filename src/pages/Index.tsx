import HeroSection from "@/components/HeroSection";
import WhyDataSection from "@/components/WhyDataSection";
import ImageBannerSection from "@/components/ImageBannerSection";
import DataRoleSection from "@/components/DataRoleSection";
import ExamplesSection from "@/components/ExamplesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ChallengesSection from "@/components/ChallengesSection";

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
      
      {/* Footer */}
      <footer className="section-dark py-8 px-4 border-t border-border/20">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 — Les Données au Cœur de l'Économie Numérique
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
