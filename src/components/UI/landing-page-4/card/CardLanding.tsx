import type { CardDataLanding } from "./types";
import mapPin from "../../../../assets/Icons/mapPin.svg";
import { Star } from "lucide-react";

export const CardLanding = ({ data }: { data: CardDataLanding }) => {
  const { images, price, rating, title, address } = data;

  return (
    <div className="w-100 font-Inter">
      <div className="relative h-121 w-full">
        <img
          src={images}
          alt="guest house"
          className="h-full w-full object-cover"
        />

        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-[0.125rem] bg-[#34343480] py-1.25 px-2.75">
          <Star size={14} className="text-[#F7D212]" fill="#F7D212" />
          <span className="text-sm text-white">{rating}</span>
        </div>
      </div>

      <div className="flex flex-col pt-2.5 h-24.5">
        <div className="space-y-2.5">
          <p className="text-[18px] font-medium text-[#363636]">{title}</p>

          <p className="flex items-center gap-1 text-[14px] text-[#757575]">
            <img src={mapPin} alt="map pin" className="h-3 w-4" />
            {address}
          </p>
        </div>

        <span className="mt-4 text-[1rem] font-normal text-[#363636]">
          ${price}
          <span className="ml-1 text-[1rem] text-[#757575]">/ day</span>
        </span>
      </div>
    </div>
  );
};
