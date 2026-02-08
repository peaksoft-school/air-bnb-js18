import type { AdminUserPageProps } from "@/components/profile/type";
import { UserProfileCard } from "@/components/profile/UserProfileCard";
import Breadcrumbs from "@/components/UI/BreadCrumbs";
import Tabs from "@/components/UI/Tab";
import { NotFound } from "@/layout/NotFound";
import { ADMIN_BREADCRUMBS } from "@/utils/constants/breadcrumbs";
import { ADMIN_TABS } from "@/utils/constants/tabs";


export const AdminUserPage = ({
  user,
}: AdminUserPageProps) => {

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="flex gap-12 my-10 mx-10">
      <div className="w-105 flex flex-col gap-6">
        <Breadcrumbs
          links={[...ADMIN_BREADCRUMBS, { label: user.fullName, href: "" }]}
        />

        <UserProfileCard user={user} />
      </div>
      <div className="flex-1">
        <Tabs tabs={ADMIN_TABS} />
      </div>
    </div>
  );
};
