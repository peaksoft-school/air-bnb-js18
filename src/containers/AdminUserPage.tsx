import AdminTabs from "@/components/profile/AdminTabs";
import { AnnouncementsGrid } from "@/components/profile/AnnouncementsGrid";
import type { AdminUserPageProps, TabType } from "@/components/profile/type";
import { UserProfileCard } from "@/components/profile/UserProfileCard";
import { useState } from "react";

export const AdminUserPage = ({
  user,
  bookings,
  announcements,
}: AdminUserPageProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("bookings");

  if (!user || !bookings || !announcements) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-11.75 my-10 mx-10 justify-between">
      <UserProfileCard user={user} />

      <div className="flex-1">
        <AdminTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === "bookings" && <AnnouncementsGrid data={bookings} />}

        {activeTab === "announcements" && (
          <AnnouncementsGrid data={announcements} />
        )}
      </div>
    </div>
  );
};
