export type CardData = {
  id: number;
  images: string[];
  price: number;
  rating: number;
  title?: string;
  address: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
};

export type CardVariant = "default" | "admin" | "profile";

export type CardDataLanding = {
  images: string;
  price: number;
  rating: number;
  title?: string;
  address: string;
  id: number;
};
