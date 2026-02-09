import { Bookings } from "@/components/admin/users/Bookings";
import { Announcement } from "@/components/admin/users/Announcement";
import { OnModeration } from "@/components/admin/users/OnModeration";

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
    Component: OnModeration,
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
