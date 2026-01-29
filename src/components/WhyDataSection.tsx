import { Globe, Smartphone, Building2, Zap } from "lucide-react";
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
    <section className="section-light py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi les données sont essentielles aujourd'hui
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            À notre ère, plusieurs facteurs contribuent à l'importance cruciale des données 
            dans l'économie numérique
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColorClass={feature.iconColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDataSection;
