import { regions } from "@/utils/constants/user/regions";
import { useEffect, useRef, useState } from "react";

type RegionsDropdownProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const RegionDropdown = ({ onChange }: RegionsDropdownProps) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (region: { label: string; value: string }) => {
    setSelected(region.label);
    onChange?.(region.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-152.5">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-11 px-4 border border-gray-300 rounded cursor-pointer flex items-center justify-between bg-white hover:bg-gray-100"
      >
        <span className="text-[#363636]">{selected || "Select region"}</span>
        <span className="text-gray-500">⌵</span>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 w-152.5 max-h-64 bg-white border border-gray-300 rounded overflow-y-auto z-20">
          {regions.map((region) => (
            <li
              key={region.value}
              onClick={() => handleSelect(region)}
              className={`h-6.75 px-4 flex items-center cursor-pointer text-[#363636] hover:bg-[#F3F3F3] ${
                selected === region.label ? "bg-[#F3F3F3]" : ""
              }`}
            >
              {region.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
