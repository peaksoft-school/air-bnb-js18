export const ROLES = {
  GUEST: "GUEST",
  ADMIN: "ADMIN",
  USER: "USER",
};

export const ADMIN_ROUTES = {
  index: "/admin",
  application: "/admin/application",
  allHousing: "/admin/all-housing",
  users: "/admin/users",
  user: "/admin/users/:userId",
};

export const USER_ROUTES = {
  index: "/user",
  innerRegion: "/user/inner-region",
};
