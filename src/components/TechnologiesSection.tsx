import { Database, Brain, Cloud, Wifi, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import aiChipImage from "@/assets/ai-chip.jpg";
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
    description: "Capacité à traiter et analyser d'immenses volumes de données pour en extraire de la valeur",
    gradientClass: "icon-pink"
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Algorithmes d'apprentissage automatique qui exploitent les données pour prédire et décider",
    gradientClass: "icon-blue"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Infrastructure distribuée permettant le stockage et le traitement massif des données",
    gradientClass: "icon-cyan"
  },
  {
    icon: Wifi,
    title: "Internet des Objets (IoT)",
    description: "Milliards d'appareils connectés générant des flux continus de données en temps réel",
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
            Données et technologies émergentes
          </h2>
          <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg">
            Les technologies de pointe reposent toutes sur un socle commun : les données
          </p>
        </motion.div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* AI Chip Image */}
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src={aiChipImage} 
            alt="Puce IA sur circuit imprimé" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
