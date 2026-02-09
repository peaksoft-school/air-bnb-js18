import { PropertyGallery } from "./PropertyGallery";
import type { House } from "@/store/slices/inner-page-vendor/house/types";
import { PropertyInfo } from "./PropertyInfo";

interface PropertyCardProps {
  house: House;
}

export const PropertyCard = ({ house }: PropertyCardProps) => {
  return (
    <div>
      <h1 className="text-xl font-medium">{house.title}</h1>
      <div className="flex gap-16.5">
        <PropertyGallery images={house.images} />

        <div>
          <PropertyInfo house={house} />
        </div>
      </div>
    </div>
  );
};