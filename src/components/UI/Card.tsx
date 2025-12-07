import * as React from "react";
import { cn } from "../../lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  MoreHorizontal,
  MapPin,
} from "lucide-react";
import { Button } from "./Button";

export default function Card({
  className,
  data,
  variant = "default",
}: {
  className?: string;
  data: {
    images: string[];
    price: number;
    rating: number;
    title: string;
    address: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  };
  variant?: "default" | "admin" | "profile";
}) {
  const [index, setIndex] = React.useState(0);
  const images = data?.images || [];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  const buttonSize =
    variant === "default"
      ? "w-[35px] h-[35px]"
      : variant === "profile"
      ? "w-[60px] h-[37px]"
      : "w-[28px] h-[28px]";

  return (
    <div className="flex flex-wrap gap-4">
      <div
        className={cn(
          "group overflow-hidden rounded-[4px] border bg-[#F7F7F7] transition-all cursor-pointer",

          variant === "default" &&
            "hover:bg-white hover:shadow-md min-w-[16rem] max-w-[18.5rem] min-h-[21rem]",

          variant === "admin" &&
            "hover:border-red-500 hover:shadow-[0_0_0_3px_rgba(255,0,0,0.6)] min-w-[12rem] max-w-[13.5rem] min-h-[15rem]",

          variant === "profile" &&
            "min-w-[15rem] max-w-[16.5rem] min-h-[25rem]",

          className
        )}
      >
        <div className="relative bg-gray-100 aspect-[4/3] w-full overflow-hidden">
          {images.length > 0 ? (
            <img
              src={images[index]}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400 text-sm">
              No images
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 p-1.5 rounded-full shadow flex hover:bg-[#DD8A08]"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 p-1.5 rounded-full shadow flex hover:bg-[#DD8A08]"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    index === i ? "bg-white" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-5 space-y-3 overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[1.1rem] font-[400]">
              ${data.price}
              <span className="text-gray-500 text-[1rem] font-[400]">
                {" "}
                / day
              </span>
            </span>

            <div className="flex items-center gap-1 bg-[#828282] px-3.5 py-0.5 rounded-[2px]">
              <Star
                size={14}
                className="text-[#F7D212]"
                style={{ fill: "#F7D212" }}
              />
              <span className="text-sm text-white">{data.rating}</span>
            </div>
          </div>

          <p className="font-[400] leading-snug text-[1.15rem] line-clamp-2">
            {data.title}
          </p>

          <p className="text-[0.90rem] text-[#828282] line-clamp-2 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[#C4C4C4]" />
            {data.address}
          </p>

          {variant === "profile" && (
            <div className="space-y-1 pt-2">
              <p className="text-[0.90rem] text-[#828282]">
                {data.guests} guests
              </p>
              <div className="flex justify-between text-[0.90rem] text-[#828282]">
                <div>
                  <p className="text-gray-500">Check in</p>
                  <p className="font-medium">{data.checkIn}</p>
                </div>
                <div>
                  <p className="text-gray-500">Check out</p>
                  <p className="font-medium">{data.checkOut}</p>
                </div>
              </div>
            </div>
          )}


          <div className="flex items-center justify-between mt-2">
            {variant !== "profile" && (
              <p className="text-[0.90rem] text-[#828282]">
                {data.guests} guests
              </p>
            )}

            {variant === "default" ? (
              <div className="flex items-center gap-2">
                <Button className="px-3 py-1 text-sm">BOOK</Button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    buttonSize,
                    "flex items-center justify-center rounded-[2px] border border-transparent text-[#DD8A08] transition",
                    "group-hover:border-[#DD8A08] group-hover:bg-white"
                  )}
                >
                  <Heart size={18} />
                </button>
              </div>
            ) : variant === "admin" ? (
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-md hover:bg-gray-200 transition text-gray-600 flex items-center justify-center"
              >
                <MoreHorizontal size={20} />
              </button>
            ) : (
              <Button className="w-full bg-[#DD8A08] hover:bg-[#c97a06] text-white rounded-[3px] mt-2 h-[37px]">
                CHANGE
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
