import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import tabletImage from "@/assets/tablet-device.jpg";
import aiChipImage from "@/assets/ai-chip.jpg";

const ImageBannerSection = () => {
  return (
    <section className="section-light py-16 px-4 overflow-hidden" aria-labelledby="section-decisions">
      <div className="container max-w-5xl mx-auto">
        <h2
          id="section-decisions"
          className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6"
        >
          Comment la donnée soutient-elle les décisions ?
        </h2>
        <div className="text-muted-foreground max-w-3xl mx-auto mb-10 space-y-4 text-base md:text-lg leading-relaxed">
          <p>
            Les décisions ne reposent plus uniquement sur l&apos;expertise ou l&apos;intuition : les
            tableaux de bord, les modèles prédictifs et les expérimentations (A/B testing) permettent
            d&apos;arbitrer entre investissements, politiques tarifaires ou priorités budgétaires à
            partir d&apos;indicateurs actualisés.
          </p>
          <p>
            Côté public, la donnée soutient la planification urbaine, la santé (suivi épidémiologique),
            la fiscalité ou les aides sociales — avec des enjeux de qualité et de transparence sur
            les méthodes de calcul.
          </p>
        </div>

        <ul className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 text-sm md:text-base text-foreground/90">
          <li className="rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-center">
            <span className="font-semibold text-primary block mb-1">Entreprises</span>
            Prix dynamiques, supply chain, segmentation client
          </li>
          <li className="rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-center">
            <span className="font-semibold text-primary block mb-1">États &amp; territoires</span>
            Politiques publiques fondées sur des indicateurs
          </li>
          <li className="rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-center">
            <span className="font-semibold text-primary block mb-1">Citoyens</span>
            Services en ligne, traçabilité, participation numérique
          </li>
        </ul>

        {/* Info Banner */}
        <motion.div 
          className="info-banner mb-10"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left px-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Lightbulb className="w-6 h-6 text-icon-yellow shrink-0" />
            </motion.div>
            <p className="text-base md:text-lg font-medium text-foreground max-w-2xl">
              Sans données fiables et partagées, les politiques économiques et les stratégies
              d&apos;entreprise perdent en lisibilité — et les citoyens, en capacité de contrôle.
            </p>
          </div>
        </motion.div>

        {/* Visuels : contexte métier + infrastructure numérique */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.figure
            className="group m-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg ring-1 ring-black/5 transition-shadow group-hover:shadow-xl">
              <img
                src={tabletImage}
                alt="Professionnel utilisant une tablette, tableaux et indicateurs à l'écran"
                className="h-[220px] w-full object-cover object-center md:h-[260px]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted-foreground leading-snug">
              <span className="font-medium text-foreground/90">Usages &amp; décision</span> — outils
              bureautiques, reporting et collaboration autour des indicateurs.
            </figcaption>
          </motion.figure>

          <motion.figure
            className="group m-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg ring-1 ring-black/5 transition-shadow group-hover:shadow-xl">
              <img
                src={aiChipImage}
                alt="Circuit imprimé et puce : matériel de traitement des données"
                className="h-[220px] w-full object-cover object-center md:h-[260px]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted-foreground leading-snug">
              <span className="font-medium text-foreground/90">Infrastructures</span> — calcul,
              stockage et réseaux qui rendent possibles l&apos;analyse à grande échelle.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default ImageBannerSection;
