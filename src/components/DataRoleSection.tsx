import { DollarSign, Settings, Sparkles, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import FeatureCard from "./FeatureCard";

const roles = [
  {
    icon: DollarSign,
    title: "Création de valeur économique",
    description:
      "Les données permettent de mesurer la performance, d'identifier de nouveaux marchés et de monétiser des services (abonnements, place de marché, publicité ciblée). Elles soutiennent aussi la modélisation financière et la tarification dynamique selon la demande.",
    iconColorClass: "icon-blue"
  },
  {
    icon: Settings,
    title: "Optimisation des services",
    description:
      "En combinant historiques d'usage et indicateurs temps réel, les organisations réduisent les délais, les stocks et les pannes. La maintenance prédictive et l'ordonnancement automatisé illustrent un retour sur investissement directement lié à la qualité des données.",
    iconColorClass: "icon-blue"
  },
  {
    icon: Sparkles,
    title: "Personnalisation des produits",
    description:
      "Recommandations, parcours utilisateur et offres sur mesure reposent sur le profilage et l'analyse comportementale. La personnalisation augmente la fidélisation mais pose aussi la question du consentement et de la transparence des algorithmes.",
    iconColorClass: "icon-blue"
  },
  {
    icon: Lightbulb,
    title: "Innovation technologique",
    description:
      "L'IA générative, la vision par ordinateur ou les jumeaux numériques s'entraînent sur des corpus de données : sans données pertinentes et documentées, pas de prototypes robustes. La donnée est donc à la fois matière première et critère de différenciation.",
    iconColorClass: "icon-green"
  }
];

const DataRoleSection = () => {
  return (
    <section className="section-light py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quel rôle pour la donnée ?
          </h2>
          <div className="text-muted-foreground max-w-3xl mx-auto text-lg space-y-3">
            <p>
              On peut la lire comme une chaîne de valeur : capturer la donnée, la qualifier, la
              mettre en relation, puis en extraire des décisions ou des automatisations. Les
              quatre dimensions ci-dessous se renforcent mutuellement dans la plupart des secteurs.
            </p>
          </div>
        </motion.div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <AnimatedCard key={index} index={index}>
              <FeatureCard
                icon={role.icon}
                title={role.title}
                description={role.description}
                iconColorClass={role.iconColorClass}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataRoleSection;
