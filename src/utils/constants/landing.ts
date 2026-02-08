import type { CardDataLanding } from "@/components/UI/card/types";
import ChuiImage from "@/assets/images/regions/chui.jpg";
import BatkenImage from "@/assets/images/regions/batken.jpg";
import JalalabadImage from "@/assets/images/regions/jalalAbad.jpg";
import NarynImage from "@/assets/images/regions/naryn.jpg";
import YssykKolImage from "@/assets/images/regions/issykKol.jpg";
import TalasImage from "@/assets/images/regions/talas.jpg";
import BishkekImage from "@/assets/images/regions/bishkek.jpg";
import OshImage from "@/assets/images/regions/osh.jpg";

export interface PopularApartmentsData {
  id: number;
  title: string;
  description: string;
  location: string;
  mainImage?: string;
  gallery?: string;
  images?: string[];
}

// ragions
export const RAGIONS_IMAGES = [
  { id: 1, src: ChuiImage, span: "col-span-2 row-span-3" },
  { id: 2, src: BatkenImage, span: "col-span-1 row-span-1" },
  { id: 3, src: JalalabadImage, span: "col-span-1 row-span-1" },
  { id: 4, src: NarynImage, span: "col-span-2 row-span-2" },
  { id: 5, src: YssykKolImage, span: "col-span-1 row-span-1" },
  { id: 6, src: TalasImage, span: "col-span-1 row-span-1" },
  { id: 8, src: OshImage, span: "col-span-2 row-span-2" },
  { id: 7, src: BishkekImage, span: "col-span-2 row-span-1" },
];

export const POPULAR_APARTMENTS_DATA: PopularApartmentsData[] = [
  {
    id: 1,
    title: "Aska Lara Resort & Spa Hotel",
    description:
      "The Aska Lara Resort & Spa Hotel, which operates on an all-inclusive system, occupies 2 plots separated by a road. The hotel is located in the Lara district, 500 meters from the sea...",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    ],
  },
];

// popular houses
export const POPULAR_HOUSES_DATA: CardDataLanding[] = [
  {
    id: 1,
    images: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    title: "Cozy Guest House",
    address: "Bishkek, Kyrgyzstan",
    price: 45,
    rating: 4.8,
  },
  {
    id: 2,
    images: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Modern Apartment Center",
    address: "Osh, Kyrgyzstan",
    price: 60,
    rating: 4.6,
  },
  {
    id: 3,
    images: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    title: "Mountain View House",
    address: "Karakol, Kyrgyzstan",
    price: 75,
    rating: 4.9,
  },
  {
    id: 4,
    images: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    title: "Minimal Loft",
    address: "Bishkek, Kyrgyzstan",
    price: 55,
    rating: 4.5,
  },
  {
    id: 5,
    images: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    title: "Quiet Country House",
    address: "Cholpon-Ata, Issyk-Kul",
    price: 90,
    rating: 4.7,
  },
];
