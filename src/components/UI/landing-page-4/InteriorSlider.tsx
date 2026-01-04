import { useState } from "react";
import leftArrow from "../../../assets/Icons/leftArrow.svg";
import rightArrow from "../../../assets/Icons/rightArrow.svg";

type InteriorSliderProps = {
  interiorImages: string[];
};

export const InteriorSlider = ({ interiorImages }: InteriorSliderProps) => {
  const [index, setIndex] = useState(0);

  const slideWidth = 224 + 20; // w-56 (224px) + gap-5 (20px)

  const prev = () => {
    setIndex((prev) => (prev === 0 ? interiorImages.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === interiorImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-84 overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${index * slideWidth}px)`,
          }}
        >
          {interiorImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-56 h-79.25 object-cover shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="w-56 flex items-center justify-between text-sm text-gray-500">
        <button onClick={prev}>
          <img src={leftArrow} alt="left" className="w-[59.14px] h-5.75" />
        </button>

        <span className="tracking-widest">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(interiorImages.length).padStart(2, "0")}
        </span>

        <button onClick={next}>
          <img src={rightArrow} alt="right" className="w-[59.14px] h-5.75" />
        </button>
      </div>
    </div>
  );
};
