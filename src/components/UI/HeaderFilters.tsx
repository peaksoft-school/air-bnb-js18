import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { fetchHouses } from "../../store/slices/houses/housesThunks";
import {
  REGION_SORT_OPTIONS,
  POPULAR_SORT_OPTIONS,
  HOUSE_TYPE_OPTIONS,
  PRICE_FILTER_OPTIONS,
} from "../../utils/constants/user";
import Select from "./Select";
import { Chip } from "./Chip";
import type { Filters } from "@/store/slices/houses/types";

export const HeaderFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houses, loading } = useSelector((state: RootState) => state.houses);

  const [filters, setFilters] = useState<Filters>({
    region: undefined,
    popular: undefined,
    houseType: undefined,
    price: undefined,
  });

  useEffect(() => {
    dispatch(fetchHouses(filters));
  }, [dispatch, filters]);

  const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearAll = () => {
    setFilters({
      region: undefined,
      popular: undefined,
      houseType: undefined,
      price: undefined,
    });
  };

  return (
    <div className="px-25 py-2">
      <div className="flex items-center gap-4">
        <h1 className="font-[inter] font-medium text-2xl">
          {filters.region || filters.houseType || "Houses"}{" "}
          <span className="text-gray-500 text-xl">({houses.length})</span>
        </h1>

        <Select
          options={REGION_SORT_OPTIONS}
          label="Region:"
          onChange={(v) => update("region", v as Filters["region"])}
        />
        <Select
          options={POPULAR_SORT_OPTIONS}
          label="Sort by Popularity:"
          onChange={(v) => update("popular", v as Filters["popular"])}
        />
        <Select
          options={HOUSE_TYPE_OPTIONS}
          label="Filter by Home Type:"
          onChange={(v) => update("houseType", v as Filters["houseType"])}
        />
        <Select
          options={PRICE_FILTER_OPTIONS}
          label="Filter by Price:"
          onChange={(v) => update("price", v as Filters["price"])}
        />
      </div>

      <div className="mt-10 flex gap-4">
        <Chip children="Popular" />
        <Chip children="Apartment" />
        <button className="text-gray-400 underline" onClick={clearAll}>
          Clear all
        </button>
      </div>

      {loading && <p className="mt-5">Loading...</p>}

      <div className="mt-5 grid grid-cols-3 gap-4">
        {houses.map((house) => (
          <div key={house.id} className="border p-3 rounded-md">
            <img
              src={house.images[0]}
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
