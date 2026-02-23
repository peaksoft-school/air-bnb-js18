import { ADMIN_ROUTES } from "@/utils/constants/routes";
import { lazy } from "react";

const Application = lazy(() => import("@/pages/admin/application/Application"));
const InnerApplication = lazy(
  () => import("@/components/InnerApplication/InnerApplication"),
);
const AllHousing = lazy(() => import("@/pages/admin/all-housing/AllHousing"));
const Users = lazy(() => import("@/pages/admin/users/Users"));
const Profile = lazy(() => import("@/components/profile/Profile"));

export const adminRoutes = [
  { path: ADMIN_ROUTES.application, Component: Application },
  { path: ADMIN_ROUTES.applicationById, Component: InnerApplication },
  { path: ADMIN_ROUTES.allHousing, Component: AllHousing },
  { path: ADMIN_ROUTES.users, Component: Users },
  { path: ADMIN_ROUTES.user, Component: Profile },
];
