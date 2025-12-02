import type { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
}

const ChipBtn = ({ children, onClick }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2 px-4 py-2 w-fit select-none
        transition-all duration-200
        bg-[#f3f3f3] text-gray-400
        hover:bg-[#c4c4c4] hover:text-white
        active:bg-[#a0a0a0] active:text-white
      "
    >
      <span className="text-lg">×</span>
      <span>{children}</span>
    </button>
  );
};

export const VariantButton = ({ children, onClick }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2 px-4 py-2 w-fit select-none
        transition-all duration-200
        bg-[#f3f3f3] text-gray-400
        hover:bg-[#c4c4c4] hover:text-white
        active:bg-[#a0a0a0] active:text-white
      "
    >
      <span className="text-lg">×</span>
      <span>{children}</span>
    </button>
  );
};

export default ChipBtn;
