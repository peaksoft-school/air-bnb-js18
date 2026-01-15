import { CardLanding } from "../UI/card/CardLanding";
import type { CardDataLanding } from "../UI/card/types";

type PopularHousesProps = {
  houses?: CardDataLanding[];
};

export const PopularHouses = ({ houses = [] }: PopularHousesProps) => {
  if (!houses.length) {
    return <p className="p-10 text-gray-500">No houses available</p>;
  }

  return (
    <section className="w-full px-25 py-10 space-y-10">
      <div className="flex justify-between items-center">
        <div className="space-y-3.75">
          <h2 className="text-xl text-[#363636] uppercase font-medium leading-6">
            Popular house
          </h2>
          <p className="text-[#363636] text-base font-normal leading-4.75">
            Helping you make the best decisions in buying, selling & renting
          </p>
        </div>
        <a href="#" className="border-b border-[#363636]">
          <span className="text-base font-normal leading-4.75 text-[#363636]">
            View all
          </span>
        </a>
      </div>

      <div className="flex justify-between gap-5">
        {houses.slice(0, 3).map((house, index) => (
          <CardLanding key={index} data={house} />
        ))}
      </div>
    </section>
  );
};
