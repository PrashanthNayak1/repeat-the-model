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
    <Button
      onClick={onClick}
      className={cn(
        "w-14 h-14 rounded-full shadow-petal transition-all duration-200",
        "bg-petal-base border border-petal-border",
        "hover:bg-petal-hover hover:scale-105 hover:shadow-soft",
        "active:scale-95 active:bg-petal-active",
        "text-foreground font-semibold text-lg",
        "animate-petal-float",
        isSelected && "ring-2 ring-primary ring-offset-2 bg-petal-active scale-105",
        className
      )}
      variant="ghost"
    >
      {letter}
    </Button>
  );
};