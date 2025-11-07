import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Heart, Trophy, RotateCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CATEGORIES = {
  animals: ["ELEPHANT", "GIRAFFE", "PENGUIN", "DOLPHIN", "BUTTERFLY", "KANGAROO"],
  countries: ["FRANCE", "JAPAN", "BRAZIL", "CANADA", "AUSTRALIA", "EGYPT"],
  movies: ["AVATAR", "TITANIC", "INCEPTION", "GLADIATOR", "INTERSTELLAR"],
  tech: ["JAVASCRIPT", "COMPUTER", "INTERNET", "KEYBOARD", "SOFTWARE", "ALGORITHM"],
};

type Category = keyof typeof CATEGORIES;

const ASTRONAUT_PARTS = [
  "🚀 Fusée",
  "🪐 Planète",
  "⭐ Étoile",
  "🌙 Lune",
  "☄️ Comète",
  "🛸 Vaisseau",
];

export const HangmanGame = () => {
  const [category, setCategory] = useState<Category>("animals");
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [isAnimating, setIsAnimating] = useState(false);

  const maxWrongGuesses = 6;

  useEffect(() => {
    startNewGame(category);
  }, []);

  const startNewGame = (selectedCategory: Category) => {
    const words = CATEGORIES[selectedCategory];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setGameState("playing");
    setCategory(selectedCategory);
    setIsAnimating(false);
  };

  const handleGuess = (letter: string) => {
    if (gameState !== "playing" || guessedLetters.has(letter)) return;

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameState("lost");
        toast({
          title: "💫 Perdu !",
          description: `Le mot était : ${word}`,
          variant: "destructive",
        });
      }
    } else {
      // Check if won
      const isWon = word.split("").every(l => newGuessedLetters.has(l));
      if (isWon) {
        const points = (maxWrongGuesses - wrongGuesses) * 10;
        setScore(score + points);
        setGameState("won");
        toast({
          title: "🎉 Bravo !",
          description: `+${points} points !`,
        });
      }
    }
  };

  const displayWord = word.split("").map(letter => 
    guessedLetters.has(letter) ? letter : "_"
  ).join(" ");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const getLostParts = () => {
    return ASTRONAUT_PARTS.slice(0, wrongGuesses);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full animate-glow"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full space-y-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-2 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-10 h-10 text-primary animate-float" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Pendu Spatial
            </h1>
            <Rocket className="w-10 h-10 text-accent animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-muted-foreground text-lg">Sauve l'astronaute dans l'espace !</p>
        </div>

        {/* Score and Lives */}
        <div className="flex justify-between items-center gap-4">
          <Card className="flex items-center gap-2 p-3 bg-card/50 backdrop-blur border-primary/20">
            <Trophy className="w-5 h-5 text-secondary" />
            <span className="font-bold text-lg">{score} pts</span>
          </Card>
          
          <div className="flex gap-1">
            {[...Array(maxWrongGuesses)].map((_, i) => (
              <Heart
                key={i}
                className={`w-6 h-6 transition-all ${
                  i < maxWrongGuesses - wrongGuesses
                    ? "text-destructive fill-destructive animate-pulse"
                    : "text-muted opacity-30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {Object.keys(CATEGORIES).map((cat) => (
            <Button
              key={cat}
              onClick={() => startNewGame(cat as Category)}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              className={category === cat ? "bg-gradient-to-r from-primary to-accent" : ""}
            >
              {cat.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Game Board */}
        <Card className="p-8 space-y-6 bg-card/80 backdrop-blur border-primary/20 shadow-lg">
          {/* Astronaut Status */}
          <div className="text-center space-y-4">
            <div className="text-6xl animate-float">
              {gameState === "won" ? "🎉" : gameState === "lost" ? "💫" : "👨‍🚀"}
            </div>
            
            {wrongGuesses > 0 && (
              <div className="flex flex-wrap gap-2 justify-center animate-bounce-in">
                {getLostParts().map((part, i) => (
                  <Badge key={i} variant="destructive" className="text-lg animate-scale-in">
                    {part}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Word Display */}
          <div className="text-center">
            <div className={`text-4xl md:text-5xl font-bold tracking-wider ${isAnimating ? "animate-bounce-in" : ""}`}>
              {displayWord}
            </div>
            <Badge variant="outline" className="mt-4">
              {category.toUpperCase()}
            </Badge>
          </div>

          {/* Keyboard */}
          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => {
              const isGuessed = guessedLetters.has(letter);
              const isCorrect = isGuessed && word.includes(letter);
              const isWrong = isGuessed && !word.includes(letter);

              return (
                <Button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={gameState !== "playing" || isGuessed}
                  className={`w-10 h-10 md:w-12 md:h-12 font-bold transition-all ${
                    isCorrect
                      ? "bg-primary text-primary-foreground animate-bounce-in"
                      : isWrong
                      ? "bg-destructive text-destructive-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {letter}
                </Button>
              );
            })}
          </div>

          {/* Game Over Actions */}
          {gameState !== "playing" && (
            <div className="text-center space-y-4 animate-scale-in">
              {gameState === "won" && (
                <p className="text-2xl font-bold text-primary">
                  🎊 Fantastique ! L'astronaute est sauvé ! 🎊
                </p>
              )}
              {gameState === "lost" && (
                <p className="text-2xl font-bold text-destructive">
                  💫 L'astronaute est perdu dans l'espace ! 💫
                </p>
              )}
              <Button
                onClick={() => startNewGame(category)}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Nouvelle Partie
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
