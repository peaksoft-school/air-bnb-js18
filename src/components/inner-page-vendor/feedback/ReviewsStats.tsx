import { useAppSelector } from "@/store/hooks";
import star from "@/assets/Icons/svgs/star.svg";

export const ReviewsStats = () => {
  const { ratings } = useAppSelector((state) => state.feedbacks);

  if (!ratings) return null;

  const rows = [5, 4, 3, 2, 1].map((star) => ({
    star,
    percent:
      ratings.totalRatings === 0
        ? 0
        : Math.round(
            (ratings[`${star}Stars` as keyof typeof ratings] /
              ratings.totalRatings) *
              100,
          ),
  }));

  return (
    <div className="w-[424px] rounded-2xl border bg-[#F7F7F7] p-6 mt-10">
      <div className="flex items-center gap-3">
        <span className="text-[24px] font-semibold">
          {ratings.averageRating.toFixed(1)}
        </span>
        <img src={star} alt="star" className="w-6 h-6" />
      </div>

      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.star} className="flex items-center gap-3">
            <span className="w-4">{row.star}</span>

            <div className="relative w-[300px] h-0.5 bg-[#C4C4C4]">
              <div
                className="absolute left-0 top-0 h-0.5 bg-[#4F7755]"
                style={{ width: `${row.percent}%` }}
              />
            </div>

            <span className="w-9 text-right">{row.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
