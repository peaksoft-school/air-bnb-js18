import Tabs from "@/components/UI/Tab";
import { NotFound } from "@/layout/NotFound";
import { USER_BREADCRUMBS } from "@/utils/constants/breadcrumbs";
import { ADMIN_TABS, USER_TABS } from "@/utils/constants/tabs";
import { useEffect, useState } from "react";
import { Button } from "@/components/UI/Button";
import { useLocation, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/slices/admin/users/profile/user/profileUserThunk";
import { ADMIN_ROUTES } from "@/utils/constants/routes";
import { mapUserToProfile } from "./type";
import { Breadcrumbs } from "../UI/Breadcrumbs";
import { ProfileCard } from "./ProfileCard";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Bookings");

  const { role } = useAppSelector((state) => state.auth);
  const { user } = useAppSelector((state) => state["profile-user"]);

  const { pathname } = useLocation();

  const { userId } = useParams();

  const dispatch = useAppDispatch();

  if (role === "ADMIN") {
    useEffect(() => {
      dispatch(getUser(userId));
    }, []);
  }

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
    <div className="flex gap-7 my-10 mx-10 flex-col">
      <Breadcrumbs
        links={role === "ADMIN" ? ADMIN_BREADCRUMBS : USER_BREADCRUMBS}
      />

      <div className="flex w-full justify-between gap-11.75">
        <div className="w-103.25 flex flex-col gap-6">
          <ProfileCard user={mapUserToProfile(user)} role={role} />

          {activeTab === "Announcement" && (
            <Button>BLOCK ALL ANNOUNCEMENT</Button>
          )}
        </div>

        <div className="flex-1">
          <Tabs
            tabs={role === "ADMIN" ? ADMIN_TABS : USER_TABS}
            onChange={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
