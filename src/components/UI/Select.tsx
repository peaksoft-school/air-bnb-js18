import { useState } from "react";

type FilteredProps = {
  options: string[],
  text: string,
};

const Filtered = ({ options, text }: FilteredProps) => {
  const [selected, setSelected] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[271px]">
      <div
        className={`
    py-3 px-4 border border-gray-300 rounded cursor-pointer
    flex items-center justify-between transition
    ${isOpen ? "bg-gray-100" : "bg-white"}
    hover:bg-gray-100
  `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#828282]">{text}</span>
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
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filtered;
