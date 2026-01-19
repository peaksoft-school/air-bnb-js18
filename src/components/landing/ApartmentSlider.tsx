import { useState } from "react";
import {
  LeftArrowIcon,
  LeftBlackArrowIcon,
  LocationIcon,
  RightArrowIcon,
  RightBlackArrowIcon,
} from "@/assets/icons";
import type { PopularApartmentsData } from "@/utils/constants/landing";

interface Props {
  data: PopularApartmentsData[];
  variant?: string;
}

export const ApartmentSlider = ({ data, variant }: Props) => {
  if (!data.length) return null;

  const apartment = data[0];
  const images: string[] = apartment.images || [];

  if (!images.length) return null;

  const [imageIndex, setImageIndex] = useState(0);

  const next = () =>
    setImageIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));

  const prev = () =>
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const color = variant === "popular-apartments" ? "text-white" : "text-black";

  return (
    <div className={`flex w-full gap-10 ${color} justify-between`}>
      <div className="flex gap-10">
        <img
          src={apartment.images?.[0]}
          alt={apartment.title}
          className="w-131.25 h-114 object-cover"
        />

        <div className="flex flex-col justify-center max-w-md">
          <h3 className="text-xl mb-4">{apartment.title}</h3>
          <p className="text-sm opacity-80 mb-4 ${color}">
            {apartment.description}
          </p>
          <p className="text-xs text-[#97C69E] mb-6 flex gap-1 items-end">
            <img src={LocationIcon} alt="location" /> {apartment.location}
          </p>

          <span className="text-[#FFBE58] border-b border-[#FFBE58] w-fit cursor-pointer">
            Read more
          </span>
        </div>
      </div>

      <div className="w-118 overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${imageIndex * 224}px)`,
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-56 h-79.25 object-cover shrink-0 mx-2"
            />
          ))}
        </div>

        <div className="flex items-center gap-8 mt-20 justify-start">
          <button
            onClick={prev}
            className="text-3xl hover:opacity-50 transition cursor-pointer"
          >
            {variant === "popular-apartments" ? (
              <img src={LeftArrowIcon} alt="left-arrow" />
            ) : (
              <img src={LeftBlackArrowIcon} alt="left-arrow" />
            )}
          </button>

          <span className="font-mono text-lg">
            {String(imageIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>

          <button
            onClick={next}
            className="text-3xl hover:opacity-50 transition cursor-pointer"
          >
            {variant === "popular-apartments" ? (
              <img src={RightArrowIcon} alt="right-arrow" />
            ) : (
              <img src={RightBlackArrowIcon} alt="right-arrow" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
