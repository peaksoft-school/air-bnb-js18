import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer box-border transition-all disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        /** Оранжевая основная */
        default:
          "bg-[rgba(221,138,8,1)] text-white rounded-[2px] " +
          "hover:bg-[rgba(187,114,0,1)] " +
          "active:bg-[rgba(242,183,91,1)]",

        /** Google / outline */
        google:
          "bg-white text-black rounded-[8px] " +
          "border border-[rgba(196,196,196,1)] " +
          "hover:border-[rgba(130,130,130,1)] " +
          "active:bg-[rgba(196,196,196,0.2)] active:border-[rgba(130,130,130,1)]",
        /** Обычная outline */
        outline:
          "bg-transparent text-[rgba(130,130,130,1)] rounded-[1px] " +
          "border border-[rgba(125,125,125,1)] " +
          "hover:border-[1.5px] hover:border-[rgba(54,54,54,1)] " +
          "active:bg-[rgba(221,138,8,1)] active:text-white active:border-0",
      },

      size: {
        default: "h-9 px-8",
        sm: "h-8 px-4 text-sm",
        lg: "h-10 px-10 text-base",
        icon: "h-9 w-9 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = {
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      type = "submit",
      disabled,
      onClick,
      icon,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size }), className)}
        {...rest}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
