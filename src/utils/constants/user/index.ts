interface SelectOption {
  id: number;
  value: string;
  label: string;
}

export const REGION_SORT_OPTIONS: SelectOption[] = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "BATKEN", label: "Batken" },
  { id: 3, value: "JALAL_ABAD", label: "Jalal-Abad" },
  { id: 4, value: "NARYN", label: "Naryn" },
  { id: 5, value: "ISSYK_KUL", label: "Issyk-Kul" },
  { id: 6, value: "TALAS", label: "Talas" },
  { id: 7, value: "CHUI", label: "Chui" },
  { id: 8, value: "OSH", label: "Osh" },
  { id: 9, value: "BISHKEK", label: "Bishkek" },
];

export const POPULAR_SORT_OPTIONS: SelectOption[] = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "ASC", label: "Popular" },
  { id: 3, value: "DESC", label: "The latest" },
];

export const HOUSE_TYPE_OPTIONS: SelectOption[] = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "APARTMENT", label: "Apartment" },
  { id: 3, value: "HOUSE", label: "House" },
];

export const PRICE_FILTER_OPTIONS: SelectOption[] = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "LOW_TO_HIGH", label: "Low to high" },
  { id: 3, value: "HIGH_TO_LOW", label: "High to low" },
];

//

export const houseTypeOptions = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "INWISHLIST", label: "In wish list" },
  { id: 3, value: "APARTMENT", label: "Apartment" },
  { id: 4, value: "HOUSE", label: "House" },
];

export const ratingOptions = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "1", label: "1" },
  { id: 3, value: "2", label: "2" },
  { id: 4, value: "3", label: "3" },
  { id: 5, value: "4", label: "4" },
  { id: 6, value: "5", label: "5" },
];

export const priceOptions = [
  { id: 1, value: "", label: "All" },
  { id: 2, value: "LOW_TO_HIGH", label: "Low to high" },
  { id: 3, value: "HIGH_TO_LOW", label: "High to low" },
];
