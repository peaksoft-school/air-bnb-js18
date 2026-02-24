import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getFilteredHouses,
  toggleFilteredFavorite,
} from "@/store/slices/user/houses/housesThunk";
import {
  REGION_SORT_OPTIONS,
  POPULAR_SORT_OPTIONS,
  HOUSE_TYPE_OPTIONS,
  PRICE_FILTER_OPTIONS,
} from "@/utils/constants/user";
import Select from "../../components/UI/Select";
import { Chip } from "../../components/UI/Chip";
import { useLocation } from "react-router";
import UserNoDataImage from "@/assets/images/user-no-data.png";
import { Pagination } from "../../components/UI/Pagination";
import { Card } from "../../components/UI/card/Card";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";

type SelectChangeEvent = {
  target: {
    value: string;
  };
};

const UserRegionsFiltered = () => {
  const dispatch = useAppDispatch();

  const { houses, totalPages, loading } = useAppSelector(
    (state) => state.houses,
  );

  const { state } = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(
    state?.region?.toUpperCase()?.replace(/-/g, "_") ||
      REGION_SORT_OPTIONS[0]?.value ||
      "",
  );
  const [sortByOption, setSortByOption] = useState(
    state?.popular || POPULAR_SORT_OPTIONS[0]?.value || "",
  );
  const [homeTypeOption, setHomeTypeOption] = useState(
    state?.apartment || HOUSE_TYPE_OPTIONS[0]?.value || "",
  );
  const [priceFilterOption, setPriceFilterOption] = useState(
    PRICE_FILTER_OPTIONS[0]?.value || "",
  );

  const handleChangeSortsOptionValue = (e: SelectChangeEvent) =>
    setSortOption(e.target.value);
  const handleChangeSortOptionValue = (e: SelectChangeEvent) =>
    setSortByOption(e.target.value);
  const handleChangeHomeTypeValue = (e: SelectChangeEvent) =>
    setHomeTypeOption(e.target.value);
  const handleChangePriceOptionValue = (e: SelectChangeEvent) =>
    setPriceFilterOption(e.target.value);

  const handleChange = (value: number) => setCurrentPage(value);

  const pageSize = 16;

  useEffect(() => {
    dispatch(
      getFilteredHouses({
        region: sortOption,
        houseType: homeTypeOption,
        popular: sortByOption,
        rating: sortByOption,
        price: priceFilterOption,
        currentPage,
        pageSize,
      }),
    );
  }, [
    dispatch,
    sortOption,
    homeTypeOption,
    sortByOption,
    priceFilterOption,
    currentPage,
  ]);

  const handleToggleFavorite = (id: number | string) =>
    dispatch(
      toggleFilteredFavorite({
        region: sortOption,
        houseType: homeTypeOption,
        popular: sortByOption,
        rating: sortByOption,
        price: priceFilterOption,
        currentPage,
        pageSize,
        id,
      }),
    );

  const handleClearAll = () => {
    setSortOption(REGION_SORT_OPTIONS[0]?.value || "");
    setSortByOption(POPULAR_SORT_OPTIONS[0]?.value || "");
    setHomeTypeOption(HOUSE_TYPE_OPTIONS[0]?.value || "");
    setPriceFilterOption(PRICE_FILTER_OPTIONS[0]?.value || "");
  };

  const handleRemoveChip = (filterType: "popular" | "houseType" | "price") => {
    switch (filterType) {
      case "popular":
        setSortByOption(POPULAR_SORT_OPTIONS[0]?.value || "");
        break;
      case "houseType":
        setHomeTypeOption(HOUSE_TYPE_OPTIONS[0]?.value || "");
        break;
      case "price":
        setPriceFilterOption(PRICE_FILTER_OPTIONS[0]?.value || "");
        break;
    }
  };

  const getFilterLabel = (value: string, options: any[]) => {
    const option = options.find((opt) => opt.value === value);
    return option?.label || value;
  };

  const isActiveFilter = (value: string, defaultValue: string) =>
    value && value !== defaultValue && value !== "All";

  const activeFilters = [
    isActiveFilter(sortByOption, POPULAR_SORT_OPTIONS[0]?.value) && {
      type: "popular" as const,
      label: getFilterLabel(sortByOption, POPULAR_SORT_OPTIONS),
      value: sortByOption,
    },

    isActiveFilter(homeTypeOption, HOUSE_TYPE_OPTIONS[0]?.value) && {
      type: "houseType" as const,
      label: getFilterLabel(homeTypeOption, HOUSE_TYPE_OPTIONS),
      value: homeTypeOption,
    },

    isActiveFilter(priceFilterOption, PRICE_FILTER_OPTIONS[0]?.value) && {
      type: "price" as const,
      label: getFilterLabel(priceFilterOption, PRICE_FILTER_OPTIONS),
      value: priceFilterOption,
    },
  ].filter(Boolean);

  const getRegionLabel = (regionValue: string) => {
    if (!regionValue || regionValue === "All") return null;
    return regionValue
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const breadcrumbLinks = [{ href: "/", label: "Main" }];

  const regionLabel = getRegionLabel(sortOption);
  if (regionLabel) {
    breadcrumbLinks.push({
      href: "#",
      label: regionLabel,
    });
  }

  return (
    <div className="px-25 py-2">
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="flex items-center gap-4">
        <h1 className="font-[inter] font-medium text-2xl">
          {getRegionLabel(sortOption) || "Houses"}{" "}
          <span className="text-gray-500 text-xl">({houses?.length || 0})</span>
        </h1>

        <Select
          value={sortOption}
          options={REGION_SORT_OPTIONS}
          label="Region:"
          onChange={handleChangeSortsOptionValue}
        />
        <Select
          value={sortByOption}
          options={POPULAR_SORT_OPTIONS}
          label="Sort by Popularity:"
          onChange={handleChangeSortOptionValue}
        />
        <Select
          value={homeTypeOption}
          options={HOUSE_TYPE_OPTIONS}
          label="Filter by Home Type:"
          onChange={handleChangeHomeTypeValue}
        />
        <Select
          value={priceFilterOption}
          options={PRICE_FILTER_OPTIONS}
          label="Filter by Price:"
          onChange={handleChangePriceOptionValue}
        />
      </div>

      {activeFilters?.length > 0 && (
        <div className="mt-10 flex gap-4">
          {activeFilters?.map((filter: any) => (
            <Chip
              key={filter.type}
              onRemove={() => handleRemoveChip(filter.type)}
            >
              {filter.label}
            </Chip>
          ))}

          <button className="text-gray-400 underline" onClick={handleClearAll}>
            Clear all
          </button>
        </div>
      )}

      {loading && <p className="mt-5">Loading...</p>}

      {houses?.length !== 0 ? (
        <div className="mt-5 grid grid-cols-5 gap-4">
          {houses?.map((house) => (
            <Card
              key={house.id}
              data={house}
              variant="default"
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <img src={UserNoDataImage} alt="no data" className="w-120 h-120" />
        </div>
      )}

      {houses?.length > 0 && totalPages && (
        <div className="pagination-box">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default UserRegionsFiltered;
