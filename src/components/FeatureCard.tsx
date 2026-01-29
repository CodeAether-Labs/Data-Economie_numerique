import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColorClass?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  iconColorClass = "icon-blue"
}: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className={`icon-container ${iconColorClass} mb-6`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-card-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
