import { Globe, Smartphone, Building2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Globe,
    title: "Explosion du numérique",
    description:
      "Plus de la moitié de l'humanité est connectée ; chaque recherche, transaction ou géolocalisation laisse une trace exploitable. La généralisation d'Internet et du mobile crée un volume et une diversité de données sans précédent, socle de l'économie de plateformes.",
    iconColorClass: "icon-blue"
  },
  {
    icon: Smartphone,
    title: "Généralisation des smartphones",
    description:
      "Les terminaux personnels multiplient les capteurs (localisation, usage, santé) et les canaux de collecte. Les usages quotidiens génèrent des flux continus, souvent en temps réel, qui alimentent publicité, mobilité et services publics numériques.",
    iconColorClass: "icon-blue"
  },
  {
    icon: Building2,
    title: "Digitalisation des entreprises",
    description:
      "ERP, CRM, e-commerce et outils collaboratifs standardisent la donnée d'entreprise. La traçabilité des opérations permet d'optimiser stocks, maintenance prédictive et relation client — la donnée devient un levier direct de productivité et de qualité.",
    iconColorClass: "icon-blue"
  },
  {
    icon: Zap,
    title: "Accélération technologique",
    description:
      "La baisse du coût du stockage, la montée en puissance du calcul (cloud, GPU) et les progrès de l'IA rendent l'exploitation de gros volumes accessible. L'innovation s'enchaîne : ce qui était expérimental devient produit en quelques années.",
    iconColorClass: "icon-blue"
  }
];

const WhyDataSection = () => {
  return (
    <section className="section-light py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-14">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pourquoi la donnée est-elle centrale ?
          </motion.h2>
          <motion.div 
            className="text-muted-foreground max-w-3xl mx-auto text-lg space-y-3 text-left md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              La donnée n&apos;est pas qu&apos;un résidu technique : elle devient une ressource
              économique mobilisable (analyse, revente de services, avantage concurrentiel). Quatre
              dynamiques majeures expliquent pourquoi elle occupe aujourd&apos;hui le centre du
              débat sur l&apos;économie numérique.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={index} index={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColorClass={feature.iconColorClass}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDataSection;
