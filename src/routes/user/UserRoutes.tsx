import { USER_ROUTES } from "@/utils/constants/routes";
import { lazy } from "react";

const UserRegionsFiltered = lazy(
  () => import("@/pages/user/UserRegionsFiltered"),
);

export const userRoutes = [
  { path: USER_ROUTES.innerRegion, Component: UserRegionsFiltered },
];
