export interface User {
  image: string;
  name: string;
  email: string;
}

export interface UserState {
  name: null | string;
  image: null | string;
  email: null | string;
  isLoading: boolean;
}
