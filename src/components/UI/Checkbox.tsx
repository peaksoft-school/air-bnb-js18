import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
} & Omit<
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "checked" | "onCheckedChange" | "disabled"
>;

export const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ checked, onChange, disabled, className, ...rest }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      id={rest.id}
      data-slot="checkbox"
      checked={checked}
      onCheckedChange={(value) => onChange?.(Boolean(value))}
      disabled={disabled}
      className={cn(
        "peer size-5 shrink-0 rounded-[1px] border border-[#C4C4C4] transition-all outline-none",
        "data-[state=checked]:bg-[#DD8A08] data-[state=checked]:border-[#DD8A08]",
        "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className,
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-white"
      >
        <CheckIcon className="size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = "Checkbox";
