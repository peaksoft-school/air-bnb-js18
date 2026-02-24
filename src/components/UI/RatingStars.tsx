import greyStar from "@/assets/Icons/svgs/grey-star.svg";
import star from "@/assets/Icons/svgs/star.svg";

interface Props {
  rating: number;
  interactive?: boolean;
  onChange?: (value: number) => void;
}

export const RatingStars = ({
  rating,
  interactive = false,
  onChange,
}: Props) => {
  const handleClick = (value: number) => {
    if (!interactive || !onChange) return;
    onChange(value);
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => handleClick(num)}
          disabled={!interactive}
        >
          <img
            src={num <= rating ? star : greyStar}
            alt={`${num} star`}
            className="w-5 h-5"
          />
        </button>
      ))}
    </div>
  );
};
