import { UserProfileCard } from "@/components/UI/card/UserProfileCard";
import Breadcrumbs from "@/components/UI/Breadcrumbs_tt";
import Tabs from "@/components/UI/Tab";
import { NotFound } from "@/layout/NotFound";
import { USER_BREADCRUMBS } from "@/utils/constants/breadcrumbs";
import { ADMIN_TABS } from "@/utils/constants/tabs";
import { useEffect, useState } from "react";
import { Button } from "@/components/UI/Button";
import { useLocation, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/slices/admin/profile/user/profileUserThunk";
import { ADMIN_ROUTES } from "@/utils/constants/routes";
import { mapUserToProfile } from "./type";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Bookings");

  const { role } = useAppSelector((state) => state.auth);
  const { user } = useAppSelector((state) => state["profile-user"]);

  const { pathname } = useLocation();
  const { userId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (role === "ADMIN") {
      dispatch(getUser(userId));
    }
  }, [role, userId, dispatch]);

  const ADMIN_BREADCRUMBS = [
    {
      label: "Users",
      href: ADMIN_ROUTES.users,
    },

    {
      label: user?.name ?? "Profile",
      href: pathname,
    },
  ];

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="flex gap-12 my-10 mx-10">
      <div className="w-103.25 flex flex-col gap-6">
        <Breadcrumbs
          links={role === "ADMIN" ? ADMIN_BREADCRUMBS : USER_BREADCRUMBS}
        />

        <UserProfileCard user={mapUserToProfile(user)} role={role} />

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

export default Profile;
