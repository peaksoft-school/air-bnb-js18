import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";

type Props = {
  images: string[];
};

export const ImageSlider = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="flex h-full items-center justify-center text-gray-400 text-sm">
        No images
      </div>
    );
  }

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative bg-gray-100 aspect-4/3 w-full overflow-hidden">
      <img
        src={images[index]}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 p-1.5 rounded-full hover:bg-[#DD8A08]"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 p-1.5 rounded-full hover:bg-[#DD8A08]"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  i === index ? "bg-white" : "bg-white/50",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
