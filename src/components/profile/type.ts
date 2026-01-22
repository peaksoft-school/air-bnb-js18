import type { CardData } from "../UI/card/types";

export type UserProfile = {
  fullName: string;
  email: string;
  image?: string;
};

export type TabType = "bookings" | "announcements";

export type AdminUserPageProps = {
  user?: UserProfile;
  bookings?: CardData[];
  announcements?: CardData[];
};
