import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card } from "@/components/UI/card/Card";
import { fetchAnnouncementsUser } from "@/store/slices/user/announcementsUser/userAnnouncementsThunk";
import UserNoDataImage from "@/assets/images/user-no-data.png";
import Select from "@/components/UI/Select";
import { Chip } from "@/components/UI/Chip";
import {
  houseTypeOptions,
  priceOptions,
  ratingOptions,
} from "@/utils/constants/user";

type FilterKey = "houseType" | "rating" | "price";

type FilterChip = {
  key: FilterKey;
  value: string;
  label: string;
};

export const UserAnnouncements = () => {
  const { data, isLoading } = useAppSelector(
    (state) => state.announcementsUser,
  );
  const dispatch = useAppDispatch();

  const [houseType, setHouseType] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [filterChips, setFilterChips] = useState<FilterChip[]>([]);

  useEffect(() => {
    dispatch(fetchAnnouncementsUser({ houseType, rating, price }));
  }, [dispatch, houseType, rating, price]);

  const handleChipDelete = (key: FilterKey) => {
    setFilterChips((chips) => chips.filter((chip) => chip.key !== key));

    if (key === "houseType") setHouseType("");
    else if (key === "rating") setRating("");
    else if (key === "price") setPrice("");
  };

  const updateFilterChips = (key: FilterKey, value: string, label: string) => {
    setFilterChips((chips) => {
      if (value === "") return chips.filter((chip) => chip.key !== key);
      const index = chips.findIndex((chip) => chip.key === key);
      const newChip = { key, value, label: `${label}: ${value}` };
      if (index >= 0) {
        const updated = [...chips];
        updated[index] = newChip;
        return updated;
      }
      return [...chips, newChip];
    });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2.5">
        <Select
          label="House type:"
          options={houseTypeOptions}
          value={houseType}
          defaultId={1}
          onChange={(e) => {
            setHouseType(e.target.value);
            updateFilterChips("houseType", e.target.value, "House Type");
          }}
        />
        <Select
          label="Rating:"
          options={ratingOptions}
          value={rating}
          defaultId={1}
          isRating
          onChange={(e) => {
            setRating(e.target.value);
            updateFilterChips("rating", e.target.value, "Rating");
          }}
        />
        <Select
          label="Sort:"
          options={priceOptions}
          value={price}
          defaultId={1}
          onChange={(e) => {
            setPrice(e.target.value);
            updateFilterChips("price", e.target.value, "Price");
          }}
        />
      </div>

      {filterChips.length > 0 && (
        <div className="flex gap-4 items-center h-8.75">
          {filterChips.map((chip) => (
            <Chip key={chip.key} onRemove={() => handleChipDelete(chip.key)}>
              {chip.label}
            </Chip>
          ))}
        </div>
      )}

      {data && data.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-225">
          {data.map((item) => (
            <Card key={item.id} variant="admin" data={item} />
          ))}
        </div>
      ) : (
        <img src={UserNoDataImage} alt="no house" className="w-125 m-auto" />
      )}
    </div>
  );
};
