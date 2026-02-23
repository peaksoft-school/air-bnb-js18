import type { Booking } from "@/store/slices/inner-page-vendor/bookings/types";

interface Props {
  booking: Booking;
}

export const BookedCard = ({ booking }: Props) => {
  const { price, checkIn, checkOut, userResponse } = booking;

  return (
    <div className="p-5 w-max-100 h-max-39.25">
      <div className="bg-white p-5">
        <div className="text-center border-b mb-3  ">
          <p className="text-sm font-semibold">
            ${price} <span className="text-[#838383] font-normal">/ day</span>
          </p>
        </div>

        <div className="flex justify-between text-xs text-[#838383]">
          <div>
            <p>Check in</p>
            <p className="text-black">{checkIn}</p>
          </div>
          <div>
            <p>Check out</p>
            <p className="text-black">{checkOut}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-7.5">
        <img
          src={userResponse.image}
          alt="User"
          className=""
          w-9
          h-9
          rounded-full
        />
        <div>
          <p className="text-sm font-medium">{userResponse.fullName}</p>
          <p className="text-xs text-[#838383]">{userResponse.email}</p>
        </div>
      </div>
    </div>
  );
};
