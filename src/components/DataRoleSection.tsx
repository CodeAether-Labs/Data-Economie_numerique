import { DollarSign, Settings, Sparkles, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import FeatureCard from "./FeatureCard";

const roles = [
  {
    icon: DollarSign,
    title: "Création de valeur économique",
    description: "Les données génèrent de nouvelles opportunités business et sources de revenus",
    iconColorClass: "icon-blue"
  },
  {
    icon: Settings,
    title: "Optimisation des services",
    description: "Amélioration continue des processus et de l'efficacité opérationnelle",
    iconColorClass: "icon-blue"
  },
  {
    icon: Sparkles,
    title: "Personnalisation des produits",
    description: "Offres sur mesure adaptées aux besoins spécifiques de chaque client",
    iconColorClass: "icon-blue"
  },
  {
    icon: Lightbulb,
    title: "Innovation technologique",
    description: "Moteur de développement de nouveaux produits et services",
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
            Rôle des données dans l'économie numérique
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Les données jouent un rôle multidimensionnel dans la transformation de l'économie moderne
          </p>
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
