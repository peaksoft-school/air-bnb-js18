import { Card } from "@/components/UI/card/Card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getUserAnnouncements } from "@/store/slices/admin/users/profile/announcements/announcementsThunk";
import { useEffect } from "react";
import { useParams } from "react-router";
import UserNoDataImage from "@/assets/images/user-no-data.png";

export const Announcements = () => {
  const { announcements } = useAppSelector((state) => state.announcements);

  const { userId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserAnnouncements(userId));
  }, []);

  return (
    <>
      {announcements && announcements?.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-225">
          {announcements?.map((item, index) => (
            <Card key={index} variant="admin" data={item} />
          ))}
        </div>
      ) : (
        <img src={UserNoDataImage} alt="no house" className="w-125 m-auto" />
      )}
    </>
  );
};
