import { ADMIN_ROUTES } from "@/utils/constants/routes";
import { lazy } from "react";

const AllHousing = lazy(() => import("@/pages/admin/allhousing/AllHousing"));
const Users = lazy(() => import("@/pages/admin/users/Users"));

export const adminRoutes = [
  { path: ADMIN_ROUTES.allHousing, Component: AllHousing },
  { path: ADMIN_ROUTES.users, Component: Users },
];
