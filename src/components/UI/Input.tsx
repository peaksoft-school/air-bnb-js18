import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "border-gray-300 text-gray-600",

        hover: `
          border-gray-300 text-gray-600
          hover:border-gray-500
        `,

        active: `
          border-gray-300 text-gray-600
          focus:border-black
        `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export function Input({ variant, className, ...props }: InputProps) {
  return (
    <input className={cn(inputVariants({ variant }), className)} {...props} />
  );
}
