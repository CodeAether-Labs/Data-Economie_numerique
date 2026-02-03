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
    description: "Les données ont fondamentalement transformé notre économie, notre travail et notre société"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation continue",
    description: "L'innovation technologique est désormais intrinsèquement liée à notre capacité à exploiter les données"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Responsabilité collective",
    description: "Nous avons tous un rôle à jouer pour garantir une utilisation éthique et équitable des données"
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
            Conclusion
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
          
          <motion.p 
            className="text-primary-foreground/70 max-w-4xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nous vivons une révolution comparable à la révolution industrielle du XIXe siècle. 
            Les données sont le nouveau pétrole, l'IA le nouveau moteur à vapeur, et ceux qui 
            maîtriseront ces technologies façonneront le monde de demain.
          </motion.p>
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
