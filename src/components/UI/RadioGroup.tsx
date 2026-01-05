import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type RadioProps = {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const Radio = ({
  options,
  value,
  defaultValue,
  onChange,
  className,
}: RadioProps) => {
  return (
    <RadioGroupPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      className={cn("grid gap-3", className)}
    >
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <RadioGroupPrimitive.Item
            value={option.value}
            disabled={option.disabled}
            className={cn(
              "shrink-0 size-[20.16px] rounded-full border border-[#C4C4C4] outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <span className="block h-[14px] w-[14px] rounded-full bg-[#DD8A08]" />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>

          <span>{option.label}</span>
        </label>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export { Radio };
