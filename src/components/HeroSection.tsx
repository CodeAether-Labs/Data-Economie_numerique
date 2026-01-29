import { Database } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Database Icon */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
            <Database className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-primary-foreground">Les Données au Cœur de</span>
          <br />
          <span className="text-gradient">l'Économie Numérique</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Dans un monde de plus en plus connecté, les données sont devenues un pilier 
          fondamental de l'économie numérique. Elles transforment la manière dont les 
          entreprises innovent, dont les États gouvernent et dont les citoyens interagissent 
          avec les services numériques.
        </p>

        {/* Value proposition */}
        <div 
          className="flex items-center justify-center gap-3 text-primary animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
            />
          </svg>
          <span className="text-lg font-medium">Source de valeur et d'innovation</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
