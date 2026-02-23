import { USER_ROUTES } from "@/utils/constants/routes";
import { lazy } from "react";

const UserRegionsFiltered = lazy(
  () => import("@/pages/user/UserRegionsFiltered"),
);
const Favorite = lazy(() => import("@/pages/user/favorite/Favorite"));
const Profile = lazy(() => import("@/components/profile/Profile"));

export const userRoutes = [
  { path: USER_ROUTES.innerRegion, Component: UserRegionsFiltered },
  { path: USER_ROUTES.favorite, Component: Favorite },
  { path: USER_ROUTES.profile, Component: Profile },
];
