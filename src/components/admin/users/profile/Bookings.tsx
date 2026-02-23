import { Card } from "@/components/UI/card/Card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  deleteHouse,
  getUserBooking,
} from "@/store/slices/admin/users/profile/bookings/bookingsThunk";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import UserNoDataImage from "@/assets/images/user-no-data.png";
import type { CardData } from "@/components/UI/card/types";

export const Bookings = () => {
  const { bookings } = useAppSelector((state) => state.bookings);

  const { userId } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserBooking(userId));
  }, []);

  const menuActions = [
    {
      label: "Delete",
      onClick: (data: CardData) => {
        dispatch(deleteHouse({ id: data.id, navigate }));
      },
      className: "text-red-500",
    },
  ];

  return (
    <>
      {bookings && bookings?.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bookings?.map((item, index) => (
            <Card
              key={index}
              variant="admin"
              data={item}
              menuActions={menuActions}
            />
          ))}
        </div>
      ) : (
        <img src={UserNoDataImage} alt="no house" className="w-125 m-auto" />
      )}
    </>
  );
};
