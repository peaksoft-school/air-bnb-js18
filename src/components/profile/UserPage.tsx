import type { AdminUserPageProps } from "@/components/profile/type";
import { UserProfileCard } from "@/components/profile/UserProfileCard";
import Breadcrumbs from "@/components/UI/BreadCrumbs";
import Tabs from "@/components/UI/Tab";
import { NotFound } from "@/layout/NotFound";
import { USER_BREADCRUMBS } from "@/utils/constants/breadcrumbs";
import { USER_TABS } from "@/utils/constants/tabs";

export const UserPage = ({ user }: AdminUserPageProps) => {

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="flex gap-12 my-10 mx-10">
      <div className="w-103.25 flex flex-col gap-6">
        <Breadcrumbs
          links={[...USER_BREADCRUMBS, { label: user.fullName, href: "" }]}
        />

        <UserProfileCard user={user} />

      </div>

      <div className="flex-1">
        <Tabs tabs={USER_TABS} />
      </div>
    </div>
  );
};
