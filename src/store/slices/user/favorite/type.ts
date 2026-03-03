export type FavoriteData = {
  id: number;
  images: string[];
  price: number;
  address: string;
  description: string;
  houseStatus: "MODERATING";
  maxGuests: number;
  rating: number;
  favorite: boolean;
};

export interface FavoriteState {
  favorite: FavoriteData[];
  isLoading: boolean;
  error: string | null;
}
