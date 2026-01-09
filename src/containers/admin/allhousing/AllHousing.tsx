import Select from "../../../components/ui/Select";
import { Card } from "@/components/ui/card/Card";
import type { CardData } from "@/components/ui/card/types";

type AllHousingProps = {
  data: CardData[];
};

export const AllHousing = ({ data }: AllHousingProps) => {
  return (
    <>
      <div className="flex items-center justify-between w-full bg-[#F7F7F7] px-10 pt-11.5">
        <h2 className="text-lg font-semibold text-black">ALL HOUSING</h2>

        <div className="flex items-center gap-4">
          <Select
            label="Filter by:"
            options={["All", "Booked", "Not booked"]}
          />

          <Select label="Sort by:" options={["All", "Popular", "The latest"]} />

          <Select
            label="Filter by home type:"
            options={["All", "Apartment", "House"]}
          />

          <Select
            label="Filter by price:"
            options={["All", "Low to high", "High to low"]}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6  bg-[#F7F7F7] px-10 py-6">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};
