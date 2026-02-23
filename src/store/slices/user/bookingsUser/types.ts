export interface Booking {
  id: number;
  images: string[];
  price: number;
  rating: number;
  title: string;
  description: string;
  address: string;
  maxGuests: number;
  region: string;
  checkIn: string;
  checkOut: string;
}

export interface BookingsState {
  data: Booking[];
  isLoading: boolean;
  error: string | null;
}
