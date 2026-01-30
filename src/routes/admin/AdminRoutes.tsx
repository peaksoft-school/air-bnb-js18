import { ADMIN_ROUTES } from "@/utils/constants/routes";
import { lazy } from "react";

const AllHousing = lazy(
  () => import("@/containers/admin/allhousing/AllHousing"),
);

export const adminRoutes = [
  { path: ADMIN_ROUTES.allHousing, Component: AllHousing },
];
