import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card } from "@/components/UI/card/Card";
import { fetchAnnouncementsUser } from "@/store/slices/user/announcementsUser/userAnnouncementsThunk";


export const UserAnnouncements = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(
    (state) => state.announcementsUser,
  );

  useEffect(() => {
    dispatch(fetchAnnouncementsUser("userId"));
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
