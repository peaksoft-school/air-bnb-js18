import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { X } from "lucide-react";

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onRemove?: () => void;
}

export const Chip = ({
  children,
  className,
  onRemove,
  ...props
}: ChipButtonProps) => {
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
        className,
      )}
    >
      {onRemove && (
        <button
          onClick={onRemove}
          className="hover:bg-gray-300 rounded-full p-0.5 transition"
        >
          <X size={14} />
        </button>
      )}

      <span>{children}</span>
    </button>
  );
};
