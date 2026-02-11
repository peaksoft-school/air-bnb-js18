export interface Filters {
  region?: string;
  popular?: string;
  houseType?: string;
  price?: string;
}

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

export interface HousesState {
  houses: House[];
  loading: boolean;
}
