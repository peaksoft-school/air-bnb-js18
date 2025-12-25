import { cn } from "../../lib/utils";
import { SearchIcon } from "lucide-react";
import { forwardRef } from "react";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  icon?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      value,
      onChange,
      disabled,
      icon,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon className="w-[22px] h-[22px] text-[#C4C4C4] pr-[10px]" />
          </span>
        )}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            "w-full h-9 px-3",
            "text-[16px] font-normal leading-[19px]",
            "text-[rgba(196,196,196,1)]",
            "border border-[rgba(196,196,196,1)] rounded-[2px]",
            "box-border",
            "hover:border-[rgba(130,130,130,1)]",
            "focus:border-[rgba(130,130,130,1)] focus:outline-none focus:ring-0",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            icon && "pl-9",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);
