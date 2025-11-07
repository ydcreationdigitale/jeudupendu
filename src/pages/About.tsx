const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-8 text-primary">
          À Propos
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Royal Thai Boxing est votre destination premium pour la boxe thaïlandaise,
            la musculation et le training fonctionnel à Paris.
          </p>
          <p className="text-lg text-muted-foreground">
            Notre club offre un environnement professionnel avec des équipements de
            pointe et des coachs expérimentés pour vous accompagner dans votre
            transformation physique et mentale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
