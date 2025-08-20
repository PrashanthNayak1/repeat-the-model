import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GameButtonProps {
  variant: 'shuffle' | 'delete' | 'enter';
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const GameButton = ({ 
  variant, 
  children, 
  onClick, 
  className,
  disabled = false 
}: GameButtonProps) => {
  const variantStyles = {
    shuffle: "bg-game-shuffle hover:bg-game-shuffle/90 text-white",
    delete: "bg-game-delete hover:bg-game-delete/90 text-white", 
    enter: "bg-game-enter hover:bg-game-enter/90 text-white w-full"
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-semibold tracking-wide shadow-button transition-all duration-200",
        "hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        "rounded-xl px-6 py-3",
        variantStyles[variant],
        className
      )}
      variant="ghost"
    >
      {children}
    </Button>
  );
};