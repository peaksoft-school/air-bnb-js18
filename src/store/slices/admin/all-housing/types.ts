export interface House {
  id: number;
  houseType: string;
  images: string[];
  price: number;
  region: string;
  address: string;
  description: string;
  status: string;
  title: string;
  maxGuests: number;
  province: string;
  rating: number;
}

export interface AllHousingState {
  allHouses: House[];
  loading: boolean;
  error: string | null;
}

export interface FilterParams {
  status: string;
  houseType: string;
  rating: string;
  price: string;
}

export interface DeleteCardParams {
  id: number | string;
  getData: FilterParams;
}

export interface AcceptCardParams {
  id: number | string;
  getData: FilterParams;
}

export interface RejectCardParams {
  houseId: number | string;
  massage: string;
  getData: FilterParams;
}

export interface ToastParams {
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export interface ApiError {
  message?: string;
  response?: {
    data?: {
      message?: string;
    };
  };
}
