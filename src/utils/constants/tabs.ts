import { UserBookings } from "@/components/user/profile/UserBookings";
import { UserAnnouncements } from "@/components/user/profile/UserAnnouncements";
import { OnModeration } from "@/components/user/profile/OnModeration";
import { Bookings } from "@/components/admin/users/profile/Bookings";
import { Announcements } from "@/components/admin/users/profile/Announcements";

export const USER_TABS = [
  { label: "Bookings", Component: UserBookings },
  { label: "My Announcement", Component: UserAnnouncements },
  { label: "On moderation", Component: OnModeration },
];

export const ADMIN_TABS = [
  {
    label: "Bookings",
    Component: Bookings,
  },
  {
    label: "Announcement",
    Component: Announcements,
  },
];
