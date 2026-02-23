interface UserResponse {
  fullName: string;
  email: string;
  image: string;
  id: number;
}

export interface InnerApplication {
  id: number;
  houseType: string;
  images: string[];
  price: number;
  region: string;
  address: string;
  description: string;
  title: string;
  maxGuests: number;
  province: string;
  rating: number;
  booked: boolean;
  favorite: boolean;
  userResponse: UserResponse;
}

export interface InnerApplicationState {
  data: InnerApplication | null;
  isLoading: boolean;
  error: null | string;
}

export type GetInnerApplicationArgs = {
  id: number;
};

export type RejectInnerApplicationArgs = {
  id: number;
  message: string;
  navigate: (path: string) => void;
};
