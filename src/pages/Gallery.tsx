import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000",
      title: "Entraînement de Boxe Thaï"
    },
    {
      url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000",
      title: "Techniques de Combat"
    },
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000",
      title: "Zone Musculation"
    },
    {
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000",
      title: "Cours Collectifs"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000",
      title: "Salle d'Entraînement"
    },
    {
      url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000",
      title: "Coaching Personnel"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-primary">
          Galerie
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Découvrez notre club et nos installations
        </p>

        {/* Main Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-2 border-primary/20">
                    <div className="relative aspect-video">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-foreground">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Grid Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-xl font-bold text-foreground">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
