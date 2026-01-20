import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { SearchIcon } from "lucide-react";

type InputProps = {
  icon?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, disabled, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#C4C4C4]">
            <SearchIcon size={18} />
          </span>
        )}

        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            "h-9 w-full rounded-md border px-3 text-base text-black",
            "placeholder:text-[#C4C4C4]",
            "border-[rgba(196,196,196,1)]",
            "transition-colors",
            "hover:border-[rgba(130,130,130,1)]",
            "focus:border-[rgba(130,130,130,1)] focus:outline-none focus:ring-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-9",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
