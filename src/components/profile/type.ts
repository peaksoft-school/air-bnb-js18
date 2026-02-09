import type { CardData } from "../UI/card/types";

export type UserProfile = {
  fullName: string;
  email: string;
  image?: string;
  role?: "admin" | "user";
};

export type TabType = "bookings" | "announcements" | "onModeration";

export type AdminUserPageProps = {
  user: UserProfile;
  bookings?: CardData[];
  announcements?: CardData[];
};
