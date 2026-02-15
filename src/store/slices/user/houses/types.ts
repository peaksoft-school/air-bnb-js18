export interface House {
  id: string;
  title: string;
  region: string;
  price: number;
  houseType: string;
  popular: boolean;
  rating?: number;
  images: string[];
}

export interface GetFilteredResponse {
  houseResponses: House[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export interface FilterParams {
  region?: string;
  popular?: string;
  houseType?: string;
  price?: string;
  rating?: string;
  currentPage: number;
  pageSize: number;
}

export interface HousesState {
  houses: House[];
  totalPages: number;
  loading: boolean;
}

export interface ApiError {
  message?: string;
  response?: {
    data?: {
      message?: string;
    };
  };
}
