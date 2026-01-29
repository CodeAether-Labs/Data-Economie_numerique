import { Zap, Lock, Home } from "lucide-react";

const ChallengesSection = () => {
  return (
    <section className="section-dark py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Challenge Banner */}
        <div className="challenge-banner text-center mb-16">
          <div className="flex justify-center mb-4">
            <Zap className="w-10 h-10 text-icon-yellow" />
          </div>
          <p className="text-xl md:text-2xl text-primary-foreground font-medium">
            <span className="text-icon-yellow">Sans données,</span>{" "}
            l'économie numérique ne peut ni fonctionner ni évoluer
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg 
              className="w-12 h-12 text-icon-yellow" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Enjeux et défis à notre ère
          </h2>
          <p className="text-primary-foreground/70 max-w-3xl mx-auto text-lg">
            L'économie numérique basée sur les données soulève des questions cruciales pour notre société
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="feature-card bg-card/90">
            <div className="icon-container bg-destructive/20 text-destructive mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-3">
              Protection de la vie privée
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La collecte massive de données personnelles soulève des préoccupations légitimes 
              concernant la confidentialité et le consentement des utilisateurs.
            </p>
          </div>

          <div className="feature-card bg-card/90">
            <div className="icon-container icon-blue mb-6">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-3">
              Souveraineté numérique
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Les États et les citoyens doivent préserver leur autonomie face aux géants 
              technologiques qui contrôlent les flux de données mondiaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
