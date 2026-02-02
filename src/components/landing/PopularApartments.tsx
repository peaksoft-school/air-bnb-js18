import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ApartmentSlider } from "./ApartmentSlider";
import {
  getLatestAnnouncements,
  getPopularApartments,
} from "@/store/slices/landing/landingThunk";

interface PopularApartmentsProps {
  variant: "popular-apartments" | "the-lastest";
}

export const PopularApartments = ({ variant }: PopularApartmentsProps) => {
  const dispatch = useAppDispatch();

  const {
    popularApartment,
    latestAnnouncement,
    isLoadingPopularApartment,
    isLoadingLatestAnnouncement,
  } = useAppSelector((state) => state.landing);

  const isPopular = variant === "popular-apartments";

  const data = isPopular ? popularApartment : latestAnnouncement;
  const isLoading = isPopular
    ? isLoadingPopularApartment
    : isLoadingLatestAnnouncement;

  useEffect(() => {
    if (isPopular) {
      dispatch(getPopularApartments());
    } else {
      dispatch(getLatestAnnouncements());
    }
  }, [dispatch, isPopular]);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
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

        {data && <ApartmentSlider data={data} variant={variant} />}
      </div>
    </div>
  );
};
