import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { BookedCard } from "../../UI/card/BookedCard";
import { getBookingsByHouseId } from "@/store/slices/inner-page-vendor/bookings/bookingsThunk";
import type { Booking } from "@/store/slices/inner-page-vendor/bookings/types";

interface BookedSectionProps {
  houseId: string;
}

export const Booked = ({ houseId }: BookedSectionProps) => {
  const dispatch = useAppDispatch();
  const { bookings, loading, error } = useAppSelector(
    (state) => state.bookingsVendor,
  );

  useEffect(() => {
    if (houseId) dispatch(getBookingsByHouseId(houseId));
  }, [dispatch, houseId]);

  if (loading) return <p className="mt-6 text-gray-400">Loading bookings…</p>;
  if (error) return <p className="mt-6 text-red-500">{error}</p>;
  if (!bookings.length)
    return <p className="mt-6 text-gray-400">No bookings yet.</p>;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-medium mb-4">BOOKED</h3>
      <div className="grid grid-cols-3 gap-6">
        {bookings.map((booking: Booking) => (
          <BookedCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};
