import { useState, useCallback, useEffect } from "react";
import { FlowerPetal } from "@/components/ui/flower-petal";
import { GameButton } from "@/components/ui/game-button";
import { toast } from "@/components/ui/use-toast";

interface Letter {
  id: string;
  letter: string;
  isCenter: boolean;
}

const GAME_LETTERS: Letter[] = [
  { id: 'center', letter: 'A', isCenter: true },
  { id: 'petal-1', letter: 'R', isCenter: false },
  { id: 'petal-2', letter: 'Y', isCenter: false },
  { id: 'petal-3', letter: 'E', isCenter: false },
  { id: 'petal-4', letter: 'G', isCenter: false },
  { id: 'petal-5', letter: 'B', isCenter: false },
  { id: 'petal-6', letter: 'L', isCenter: false },
];

// Sample valid words for demo purposes
const VALID_WORDS = ['GRAY', 'LARGE', 'BEAR', 'YEAR', 'GEAR', 'BARGE', 'ABLE', 'RAGE', 'REAL', 'EARL'];

export const WordGame = () => {
  const [letters, setLetters] = useState<Letter[]>(GAME_LETTERS);
  const [selectedWord, setSelectedWord] = useState<string>('');
  const [foundWords, setFoundWords] = useState<string[]>([]);

  const handleLetterClick = useCallback((letterId: string) => {
    const letter = letters.find(l => l.id === letterId);
    if (letter) {
      setSelectedWord(prev => prev + letter.letter);
    }
  }, [letters]);

  const handleShuffle = useCallback(() => {
    setLetters(prev => {
      const center = prev.find(l => l.isCenter)!;
      const petals = prev.filter(l => !l.isCenter);
      const shuffledPetals = [...petals].sort(() => Math.random() - 0.5);
      return [center, ...shuffledPetals];
    });
    toast({
      description: "Letters shuffled!",
    });
  }, []);

  const handleDelete = useCallback(() => {
    setSelectedWord(prev => prev.slice(0, -1));
  }, []);

  const handleEnter = useCallback(() => {
    if (selectedWord.length < 3) {
      toast({
        description: "Words must be at least 3 letters long",
        variant: "destructive",
      });
      return;
    }

    if (!selectedWord.includes('A')) {
      toast({
        description: "Words must contain the center letter 'A'",
        variant: "destructive",
      });
      return;
    }

    if (foundWords.includes(selectedWord)) {
      toast({
        description: "You already found that word!",
        variant: "destructive",
      });
      return;
    }

    if (VALID_WORDS.includes(selectedWord)) {
      setFoundWords(prev => [...prev, selectedWord]);
      setSelectedWord('');
      toast({
        description: `Great! You found "${selectedWord}"`,
      });
    } else {
      toast({
        description: "Not a valid word",
        variant: "destructive",
      });
    }
  }, [selectedWord, foundWords]);

  // Position letters in flower pattern
  const getLetterPosition = (index: number, isCenter: boolean) => {
    if (isCenter) {
      return "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10";
    }
    
    const angle = (index * 60) - 90; // Start from top and go clockwise
    const radius = 70;
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    
    return `absolute transform -translate-x-1/2 -translate-y-1/2 z-0`;
  };

  const getLetterStyle = (index: number, isCenter: boolean) => {
    if (isCenter) return {};
    
    const angle = (index * 60) - 90;
    const radius = 70;
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`
    };
  };

  return (
    <div className="min-h-screen bg-gradient-main flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-light text-muted-foreground mb-2">
            Type or click
          </h1>
        </div>

        {/* Current word display */}
        <div className="text-center">
          <div className="min-h-[3rem] bg-card/50 backdrop-blur-sm rounded-xl border border-border shadow-soft flex items-center justify-center px-4">
            <span className="text-2xl font-semibold text-foreground tracking-wider">
              {selectedWord || ""}
            </span>
          </div>
        </div>

        {/* Flower letter layout */}
        <div className="relative w-64 h-64 mx-auto">
          {letters.map((letter, index) => {
            const adjustedIndex = letter.isCenter ? 0 : index - 1;
            return (
              <div
                key={letter.id}
                className={getLetterPosition(adjustedIndex, letter.isCenter)}
                style={getLetterStyle(adjustedIndex, letter.isCenter)}
              >
                <FlowerPetal
                  letter={letter.letter}
                  isSelected={false}
                  isCenter={letter.isCenter}
                  onClick={() => handleLetterClick(letter.id)}
                />
              </div>
            );
          })}
        </div>

        {/* Control buttons */}
        <div className="flex justify-between gap-4">
          <GameButton variant="shuffle" onClick={handleShuffle}>
            SHUFFLE
          </GameButton>
          <GameButton variant="delete" onClick={handleDelete}>
            DELETE
          </GameButton>
        </div>

        {/* Enter button */}
        <GameButton variant="enter" onClick={handleEnter}>
          ENTER
        </GameButton>

        {/* Found words */}
        {foundWords.length > 0 && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Words Found ({foundWords.length})
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {foundWords.map((word, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-card/70 backdrop-blur-sm rounded-full border border-border text-sm font-medium text-foreground shadow-petal"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};