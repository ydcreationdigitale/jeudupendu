const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-primary">
          Contact
        </h1>
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Adresse</h2>
            <p className="text-muted-foreground">Neufchâteau, Belgique</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Horaires</h2>
            <p className="text-muted-foreground">Lundi - Vendredi: 6h - 22h</p>
            <p className="text-muted-foreground">Samedi - Dimanche: 8h - 20h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
