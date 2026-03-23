import { Zap, Lock, Home, Scale } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

const ChallengesSection = () => {
  return (
    <section className="section-dark py-20 px-4 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        {/* Challenge Banner */}
        <motion.div 
          className="challenge-banner text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Zap className="w-10 h-10 text-icon-yellow" />
          </motion.div>
          <p className="text-xl md:text-2xl text-primary-foreground font-medium max-w-3xl mx-auto">
            <motion.span 
              className="text-icon-yellow inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Sans données,
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              l&apos;économie numérique ne peut ni fonctionner ni évoluer
            </motion.span>
          </p>
          <p className="text-primary-foreground/70 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            À l&apos;inverse, une société « data-driven » sans cadre éthique ni transparence peut
            fragiliser la confiance : la quantité de données ne suffit pas sans qualité, consentement
            et contre-pouvoirs.
          </p>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex justify-center mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg 
              className="w-12 h-12 text-icon-yellow" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Quels défis pour la donnée et la société ?
          </h2>
          <div className="text-primary-foreground/70 max-w-3xl mx-auto text-lg space-y-3">
            <p>
              Trois familles d&apos;enjeux reviennent dans les débats publics et les agendas
              réglementaires : les droits des personnes, la capacité des territoires à maîtriser
              leurs données, et l&apos;équité des systèmes automatisés.
            </p>
          </div>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard index={0}>
            <div className="feature-card bg-card/90 h-full">
              <motion.div 
                className="icon-container bg-destructive/20 text-destructive mb-6"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Lock className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-bold text-card-foreground mb-3">
                Protection de la vie privée
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Le RGPD en Europe encadre la collecte, la finalité et la durée de conservation des
                données personnelles. Au-delà du cadre légal, les utilisateurs réclament des choix
                granulaires et une compréhensibilité réelle des politiques de confidentialité — souvent
                trop longues et opaques.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={1}>
            <div className="feature-card bg-card/90 h-full">
              <motion.div 
                className="icon-container icon-blue mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Home className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-bold text-card-foreground mb-3">
                Souveraineté numérique
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hébergement, clouds de confiance et interopérabilité sont au cœur des stratégies
                étatiques : réduire la dépendance à quelques hyperscalers, sécuriser les données
                sensibles (santé, défense) et garantir la continuité des services en cas de crise
                géopolitique.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={2}>
            <div className="feature-card bg-card/90 h-full">
              <motion.div 
                className="icon-container icon-orange mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Scale className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-bold text-card-foreground mb-3">
                Équité et biais
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Les modèles reproduisent les biais des données d&apos;entraînement (genre, origine,
                territoire). Sans audit régulier et diversité des équipes, les décisions automatisées
                peuvent exclure des populations ou renforcer des inégalités — un risque économique et
                démocratique majeur.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
