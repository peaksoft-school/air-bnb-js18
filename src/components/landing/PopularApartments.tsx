import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ApartmentSlider } from "./ApartmentSlider";
import { getPopularApartments } from "@/store/slices/popularApartments/popularApartmentsThunk";
import { getLatestAnnouncements } from "@/store/slices/latestHouse/latestHousesThunk";
import { NotFound } from "@/layout/NotFound";


interface PopularApartmentsProps {
  variant: "popular-apartments" | "the-lastest";
}

export const PopularApartments = ({ variant }: PopularApartmentsProps) => {
  const dispatch = useAppDispatch();

  const popularState = useAppSelector((state) => state.apartments);
  const latestState = useAppSelector((state) => state.announcements);

  const isPopular = variant === "popular-apartments";

  const data = isPopular ? popularState.popular : latestState.latest;
  const isLoading = isPopular ? popularState.isLoading : latestState.isLoading;

  useEffect(() => {
    if (isPopular) {
      dispatch(getPopularApartments());
    } else {
      dispatch(getLatestAnnouncements());
    }
  }, [dispatch, isPopular]);

  if (isLoading) {
    return <NotFound/>;
  }

  return (
    <div
      className={`${
        isPopular ? "bg-[#4f7755] text-white" : "bg-[#f8f8f8] text-black"
      } flex items-center justify-center font-sans pl-25 py-42.5 my-42.5`}
    >
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center mb-12 uppercase">
          <h2 className="text-xl mb-4">
            {isPopular ? "Popular Apartments" : "The latest"}
          </h2>

          <button className="border-b pb-1 opacity-80 hover:opacity-100 transition-opacity mr-25">
            View all
          </button>
        </div>

        <ApartmentSlider data={data ?? []} variant={variant} />
      </div>
    </div>
  );
};
