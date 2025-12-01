import type { ReactNode } from "react";

type Variant = "default" | "hover" | "active";

interface VariantButtonProps {
  variant?: Variant;
  children: ReactNode;
  onClick?: () => void;
}

const ChipBtn = ({
  variant = "default",
  children,
  onClick,
}: VariantButtonProps) => {
  const base =
    "flex items-center gap-2 px-4 py-2 w-fit select-none transition-all duration-200 rounded-full";

  const styles: Record<Variant, string> = {
    default: "bg-[#f3f3f3] text-gray-400",
    hover: "bg-[#c4c4c4] text-white",
    active: "bg-[#a0a0a0] text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      <span className="text-lg">×</span>
      <span>{children}</span>
    </button>
  );
};

export const VariantButton = ({
  variant = "default",
  children,
  onClick,
}: VariantButtonProps) => {
  const base =
    "flex items-center gap-2 px-4 py-2 w-fit select-none transition-all duration-200";

  const styles: Record<Variant, string> = {
    default: "bg-[#f3f3f3] text-gray-400",
    hover: "bg-[#c4c4c4] text-white",
    active: "bg-[#a0a0a0] text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      <span className="text-lg">×</span>
      <span>{children}</span>
    </button>
  );
};

export default ChipBtn;
