export type CardData = {
  id: string | number;
  images: string[];
  price: number;
  rating?: number;
  title?: string;
  address?: string;
  province?: string;
  region?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  maxGuests?: number;
  booked?: boolean;
  description?: string;
  favorite?: boolean;
  houseType?: string;
  isBlocked?: boolean;
};

export type CardDataLanding = {
  images: string[];
  price: number;
  rating?: number;
  title?: string;
  address: string;
  id: string | number;
};
