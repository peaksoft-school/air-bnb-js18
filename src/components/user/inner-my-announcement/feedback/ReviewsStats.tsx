import { StarIcon } from "@/assets/icons";
import { useAppSelector } from "@/store/hooks";

export const ReviewsStats = () => {
  const { ratings } = useAppSelector((state) => state.feedbacks);

  if (!ratings) return null;

  const RATINGS = [
    { label: 5, progress: ratings.rating_5_percentage },
    { label: 4, progress: ratings.rating_4_percentage },
    { label: 3, progress: ratings.rating_3_percentage },
    { label: 2, progress: ratings.rating_2_percentage },
    { label: 1, progress: ratings.rating_1_percentage },
  ];

  return (
    <div className="w-106 rounded-2xl border bg-[#F7F7F7] p-6 mt-10">
      <div className="flex items-center gap-3">
        <span className="text-[24px] font-semibold">
          {ratings.total_feedback}
        </span>
        <img src={StarIcon} alt="star" className="w-6 h-6" />
      </div>

      <div className="mt-4 space-y-3">
        {RATINGS.map((rating) => (
          <div key={rating.label} className="flex items-center gap-3">
            <span className="w-4">{rating.label}</span>
            <div className="relative w-75 h-0.5 bg-[#C4C4C4]">
              <div
                className="absolute left-0 top-0 h-0.5 bg-[#4F7755]"
                style={{ width: `${rating.progress}%` }}
              />
            </div>
            <span className="w-9 text-right">{rating.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
