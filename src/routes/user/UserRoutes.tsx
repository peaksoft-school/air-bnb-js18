import { USER_ROUTES } from "@/utils/constants/routes";
import { lazy } from "react";

const UserRegionsFiltered = lazy(
  () => import("@/pages/user/UserRegionsFiltered"),
);
const Favorite = lazy(() => import("@/pages/user/favorite/Favorite"));
const Profile = lazy(() => import("@/components/profile/Profile"));
const InnerMyAnnouncement = lazy(
  () => import("@/pages/user/inner-my-announcment/InnerMyAnnouncement"),
);
const LeaveAnAdForm = lazy(
  () => import("@/pages/user/leave-an-ad/LeaveAnAdForm"),
);

export const userRoutes = [
  { path: USER_ROUTES.innerRegion, Component: UserRegionsFiltered },
  { path: USER_ROUTES.favorite, Component: Favorite },
  { path: USER_ROUTES.profile, Component: Profile },
  { path: USER_ROUTES.innerMyAnnouncement, Component: InnerMyAnnouncement },
  { path: USER_ROUTES.anAd, Component: LeaveAnAdForm },
];
