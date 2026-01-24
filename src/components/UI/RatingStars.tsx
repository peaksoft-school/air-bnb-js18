import { useState } from "react";

type Props = {
  max?: number;
  size?: number;
  grayStar: string;
  yellowStar: string;
  initialValue?: number;
};

export const RatingStars = ({
  max = 5,
  size = 18,
  grayStar,
  yellowStar,
  initialValue = 0,
}: Props) => {
  const [rating, setRating] = useState(initialValue);

  return (
    <div
      className="flex items-center gap-1.5"
      style={{ width: 136, height: 21 }}
    >
      {Array.from({ length: max }).map((_, i) => {
        const value = i + 1;

        return (
          <img
            key={value}
            src={value <= rating ? yellowStar : grayStar}
            alt="star"
            width={size}
            height={size}
            className="cursor-pointer"
            onClick={() => setRating(value)}
          />
        );
      })}

      <span className="text-[#919191] text-sm">({rating})</span>
    </div>
  );
};
