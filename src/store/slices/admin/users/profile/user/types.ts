export interface User {
  image?: string;
  name?: string;
  email?: string;
}

export interface UserState {
  user: User;
  isLoading: boolean;
}
