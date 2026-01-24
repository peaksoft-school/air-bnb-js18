import star from "@/assets/icons/star.svg";

type Row = {
  star: number;
  percent: number;
};

const rows: Row[] = [
  { star: 5, percent: 52 },
  { star: 4, percent: 15 },
  { star: 3, percent: 0 },
  { star: 2, percent: 0 },
  { star: 1, percent: 0 },
];

export const ReviewsStats = () => {
  return (
    <div className="w-[424px] h-[232px] rounded-2xl border border-[#C4C4C4] bg-white p-6 mt-10">
      <div className="flex items-center gap-3">
        <span className="w-[38px] h-[29px] text-[24px] font-semibold leading-[29px] text-black">
          4.4
        </span>

        <img src={star} alt="star" className="w-[31px] h-[31px]" />
      </div>

      <div className="mt-3 space-y-3">
        {rows.map((row) => (
          <div key={row.star} className="flex items-center gap-3">
            <span className="w-4 text-[16px] leading-[19px] text-black font-medium">
              {row.star}
            </span>

            <div className="relative w-[344px] h-0.5 bg-[#C4C4C4]">
              <div
                className="absolute left-0 top-0 h-0.5 bg-[#4F7755]"
                style={{ width: `${row.percent}%` }}
              />
            </div>

            <span className="w-9 text-right text-[16px] leading-[19px] text-black font-medium">
              {row.percent === 0 ? "0" : `${row.percent}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
