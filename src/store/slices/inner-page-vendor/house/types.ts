export type HouseType = "APARTMENT" | "HOUSE" | "VILLA";

export interface HouseInnerPage {
  title: string;
  description: string;
  houseType: HouseType;
  price: number;
  maxGuests: number;
  region: string;
  province: string;
  address: string;
  images: string[];
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
