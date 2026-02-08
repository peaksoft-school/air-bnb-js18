export type HouseType = "APARTMENT" | "HOUSE" | "VILLA";

export interface HouseInnerPage {
  title: string;
  description: string;
  houseType: HouseType;
  price: number;
  maxOfGuests: number;
  region: string;
  province: string;
  address: string;
  images: string[];
}

export interface HouseState {
  loading: boolean;
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
  error: null,
  success: false,
};