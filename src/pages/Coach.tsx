import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const coaches = [
  {
    name: "Marc Dubois",
    title: "Coach Principal Muay Thai",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800",
    specialties: ["Muay Thai", "Kickboxing", "Conditionnement"],
    experience: "15 ans d'expérience",
    certifications: ["Champion National Muay Thai", "Certifié FFSCDA"],
    description: "Expert en arts martiaux thaïlandais avec plusieurs titres nationaux. Spécialiste de la technique et de la stratégie de combat."
  },
  {
    name: "Sophie Martin",
    title: "Coach Musculation & Fitness",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    specialties: ["Musculation", "Nutrition", "Coaching Personnalisé"],
    experience: "10 ans d'expérience",
    certifications: ["Diplôme d'État BPJEPS", "Nutritionniste Sportive"],
    description: "Passionnée par la transformation physique, elle accompagne chaque membre vers ses objectifs avec des programmes sur mesure."
  },
  {
    name: "Alex Chen",
    title: "Coach Training Fonctionnel",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    specialties: ["CrossFit", "HIIT", "Mobilité"],
    experience: "8 ans d'expérience",
    certifications: ["CrossFit Level 2", "Préparateur Physique"],
    description: "Spécialiste du training fonctionnel et de la préparation athlétique. Expert en développement de la puissance et de l'endurance."
  },
  {
    name: "Laura Benoit",
    title: "Coach Boxe & Cardio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800",
    specialties: ["Boxe Anglaise", "Cardio Boxing", "Défense"],
    experience: "12 ans d'expérience",
    certifications: ["Championne Régionale Boxe", "Certifiée FFA"],
    description: "Ancienne boxeuse professionnelle, elle transmet sa passion et son expertise technique avec énergie et précision."
  }
];

const Coach = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-primary">
          Nos Coachs
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Une équipe de professionnels passionnés et diplômés pour vous accompagner vers vos objectifs
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coaches.map((coach, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-5 gap-6 p-6">
                {/* Image */}
                <div className="md:col-span-2">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-primary">
                      {coach.name}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-3">
                      {coach.title}
                    </p>
                    
                    <p className="text-sm text-foreground/80 mb-4">
                      {coach.description}
                    </p>

                    <div className="mb-3">
                      <p className="text-sm font-semibold mb-2">Spécialités:</p>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Expérience:</span> {coach.experience}
                    </p>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Certifications:</p>
                      {coach.certifications.map((cert, idx) => (
                        <p key={idx} className="text-muted-foreground text-xs">
                          • {cert}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Réservez votre séance d'essai</h2>
          <p className="text-muted-foreground mb-6">
            Venez rencontrer nos coachs et découvrir nos installations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coach;
