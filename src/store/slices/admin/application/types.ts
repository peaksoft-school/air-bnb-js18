export interface Application {
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
}

export interface ApplicationState {
  houses: Application[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  isLoading: boolean;
  error: null | string;
}

export interface GetAllApplicationResponse {
  houseResponses: Application[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export interface GetAllApplicationArgs {
  currentPage: number;
  pageSize: number;
}

export interface RejectApplicationArgs {
  houseId: number;
  massage: string;
  getData: GetAllApplicationArgs;
}
