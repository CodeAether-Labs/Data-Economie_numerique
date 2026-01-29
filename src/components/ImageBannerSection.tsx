import { Lightbulb } from "lucide-react";
import tabletImage from "@/assets/tablet-device.jpg";

const ImageBannerSection = () => {
  return (
    <section className="section-light py-16 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Info Banner */}
        <div className="info-banner mb-10">
          <div className="flex items-center justify-center gap-3">
            <Lightbulb className="w-6 h-6 text-icon-yellow" />
            <p className="text-lg font-medium text-foreground">
              Les données alimentent les décisions économiques à tous les niveaux
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={tabletImage} 
            alt="Tablette numérique sur bureau" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageBannerSection;
