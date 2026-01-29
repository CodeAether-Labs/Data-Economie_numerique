import { Database, Brain, Cloud, Wifi, LucideIcon } from "lucide-react";
import aiChipImage from "@/assets/ai-chip.jpg";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClass: string;
}

const TechCard = ({ icon: Icon, title, description, gradientClass }: TechCardProps) => {
  return (
    <div className="dark-card">
      <div className={`icon-container ${gradientClass} mb-6`}>
        <Icon className="w-6 h-6" />
      </div>
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
    <section className="section-dark py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Données et technologies émergentes
          </h2>
          <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg">
            Les technologies de pointe reposent toutes sur un socle commun : les données
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
              gradientClass={tech.gradientClass}
            />
          ))}
        </div>

        {/* AI Chip Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={aiChipImage} 
            alt="Puce IA sur circuit imprimé" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
