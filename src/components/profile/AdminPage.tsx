import type { AdminUserPageProps } from "@/components/profile/type";
import Breadcrumbs from "@/components/UI/BreadCrumbs";
import Tabs from "@/components/UI/Tab";
import { NotFound } from "@/layout/NotFound";
import { ADMIN_BREADCRUMBS } from "@/utils/constants/breadcrumbs";
import { ADMIN_TABS } from "@/utils/constants/tabs";
import { useState } from "react";
import { Button } from "@/components/UI/Button";
import { AdminUserCard } from "./AdminUserCard";

export const AdminPage = ({ user }: AdminUserPageProps) => {
  const [activeTab, setActiveTab] = useState("Bookings");

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="flex gap-12 my-10 mx-10">
      <div className="w-103.25 flex flex-col gap-6">
        <Breadcrumbs
          links={[...ADMIN_BREADCRUMBS, { label: user.fullName, href: "" }]}
        />

        <AdminUserCard user={user} />

        {activeTab === "Announcement" && (
          <Button>BLOCK ALL ANNOUNCEMENT</Button>
        )}
      </div>

      <div className="flex-1">
        <Tabs tabs={ADMIN_TABS} onChange={setActiveTab} />
      </div>
    </div>
  );
};
