import { cn } from "../../../lib/utils";
import { Star, Heart, MoreHorizontal, MapPin } from "lucide-react";
import { Button } from "../Button";
import { ImageSlider } from "./ImageSlider";
import type { CardData, CardVariant } from "./types";

type CardProps = {
  data: CardData;
  variant?: CardVariant;
  className?: string;
};

const variantClasses: Record<CardVariant, string> = {
  default:
    "hover:bg-white hover:shadow-md min-w-[16rem] max-w-[18.5rem] min-h-[21rem]",

  admin:
    "hover:border-red-500 hover:shadow-[0_0_0_3px_rgba(255,0,0,0.6)] min-w-[12rem] max-w-[13.5rem] min-h-[15rem]",

  profile: "min-w-[16rem] min-h-[25rem]",
};

export const Card = ({ data, variant = "default", className }: CardProps) => {
  const { images, price, rating, title, address, guests, checkIn, checkOut } =
    data;

  return (
    <div
      className={cn(
        "group cursor-pointer overflow-hidden rounded-lg border bg-[#F7F7F7] transition-all",
        variantClasses[variant],
        className
      )}
    >
      <ImageSlider images={images} />

      <div className="p-3">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[1.1rem] font-normal text-black">
            ${price}
            <span className="ml-1 text-[1rem] text-[#6C6C6C]">/ day</span>
          </span>

          <div className="flex items-center gap-1 rounded-[2px] bg-[#828282] px-[11px] py-1">
            <Star size={14} className="text-[#F7D212]" fill="#F7D212" />
            <span className="text-sm text-white">{rating}</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="line-clamp-2 text-[1rem] font-normal leading-snug text-[#2B2B2B]">
            {title}
          </p>

          <p className="flex items-center gap-1 text-[0.9rem] text-[#828282]">
            <MapPin className="h-4 w-4 text-[#C4C4C4]" />
            {address}
          </p>
        </div>

        {variant === "profile" && (
          <>
            <p className="py-3.5 text-[0.9rem] text-[#828282]">
              {guests} guests
            </p>

            <div className="flex justify-between text-[0.9rem] text-[#828282]">
              <div>
                <p className="text-[#646464]">Check in</p>
                <p className="font-normal text-[#363636]">{checkIn}</p>
              </div>
              <div>
                <p className="text-[#646464]">Check out</p>
                <p className="font-normal text-[#363636]">{checkOut}</p>
              </div>
            </div>
            <Button className="mt-3 h-[37px] w-full">CHANGE</Button>
          </>
        )}

        {variant !== "profile" && (
          <div className="mt-2 flex items-center justify-between">
            <p className="max-w-[210px] text-[0.9rem] text-[#939393]">
              {guests} guests
            </p>

            {variant === "default" && (
              <div className="flex items-center gap-2">
                <Button size="sm">BOOK</Button>

                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-8.75 w-8.75 items-center justify-center rounded-[2px] border border-transparent text-[#DD8A08] transition group-hover:border-[#DD8A08] group-hover:bg-white"
                >
                  <Heart size={18} />
                </button>
              </div>
            )}

            {variant === "admin" && (
              <button className="rounded-md p-2 text-gray-600 hover:bg-gray-200">
                <MoreHorizontal size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
