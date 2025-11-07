import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black text-primary mb-6 tracking-tight">
            ROYAL THAI
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            MUSCULATION
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            15 Rue du Champion, 75018 Paris
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Rejoindre le Club
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link to="/gallery">Voir la Galerie</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Disciplines</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Boxe Thaïlandaise",
                description: "Art martial ancestral combinant poings, pieds, coudes et genoux",
                image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800"
              },
              {
                title: "Musculation",
                description: "Programme personnalisé pour développer force et masse musculaire",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
              },
              {
                title: "Training Fonctionnel",
                description: "Entraînement complet pour améliorer condition physique et endurance",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{service.title}</h3>
                  <p className="text-foreground/90">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez-nous et transformez votre corps et votre esprit
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Essai Gratuit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
