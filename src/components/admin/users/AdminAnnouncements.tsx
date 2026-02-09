import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card } from "@/components/UI/card/Card";
import { fetchAdminAnnouncements } from "@/store/slices/admin/user/announcements/adminAnnouncementsThunk";


export const AdminAnnouncements = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(
    (state) => state.announcementsUser,
  );

  useEffect(() => {
    dispatch(fetchAdminAnnouncements("userId"));
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
