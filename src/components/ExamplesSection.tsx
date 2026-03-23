import { ShoppingCart, Users, CreditCard, Activity, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

interface ExampleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ExampleCard = ({ icon: Icon, title, description }: ExampleCardProps) => {
  return (
    <div className="example-card flex items-start gap-4">
      <motion.div 
        className="icon-container icon-blue flex-shrink-0"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <div>
        <h3 className="font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const examples = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Les places de marché agrègent historiques d'achat, paniers abandonnés et avis pour proposer des recommandations, des promotions ciblées et une gestion des stocks en quasi temps réel. La donnée structure aussi la logistique du dernier kilomètre.",
  },
  {
    icon: Users,
    title: "Réseaux sociaux",
    description:
      "Les contenus consommés, le temps passé et le graphe social nourrissent des modèles de recommandation et de publicité. Le ciblage repose sur des profils d'intérêt, avec des débats récurrents sur la transparence, la modération et la protection des mineurs.",
  },
  {
    icon: CreditCard,
    title: "Fintech & banque",
    description:
      "Paiement, scoring de crédit et détection de fraude s'appuient sur des transactions, des signaux comportementaux et des listes de risque. Les régulateurs exigent traçabilité et explicabilité croissantes des modèles d'aide à la décision.",
  },
  {
    icon: Activity,
    title: "Santé & industrie",
    description:
      "Imagerie médicale, suivi de cohortes, maintenance d'usine : capteurs et dossiers patients alimentent recherche et efficacité opérationnelle, sous contrainte forte de confidentialité (données sensibles, hébergement, anonymisation).",
  },
];

const ExamplesSection = () => {
  return (
    <section className="section-light py-20 px-4 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Quels exemples dans l&apos;économie numérique ?
          </h2>
          <div className="text-muted-foreground text-center max-w-3xl mx-auto text-lg space-y-3">
            <p>
              Quels secteurs illustrent le mieux la donnée comme avantage concurrentiel ou risque
              réputationnel ? Voici quatre familles d&apos;usage, avec des logiques de collecte et
              de régulation différentes.
            </p>
          </div>
        </motion.div>

        {/* Example Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <AnimatedCard key={index} index={index}>
              <ExampleCard
                icon={example.icon}
                title={example.title}
                description={example.description}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
