import { Globe, Smartphone, Building2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Globe,
    title: "Explosion du numérique",
    description: "Internet et les technologies numériques se sont généralisés à l'échelle mondiale",
    iconColorClass: "icon-blue"
  },
  {
    icon: Smartphone,
    title: "Généralisation des smartphones",
    description: "Des milliards d'utilisateurs connectés génèrent des données en continu",
    iconColorClass: "icon-blue"
  },
  {
    icon: Building2,
    title: "Digitalisation des entreprises",
    description: "Les organisations adoptent massivement les outils numériques",
    iconColorClass: "icon-blue"
  },
  {
    icon: Zap,
    title: "Accélération technologique",
    description: "L'innovation numérique s'accélère de manière exponentielle",
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
            Pourquoi les données sont essentielles aujourd'hui
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            À notre ère, plusieurs facteurs contribuent à l'importance cruciale des données 
            dans l'économie numérique
          </motion.p>
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
