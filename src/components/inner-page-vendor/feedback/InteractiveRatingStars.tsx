import star from "@/assets/Icons/svgs/star.svg";
import grayStar from "@/assets/Icons/svgs/grey-star.svg";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const InteractiveRatingStars = ({ value, onChange }: Props) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const ratingValue = index + 1;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(ratingValue)}
          >
            <img
              src={ratingValue <= value ? star : grayStar}
              alt="star"
              className="w-5 h-5 cursor-pointer"
            />
          </button>
        );
      })}
    </div>
  );
};