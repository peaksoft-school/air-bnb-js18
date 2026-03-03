import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card } from "@/components/UI/card/Card";
import { fetchBookingsUser } from "@/store/slices/user/bookingsUser/userBokingsThunk";
import UserNoDataImage from "@/assets/images/user-no-data.png";

export const UserBookings = () => {
  const { data, isLoading } = useAppSelector((state) => state.bookingsUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookingsUser());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {data && data?.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <Card key={item.id} variant="profile" data={item} />
          ))}
        </div>
      ) : (
        <img src={UserNoDataImage} alt="no house" className="w-125 m-auto" />
      )}
    </>
  );
};
