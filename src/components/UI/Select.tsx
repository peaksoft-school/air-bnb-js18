import { useState, forwardRef } from "react";

type Option = { value: string; label: string };

type SelectProps = {
  options: Option[];
  label: string;
  onChange?: (value: string) => void;
};

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ options, label, onChange }, ref) => {
    const [selected, setSelected] = useState("All");
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (value: string, label: string) => {
      setSelected(label);
      if (onChange) onChange(value);
      setIsOpen(false);
    };

    return (
      <div ref={ref} className="relative w-[271px]">
        <div
          className={`
            py-3 px-4 border border-gray-300 rounded cursor-pointer
            flex items-center justify-between transition
            ${isOpen ? "bg-gray-100" : "bg-white"}
            hover:bg-gray-100
          `}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-[#828282]">{label}</span>
          <div className="flex items-center gap-3">
            <span className="text-[#363636]">{selected}</span>
            <span className="text-gray-500">⌵</span>
          </div>
        </div>

        {isOpen && (
          <ul className="absolute w-full mt-1 border border-gray-300 rounded bg-white z-10">
            {options.map((item, i) => (
              <li
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                onClick={() => handleSelectChange(item.value, item.label)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
