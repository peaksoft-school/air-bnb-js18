import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card } from "@/components/UI/card/Card";
import { fetchAdminBookings } from "@/store/slices/admin/user/bookings/adminBookingsThunk";


export const AdminBookings = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.bookingsUser);

  useEffect(() => {
    dispatch(fetchAdminBookings("userId"));
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-6 w-225">
      {data.map((item) => (
        <Card key={item.id} variant="admin" data={item} />
      ))}
    </div>
  );
};
