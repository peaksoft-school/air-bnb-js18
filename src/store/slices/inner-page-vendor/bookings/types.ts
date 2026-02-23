export interface UserResponse {
  id: number;
  fullName: string;
  email: string;
  image: string;
}

export interface Booking {
  id: number;
  checkIn: string;
  checkOut: string;
  price: string;
  userResponse: UserResponse;
}

export interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}
