export interface User {
  id: string;
  username: string;
  contact: string;
  bookingsQuantity: number;
  housesQuantity: number;
}

export interface UsersState {
  users: User[];
  loading: boolean;
}
