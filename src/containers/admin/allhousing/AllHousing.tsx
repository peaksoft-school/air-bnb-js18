import { Card } from "@/components/UI/card/Card";
import Select from "@/components/UI/Select";
import { housingData } from "@/utils/constants/housingData";

const AllHousing = () => {
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
        {housingData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default AllHousing;
