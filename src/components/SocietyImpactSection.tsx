import { Briefcase, RefreshCw, ChevronRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  projection: string;
  accentColor: "blue" | "purple";
}

const ImpactCard = ({ icon, title, description, projection, accentColor }: ImpactCardProps) => {
  const borderColor = accentColor === "blue" ? "bg-icon-blue" : "bg-icon-purple";
  const bgColor = accentColor === "blue" ? "bg-icon-blue/10" : "bg-icon-purple/10";
  
  return (
    <div className="feature-card relative overflow-hidden">
      {/* Top accent border */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${borderColor}`} />
      
      <div className={`icon-container ${accentColor === "blue" ? "icon-blue" : "icon-purple"} mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-card-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Projection box */}
      <div className={`${bgColor} rounded-lg p-4 mb-4`}>
        <p className="text-sm">
          <span className="font-semibold text-foreground">Projection:</span>{" "}
          <span className="text-muted-foreground">{projection}</span>
        </p>
      </div>
      
      <div className="border-t border-border pt-4">
        <motion.button 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ x: 5 }}
        >
          <ChevronRight className="w-4 h-4" />
          Explorer les transformations détaillées
        </motion.button>
      </div>
    </div>
  );
};

const impacts = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Nouveaux métiers",
    description: "Data scientist, analyste de données, expert en cybersécurité, éthicien de l'IA...",
    projection: "97 millions nouveaux emplois data d'ici 2027",
    accentColor: "blue" as const
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Transformation du travail",
    description: "Télétravail, automatisation, collaboration numérique et nouveaux modes d'organisation",
    projection: "70% des emplois transformés par le numérique d'ici 2030",
    accentColor: "purple" as const
  }
];

const SocietyImpactSection = () => {
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
            Impact sur la société et l'avenir
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Les données redéfinissent notre société et façonnent le monde de demain
          </p>
          
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 border border-icon-blue text-icon-blue rounded-full hover:bg-icon-blue/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-5 h-5" />
            Découvrez les transformations en cours
          </motion.button>
        </motion.div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => (
            <AnimatedCard key={index} index={index}>
              <ImpactCard
                icon={impact.icon}
                title={impact.title}
                description={impact.description}
                projection={impact.projection}
                accentColor={impact.accentColor}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocietyImpactSection;
