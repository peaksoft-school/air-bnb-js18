import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { NotFound } from "@/layout/NotFound";
import { CardLanding } from "../UI/card/CardLanding";
import { getPopularHouses } from "@/store/slices/landing/landingThunk";
import type { PopularHouse } from "@/store/slices/landing/types";

export const PopularHouses = () => {
  const { popularHouse } = useAppSelector((state) => state.landing);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopularHouses());
  }, [dispatch]);

  if (!popularHouse?.length) return <NotFound />;

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

      <div className="flex justify-start gap-5">
        {popularHouse?.map((house: PopularHouse) => {
          return <CardLanding key={house.id} data={house} />;
        })}
      </div>
    </section>
  );
};
