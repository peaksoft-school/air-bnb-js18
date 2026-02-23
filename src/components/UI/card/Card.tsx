import { cn } from "../../../lib/utils";
import { Star, Heart, MoreHorizontal, MapPin } from "lucide-react";
import { ImageSlider } from "./ImageSlider";
import type { CardData } from "./types";
import { Button } from "../Button";
import { useState, useRef, useEffect } from "react";

type MenuAction = {
  label: string;
  onClick: (data: CardData) => void;
  className?: string;
};

type CardProps = {
  data: CardData;
  variant?: "default" | "admin" | "profile";
  className?: string;
  menuActions?: MenuAction[];
  onToggleFavorite?: (id: string | number) => void;
};

const variantClasses: Record<"default" | "admin" | "profile", string> = {
  default:
    "hover:bg-white hover:shadow-md min-w-[16rem] max-w-[18.5rem] min-h-[21rem] border-none rounded",
  admin:
    "hover:border-red-500 hover:bg-white hover:shadow-[0_0_0_3px_rgba(255,0,0,0.6)] min-w-[12rem] max-w-[14.5rem] min-h-[15rem] border-none rounded",
  profile: "min-w-[16rem] min-h-[25rem] border-none rounded",
};

export const Card = ({
  data,
  variant = "default",
  className,
  menuActions,
  onToggleFavorite,
}: CardProps) => {
  const {
    images,
    price,
    rating,
    title,
    address,
    province,
    guests,
    maxGuests,
    checkIn,
    checkOut,
    favorite = false,
  } = data;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const locationText = address || province || "Location not specified";
  const guestsText = guests || maxGuests || 0;
  const ratingValue = rating || 0;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  const handleMenuAction = (action: MenuAction) => {
    action.onClick(data);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "group cursor-pointer overflow-hidden rounded-lg border bg-[#F7F7F7] transition-all",
          variantClasses[variant],
          className,
        )}
      >
        <ImageSlider images={images} />

        <div className="p-3">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[1.1rem] font-normal text-black">
              ${price}
              <span className="ml-1 text-[1rem] text-[#6C6C6C]">/ day</span>
            </span>

            <div className="flex items-center gap-1 rounded-[2px] bg-[#828282] px-2.75 py-1">
              <Star size={14} className="text-[#F7D212]" fill="#F7D212" />
              <span className="text-sm text-white">{ratingValue}</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="line-clamp-2 text-[1rem] font-normal leading-snug text-[#2B2B2B]">
              {title}
            </p>
            <p className="flex items-center gap-1 text-[0.9rem] text-[#828282]">
              <MapPin className="h-4 w-4 text-[#C4C4C4]" />
              {locationText}
            </p>
          </div>

          {variant === "profile" && (
            <>
              <p className="py-3.5 text-[0.9rem] text-[#828282]">
                {guestsText} guests
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
              <Button className="mt-3 h-9.25 w-full">CHANGE</Button>
            </>
          )}

          {variant !== "profile" && (
            <div className="mt-2 flex items-center justify-between">
              <p className="max-w-52.5 text-[0.9rem] text-[#939393]">
                {guestsText} guests
              </p>

              {variant === "default" && (
                <div className="flex items-center gap-2">
                  <Button size="sm">BOOK</Button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite?.(data.id);
                    }}
                    className={cn(
                      "flex h-8.75 w-8.75 items-center justify-center rounded-[2px] border transition cursor-pointer",
                      favorite
                        ? "border-[#DD8A08] bg-white text-[#DD8A08]"
                        : "border-transparent text-[#C4C4C4] group-hover:border-[#DD8A08] group-hover:bg-white",
                    )}
                  >
                    <Heart
                      size={18}
                      className={cn("transition", favorite && "fill-[#DD8A08]")}
                    />
                  </button>
                </div>
              )}

              {variant === "admin" && menuActions && menuActions.length > 0 && (
                <button
                  ref={buttonRef}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="rounded-md p-2 text-gray-600 hover:bg-gray-200 cursor-pointer"
                >
                  <MoreHorizontal size={20} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {variant === "admin" &&
        isMenuOpen &&
        menuActions &&
        menuActions.length > 0 && (
          <div
            ref={menuRef}
            className="absolute left-30 top-70 ml-2 min-w-32 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
          >
            {menuActions.map((action, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMenuAction(action);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer",
                  action.className,
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
    </div>
  );
};
