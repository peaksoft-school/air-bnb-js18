import { Card } from "@/components/UI/card/Card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getUserAnnouncements,
  blockedHouses,
  deleteHouse,
} from "@/store/slices/admin/users/profile/announcements/announcementsThunk";
import { useEffect } from "react";
import { useParams } from "react-router";
import UserNoDataImage from "@/assets/images/user-no-data.png";
import type { CardData } from "@/components/UI/card/types";

export const Announcements = () => {
  const { announcements } = useAppSelector((state) => state.announcements);
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserAnnouncements(userId));
  }, []);

  const menuActions = [
    {
      label: "Block",
      onClick: (data: CardData) => {
        dispatch(blockedHouses({ id: data.id, block: !data.isBlocked }));
      },
    },
    {
      label: "Delete",
      onClick: (data: CardData) => {
        dispatch(deleteHouse({ id: data.id }));
      },
      className: "text-red-500",
    },
  ];

  return (
    <>
      {announcements && announcements?.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {announcements.map((item, index) => (
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
