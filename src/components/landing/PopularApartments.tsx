import ApartmentSlider from "./ApartmentSlider";
import { POPULAR_APARTMENTS_DATA } from "@/utils/constants/landing";

interface PopularApartmentsProps {
  variant?: string;
}

export const PopularApartments = ({ variant }: PopularApartmentsProps) => {
  const bgColor =
    variant === "popular-apartments" ? "bg-[#4f7755]" : "bg-[#f8f8f8]";
  const color = variant === "popular-apartments" ? "text-white" : "text-black";

  return (
    <div
      className={`${bgColor} flex items-center justify-center font-sans pl-25 py-42.5 my-42.5`}
    >
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center mb-12 text-white uppercase">
          <h2 className={`text-xl mb-4 ${color}`}>
            {variant === "popular-apartments"
              ? "Popular Apartments"
              : "The lastest"}
          </h2>

          <button
            className={`border-b ${
              variant === "popular-apartments"
                ? "border-[#FFBE58] text-[#FFBE58]"
                : "border-black text-black"
            } pb-1 opacity-80 hover:opacity-100 transition-opacity mr-25  cursor-pointer`}
          >
            View all
          </button>
        </div>

        <ApartmentSlider data={POPULAR_APARTMENTS_DATA} variant={variant} />
      </div>
    </div>
  );
};
