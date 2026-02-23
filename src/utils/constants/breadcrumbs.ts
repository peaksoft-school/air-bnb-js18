import { ADMIN_ROUTES, USER_ROUTES } from "@/utils/constants/routes";

export const ADMIN_BREADCRUMBS = [
  {
    label: "Users",
    href: ADMIN_ROUTES.users,
  },
];

export const USER_BREADCRUMBS = [
  {
    label: "Main",
    href: USER_ROUTES.index,
  },
  {
    label: "Profile",
    href: USER_ROUTES.index,
  },
];
