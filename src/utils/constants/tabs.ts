import { UserBookings } from "@/components/profile/pages/UserBookings";
import { UserAnnouncements } from "@/components/profile/pages/UserAnnouncements";
import { OnModeration } from "@/components/profile/pages/OnModeration";
import { AdminAnnouncements } from "@/components/admin/users/AdminAnnouncements";
import { AdminBookings } from "@/components/admin/users/AdminBookings";

export const USER_TABS = [
  { label: "Bookings", Component: UserBookings },
  { label: "Announcement", Component: UserAnnouncements },
  { label: "On moderation", Component: OnModeration },
];

export const ADMIN_TABS = [
  {
    label: "Bookings",
    Component: AdminBookings,
  },
  {
    label: "Announcement",
    Component: AdminAnnouncements,
  },
];
