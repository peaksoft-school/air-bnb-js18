import { GrayStarIcon, StarIcon } from "@/assets/icons";

export const InteractiveRatingStars = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, index) => {
      const ratingValue = index + 1;
      return (
        <button key={index} type="button" onClick={() => onChange(ratingValue)}>
          <img
            src={ratingValue <= value ? StarIcon : GrayStarIcon}
            alt="star"
            className="w-5 h-5 cursor-pointer"
          />
        </button>
      );
    })}
  </div>
);
