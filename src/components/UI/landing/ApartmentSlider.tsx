import React, { useState } from "react";
import type { ApartmentData } from "./Apartment";

interface Props {
  data: ApartmentData[];
}

const ApartmentSlider: React.FC<Props> = ({ data }) => {
  const [index, setIndex] = useState(0);
  const item = data[index];

  const next = () =>
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <div className="flex w-[1440px] h-[880px] gap-10 text-white">
      <div className="w-[525px] h-[456px] bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
        <span className="text-white/30 tracking-widest uppercase"></span>
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        <div className="w-[251px] h-[22px] flex flex-col justify-center items-center pt-50">
          <h3 className="text-1xl font-bold mb-4 pr-7">{item.title}</h3>
          <p className="text-sm opacity-80 mb-6 leading-relaxed">
            {item.description}
          </p>
          <p className="text-xs opacity-60 mb-6 text-[#97C69E] tracking-wider">
         {item.location}
          </p>
          <div className="pr-40">
            <h1 className=" text-[#FFBE58] border-b border-[#FFBE58] text-1xl pb-1  tracking-tighter">
              Read more
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-end justify-end gap-6  ">
          {/* Галерея: Белые блоки */}
          <div className="flex gap-4">
            <div className="w-[224px] h-[317px] bg-white/20 border border-white/10" />
            <div className="w-[224px] h-[317px] bg-white/20 border border-white/10" />
          </div>

          {/* Навигация */}
          <div className="flex items-center gap-8 mb-2">
            <button
              onClick={prev}
              className="text-3xl hover:opacity-50 transition-opacity"
            >
              ←
            </button>
            <span className="font-mono text-lg">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(data.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              className="text-3xl hover:opacity-50 transition-opacity"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentSlider;


       