import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Chip = ({ children, className, ...props }: ChipButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "flex w-fit select-none items-center gap-2 px-4 py-2",
        "transition-all duration-200",
        "bg-[#f3f3f3] text-gray-400",
        "hover:bg-[#c4c4c4] hover:text-white",
        "active:bg-[#a0a0a0] active:text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <span className="text-lg leading-none">×</span>

      <span>{children}</span>
    </button>
  );
};
