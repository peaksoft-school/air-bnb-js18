export type HouseType = "APARTMENT" | "HOUSE" | "VILLA";

export interface UserResponse {
  email: string;
  fullName: string;
  id: number;
  image: string;
}

export interface HouseInnerPage {
  title: string;
  description: string;
  houseType: HouseType;
  price: number;
  booked: boolean;
  favorite: boolean;
  maxGuests: number;
  region: string;
  province: string;
  address: string;
  images: string[];
  userResponse: UserResponse;
}

export interface HouseState {
  loading: boolean;
  loadingDelete: boolean;
  loadingUpdate: boolean;
  error: string | null;
  success: boolean;
  house: House | null;
}

export interface House extends HouseInnerPage {
  id: string;
}

export const initialState: HouseState = {
  house: null,
  loading: false,
  loadingDelete: false,
  loadingUpdate: false,
  error: null,
  success: false,
};
