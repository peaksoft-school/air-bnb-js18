import { Card } from "@/components/UI/card/Card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getUserBooking } from "@/store/slices/admin/users/profile/bookings/bookingsThunk";
import { useEffect } from "react";
import { useParams } from "react-router";
import UserNoDataImage from "@/assets/images/user-no-data.png";

export const Bookings = () => {
  const { bookings } = useAppSelector((state) => state.bookings);

  const { userId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserBooking(userId));
  }, []);

  return (
    <>
      {bookings && bookings?.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-225">
          {bookings?.map((item, index) => (
            <Card key={index} variant="admin" data={item} />
          ))}
        </div>
      ) : (
        <img src={UserNoDataImage} alt="no house" className="w-125 m-auto" />
      )}
    </>
  );
};
