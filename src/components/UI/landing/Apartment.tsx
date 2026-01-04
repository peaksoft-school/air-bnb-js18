export interface ApartmentData {
  id: number;
  title: string;
  description: string;
  location: string;
  mainImage?: string;
  gallery?: string;
}

export const apartmentsData: ApartmentData[] = [
  {
    id: 1,
    title: "Aska Lara Resort & Spa Hotel",
    description:
      "The Aska Lara Resort & Spa Hotel, which operates on an all-inclusive system, occupies 2 plots separated by a road. The hotel is located in the Lara district, 500 meters from the sea...",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
  },
];
