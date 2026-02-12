export interface Announcement {
  id: number;
  images: string[];
  price: number;
  rating: number;
  title: string;
  description: string;
  address: string;
  maxGuests: number;
  status: string;
  bookingsCountAnnouncement: number;
  messagesFromAdmin: string;
  region: string;
  isBlocked: boolean;
  favorites: number;
}

export interface AnnouncementsState {
  announcements: Announcement[];
  isLoading: boolean;
  error: string | null;
}
