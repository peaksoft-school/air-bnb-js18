import type { House } from "@/store/slices/inner-page-vendor/house/types";
import { PropertyActions } from "./PropertyActions";

interface PropertyInfoProps {
  house: House;
}

export function PropertyInfo({ house }: PropertyInfoProps) {
  return (
    <div className="pt-13 pl-20">
      <div className="flex gap-5">
        <span className="px-3 py-1 bg-[#FFF0F6] border border-[#FFCBE0] text-sm">
          {house.houseType.charAt(0).toUpperCase() +
            house.houseType.slice(1).toLowerCase()}
        </span>
        <span className="px-3 py-1 bg-[#FFF0F6] border border-[#FFCBE0] text-sm">
          {house.maxOfGuests} Guests
        </span>
      </div>

      <div className="pt-5">
        <h1 className="text-xl font-medium">{house.title}</h1>
        <p className="text-[#838383] mt-2">
          {house.address}, {house.province}, {house.region}
        </p>
      </div>

      <div className="w-max-135.5 h-21 pt-5">
        <p className="text-[#363636] text-[16px] leading-relaxed">
          {house.description}
        </p>
      </div>

      <div className="flex gap-5 pt-12">
        <PropertyActions houseId={house.id} />
      </div>
    </div>
  );
}
