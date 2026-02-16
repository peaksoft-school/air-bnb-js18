import type { User } from "@/store/slices/admin/users/profile/user/types";
import type { CardData } from "../UI/card/types";

export type UserProfile = {
  image?: string;
  name: string;
  email: string;
};

export type TabType = "bookings" | "announcements";

export type AdminUserPageProps = {
  user: UserProfile;
  bookings?: CardData[];
  announcements?: CardData[];
};

export const mapUserToProfile = (user: User): UserProfile => ({
  name: user.name ?? "No name",
  email: user.email ?? "No email",
  image: user.image ?? "/images/default-avatar.png",
});
