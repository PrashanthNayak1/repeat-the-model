import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FlowerPetalProps {
  letter: string;
  isSelected: boolean;
  isCenter?: boolean;
  onClick: () => void;
  className?: string;
}

export const FlowerPetal = ({ 
  letter, 
  isSelected, 
  isCenter = false, 
  onClick, 
  className 
}: FlowerPetalProps) => {
  if (isCenter) {
    return (
      <Button
        onClick={onClick}
        className={cn(
          "w-16 h-16 rounded-full shadow-soft transition-all duration-200",
          "bg-flower-center hover:bg-flower-center-hover",
          "text-flower-accent font-bold text-xl",
          "hover:scale-105 active:scale-95",
          isSelected && "ring-2 ring-flower-accent ring-offset-2 bg-flower-center-hover",
          className
        )}
        variant="ghost"
      >
        {letter}
      </Button>
    );
  }

  return (
    <div className="relative">
      {/* Petal shape - rounded organic petal */}
      <div className={cn(
        "w-20 h-24 relative cursor-pointer transition-all duration-200",
        "before:content-[''] before:absolute before:inset-0",
        "before:bg-petal-base before:border before:border-petal-border",
        "before:rounded-[50%_50%_50%_50%/60%_60%_40%_40%]", // Organic petal shape
        "before:shadow-petal before:transition-all before:duration-200",
        "hover:before:bg-petal-hover hover:before:shadow-soft hover:scale-105",
        "active:scale-95 active:before:bg-petal-active",
        isSelected && "before:ring-2 before:ring-primary before:ring-offset-2 before:bg-petal-active scale-105",
        "animate-petal-float",
        className
      )}
      onClick={onClick}
      >
        {/* Letter content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <span className="text-foreground font-semibold text-lg">
            {letter}
          </span>
        </div>
      </div>
    </div>
  );
};