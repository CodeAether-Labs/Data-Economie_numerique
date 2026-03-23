import { Database, Brain, Cloud, Wifi, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass: string;
}

const TechCard = ({ icon: Icon, title, description, gradientClass }: TechCardProps) => {
  return (
    <div className="dark-card">
      <motion.div 
        className={`icon-container ${gradientClass} mb-6`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      <h3 className="text-xl font-bold text-primary-foreground mb-3">
        {title}
      </h3>
      <p className="text-primary-foreground/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const technologies = [
  {
    icon: Database,
    title: "Big Data",
    description:
      "Frameworks distribués (type Hadoop/Spark dans l'écosystème open source) permettent de traiter des pétaoctets hors mémoire vive unique. L'enjeu n'est plus seulement de stocker, mais de gouverner la qualité, la lignée des données et les accès conformes au RGPD.",
    gradientClass: "icon-pink"
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Apprentissage supervisé, non supervisé et modèles génératifs s'entraînent sur des corpus étiquetés ou non. La performance dépend autant des données (biais, représentativité) que de l'architecture — d'où l'importance des jeux de données documentés et auditables.",
    gradientClass: "icon-blue"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Le cloud offre elasticité et mutualisation : on ajuste les ressources au volume traité. Les modèles SaaS et les API facilitent l'industrialisation des pipelines de données, au prix d'une dépendance aux fournisseurs et de questions de localisation des données.",
    gradientClass: "icon-cyan"
  },
  {
    icon: Wifi,
    title: "Internet des Objets (IoT)",
    description:
      "Capteurs industriels, véhicules connectés ou objets domestiques émettent des flux haute fréquence. La valeur naît du croisement avec d'autres sources (météo, stocks), mais la surface d'attaque cyber et la vie privée exigent sécurisation et minimisation des données.",
    gradientClass: "icon-orange"
  }
];

const TechnologiesSection = () => {
  return (
    <section className="section-dark py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Quelles technologies pour exploiter la donnée ?
          </h2>
          <div className="text-primary-foreground/75 max-w-3xl mx-auto text-lg space-y-3">
            <p>
              Ces familles technologiques ne sont pas indépendantes : l&apos;IoT alimente le big data,
              le big data nourrit l&apos;IA, et le cloud rend l&apos;ensemble scalable. Comprendre leurs
              interactions aide à situer où se prennent les décisions d&apos;investissement et où
              apparaissent les verrous (compétences, énergie, souveraineté).
            </p>
          </div>
        </motion.div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <AnimatedCard key={index} index={index}>
              <TechCard
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
                gradientClass={tech.gradientClass}
              />
            </AnimatedCard>
          ))}
        </div>

        <p className="text-center text-primary-foreground/55 text-sm mt-10 max-w-3xl mx-auto leading-relaxed border-t border-primary-foreground/10 pt-8">
          La puissance de calcul et la miniaturisation des puces rendent possibles l&apos;inférence
          embarquée et les centres de données à grande échelle — le même type d&apos;infrastructure
          que celui illustré plus haut avec la photographie du circuit.
        </p>
      </div>
    </section>
  );
};

export default TechnologiesSection;
