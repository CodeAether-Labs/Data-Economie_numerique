import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import tabletImage from "@/assets/tablet-device.jpg";

const ImageBannerSection = () => {
  return (
    <section className="section-light py-16 px-4 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        {/* Info Banner */}
        <motion.div 
          className="info-banner mb-10"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Lightbulb className="w-6 h-6 text-icon-yellow" />
            </motion.div>
            <p className="text-lg font-medium text-foreground">
              Les données alimentent les décisions économiques à tous les niveaux
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src={tabletImage} 
            alt="Tablette numérique sur bureau" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ImageBannerSection;
