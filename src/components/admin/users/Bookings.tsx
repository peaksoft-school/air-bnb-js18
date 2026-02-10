import { Card } from "@/components/UI/card/Card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getUserBooking } from "@/store/slices/admin/profile/bookings/bookingsThunk";
import { useEffect } from "react";
import { useParams } from "react-router";

export const Bookings = () => {
  const { bookings } = useAppSelector((state) => state.bookings);

  const { userId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserBooking(userId));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 w-225">
      {bookings?.map((item, index) => (
        <Card key={index} variant="admin" data={item} />
      ))}
    </div>
  );
};
