export interface User {
  id: string;
  name: string;
  email: string;
  bookings: number;
  announcements: number;
}

export interface UsersState {
  list: User[];
  loading: boolean;
}
