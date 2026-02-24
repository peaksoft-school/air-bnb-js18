export type LatestAnnouncement = {
  id: number;
  images: string[];
  title: string;
  description: string;
  address: string;
};

export type PopularApartment = {
  id: number;
  images: string[];
  title: string;
  description: string;
  address: string;
};

export type PopularHouse = {
  id: number;
  title: string;
  images: string[];
  address: string;
  price: number;
  rating: number;
};

export type PopularHouses = PopularHouse[];

export type LandingState = {
  latestAnnouncement: LatestAnnouncement | null;
  popularApartment: PopularApartment | null;
  popularHouse: PopularHouses | null;
  isLoadingPopularApartment: boolean;
  isLoadingLatestAnnouncement: boolean;
  isLoading: boolean;
  error: string | null;
};
