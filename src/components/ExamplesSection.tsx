import { ShoppingCart, Users, CreditCard, LucideIcon } from "lucide-react";

interface ExampleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ExampleCard = ({ icon: Icon, title, description }: ExampleCardProps) => {
  return (
    <div className="example-card flex items-start gap-4">
      <div className="icon-container icon-blue flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
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
    description: "Amazon, Alibaba : recommandations personnalisées basées sur l'historique d'achat"
  },
  {
    icon: Users,
    title: "Réseaux sociaux",
    description: "Facebook, Instagram : ciblage publicitaire ultra-précis grâce aux données utilisateurs"
  },
  {
    icon: CreditCard,
    title: "Fintech",
    description: "PayPal, Stripe : détection de fraude et scoring de crédit en temps réel"
  }
];

const ExamplesSection = () => {
  return (
    <section className="section-light py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">📌</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Exemples concrets
            </h2>
          </div>
        </div>

        {/* Example Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              icon={example.icon}
              title={example.title}
              description={example.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
