import { Database } from "lucide-react";
import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

const tags = ["Valeur", "Innovation", "Décision"];

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-[88vh] flex items-center overflow-hidden px-4 py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(255,255,255,0.07),transparent)]"
        aria-hidden="true"
      />

      <div className="container relative z-[1] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Texte — allégé */}
          <div className="text-center lg:text-left">
            <motion.div
              className="flex justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center border border-primary/20">
                <Database className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold mb-5 leading-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <span className="text-primary-foreground">Données et économie numérique</span>
              <br />
              <span className="text-gradient">Comprendre l&apos;enjeu stratégique</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              La donnée structure l&apos;économie numérique : elle alimente les décisions, les
              modèles d&apos;affaires et le débat public — avec des enjeux de compétitivité, de
              confiance et de régulation.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-medium text-primary-foreground/85"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.p
              className="text-sm text-primary-foreground/55 max-w-xl mx-auto lg:mx-0 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Faites défiler pour la suite — du contexte aux technologies et défis sociétaux.
            </motion.p>
          </div>

          {/* Visuel abstrait — pas de photo lourde dans le hero */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="max-w-sm mx-auto lg:max-w-none lg:scale-105"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-12 lg:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/25 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
