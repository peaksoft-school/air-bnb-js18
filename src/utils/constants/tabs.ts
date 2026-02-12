import { Bookings } from "@/components/admin/users/Bookings";
import { Announcement } from "@/components/admin/users/Announcement";

export const USER_TABS = [
  {
    label: "Bookings",
    Component: Bookings,
  },
  {
    label: "Announcement",
    Component: Announcement,
  },
  {
    label: "On moderation",
    Component: "On moderation",
  },
];

export const ADMIN_TABS = [
  {
    label: "Bookings",
    Component: Bookings,
  },
  {
    label: "Announcement",
    Component: Announcement,
  },
];
