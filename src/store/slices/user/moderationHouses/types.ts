import type { CardData } from "@/components/UI/card/types";

export interface ModerationHouse {
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

export interface ModerationState {
  isLoading: boolean;
  error: string | null;
  data: CardData[];
}

export const initialState: ModerationState = {
  isLoading: false,
  error: null,
  data: [],
};