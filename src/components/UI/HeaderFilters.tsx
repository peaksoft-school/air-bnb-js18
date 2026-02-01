import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { fetchHouses, type Filters } from "../../store/slices/houses/housesThunks";
import {
  REGION_SORT_OPTIONS,
  POPULAR_SORT_OPTIONS,
  HOUSE_TYPE_OPTIONS,
  PRICE_FILTER_OPTIONS,
} from "../../utils/constants/user";
import Select from "./Select";
import { Chip } from "./Chip";

export const HeaderFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houses } = useSelector((state: RootState) => state.houses);

  const [filters, setFilters] = useState<Filters>({
    region: "",
    popular: "",
    houseType: "",
    price: "",
  });

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const update = (key: keyof Filters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    dispatch(fetchHouses(newFilters));
  };

  const clearAll = () => {
    const resetFilters: Filters = {
      region: "",
      popular: "",
      houseType: "",
      price: "",
    };
    setFilters(resetFilters);
    dispatch(fetchHouses(resetFilters));
  };

  return (
    <div className="px-25">
      <div className="flex items-center gap-4">
        <h1 className="font-[inter] font-medium text-2xl">
          NARYN<span className="text-gray-500 text-xl">({houses.length})</span>
        </h1>

        <Select
          options={REGION_SORT_OPTIONS}
          label="Sort by:"
          onChange={(v) => update("region", v)}
        />
        <Select
          options={POPULAR_SORT_OPTIONS}
          label="Sort by:"
          onChange={(v) => update("popular", v)}
        />
        <Select
          options={HOUSE_TYPE_OPTIONS}
          label="Filter by home type:"
          onChange={(v) => update("houseType", v)}
        />
        <Select
          options={PRICE_FILTER_OPTIONS}
          label="Filter by price:"
          onChange={(v) => update("price", v)}
        />
      </div>

      <div className="mt-10 flex gap-4">
        <Chip children="Popular" />
        <Chip children="Apartment" />
        <button className="text-gray-400 underline" onClick={clearAll}>
          Clear all
        </button>
      </div>

      {/* {loading && <p>Loading...</p>} */}

      <div className="mt-5 grid grid-cols-3 gap-4">
        {houses.map((house) => (
          <div key={house.id} className="border p-3 rounded-md">
            <img
              src={house.image}
              alt={house.title}
              className="w-full h-40 object-cover"
            />
            <h2 className="mt-2 font-medium">{house.title}</h2>
            <p>Price: ${house.price}</p>
            <p>Rating: {house.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
