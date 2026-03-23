import { BookOpen, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";

interface ConclusionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ConclusionCard = ({ icon, title, description }: ConclusionCardProps) => {
  return (
    <div className="dark-card">
      <div className="icon-container icon-blue mb-6">
        {icon}
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

const conclusions = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Transformation profonde",
    description:
      "Les modèles économiques, les chaînes de valeur et même les politiques publiques s'appuient sur des indicateurs et des expérimentations numériques. Comprendre la donnée, c'est mieux comprendre les arbitrages contemporains.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation et dépendances",
    description:
      "L'innovation (IA, IoT, jumeaux numériques) est conditionnée par l'accès à des données de qualité et par des infrastructures fiables. La dépendance aux fournisseurs, à l'énergie et aux talents devient un critère de risque au même titre que la dette financière.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Responsabilité collective",
    description:
      "Citoyens, entreprises et institutions partagent l'enjeu : transparence des algorithmes, consentement éclairé, formation continue et régulation adaptée. La « société de la donnée » ne sera durable que si elle reste légitime aux yeux du public.",
  }
];

const ConclusionSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            En synthèse
          </h2>
          
          <motion.p 
            className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            À notre ère, la maîtrise des données est un{" "}
            <span className="text-gradient">enjeu stratégique majeur</span>
            {" "}pour le développement économique et social dans l'économie numérique.
          </motion.p>
          
          <motion.div 
            className="text-primary-foreground/70 max-w-4xl mx-auto text-lg leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              On compare souvent la donnée au « pétrole » du XXI<sup>e</sup> siècle : métaphore utile
              pour rappeler la valeur économique, mais trompeuse si on oublie que la donnée se
              multiplie quand on la consomme et qu&apos;elle soulève des droits inaliénables (vie
              privée, dignité).
            </p>
            <p>
              L&apos;enjeu n&apos;est donc pas seulement technologique : il est politique et social.
              Maîtriser la donnée, ce n&apos;est pas accumuler des réservoirs opaques, c&apos;est
              construire des systèmes fiables, auditables et au service d&apos;objectifs collectifs
              clairement débattus.
            </p>
          </motion.div>
        </motion.div>

        {/* Conclusion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {conclusions.map((item, index) => (
            <AnimatedCard key={index} index={index}>
              <ConclusionCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
