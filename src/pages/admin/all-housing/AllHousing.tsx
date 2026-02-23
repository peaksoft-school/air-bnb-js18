import { useEffect, useState } from "react";
import { Card } from "@/components/UI/card/Card";
import Select from "@/components/UI/Select";
import {
  BOOKIING_FILTER_OPTIONS,
  HOUSE_TYPE_OPTIONS,
  POPULAR_SORT_OPTIONS,
  PRICE_FILTER_OPTIONS,
} from "@/utils/constants/admin/allHousing";
import AdminNoDataImage from "@/assets/images/admin-no-data.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getAllFilteredHousing,
  rejectCardAllHousing,
  acceptCardAllHousing,
  deleteCardAllHousing,
} from "@/store/slices/admin/all-housing/allHousingThunk";
import type { CardData } from "@/components/UI/card/types";
import RejectedModal from "@/components/UI/admin/RejectModal";

type SelectChangeEvent = {
  target: {
    value: string;
  };
};

const AllHousing = () => {
  const { allHouses } = useAppSelector((state) => state.allHousing);

  const [filterOption, setFilterOption] = useState(
    BOOKIING_FILTER_OPTIONS[0]?.value || "",
  );
  const [sortByOption, setSortByOption] = useState(
    POPULAR_SORT_OPTIONS[0]?.value || "",
  );
  const [homeTypeOption, setHomeTypeOption] = useState(
    HOUSE_TYPE_OPTIONS[0]?.value || "",
  );
  const [priceFilterOption, setPriceFilterOption] = useState(
    PRICE_FILTER_OPTIONS[0]?.value || "",
  );

  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [selectedHouseId, setSelectedHouseId] = useState<
    number | null | string
  >(null);

  const dispatch = useAppDispatch();

  const handleChangeFilterOptionValue = (e: SelectChangeEvent) =>
    setFilterOption(e.target.value);

  const handleChangeSortOptionValue = (e: SelectChangeEvent) =>
    setSortByOption(e.target.value);

  const handleChangeHomeTypeValue = (e: SelectChangeEvent) =>
    setHomeTypeOption(e.target.value);

  const handleChangePriceOptionValue = (e: SelectChangeEvent) =>
    setPriceFilterOption(e.target.value);

  const getCurrentFilters = () => ({
    status: filterOption,
    houseType: homeTypeOption,
    rating: sortByOption,
    price: priceFilterOption,
  });

  const handleOpenRejectModal = (houseId: number | string) => {
    setSelectedHouseId(houseId);
    setIsRejectModalOpen(true);
  };

  const handleCloseRejectModal = () => {
    setIsRejectModalOpen(false);
    setRejectReason("");
    setSelectedHouseId(null);
  };

  const handleSendReject = () => {
    if (selectedHouseId !== null && rejectReason.trim()) {
      dispatch(
        rejectCardAllHousing({
          houseId: selectedHouseId,
          massage: rejectReason,
          getData: getCurrentFilters(),
        }),
      );
      handleCloseRejectModal();
    }
  };

  const menuActions = [
    {
      label: "Accept",
      onClick: (data: CardData) => {
        dispatch(
          acceptCardAllHousing({
            id: data.id,
            getData: getCurrentFilters(),
          }),
        );
      },
    },
    {
      label: "Reject",
      onClick: (data: CardData) => {
        handleOpenRejectModal(data.id);
      },
    },
    {
      label: "Delete",
      onClick: (data: CardData) => {
        dispatch(
          deleteCardAllHousing({
            id: data.id,
            getData: getCurrentFilters(),
          }),
        );
      },
      className: "text-red-600 hover:bg-red-50",
    },
  ];

  useEffect(() => {
    dispatch(
      getAllFilteredHousing({
        status: filterOption,
        houseType: homeTypeOption,
        rating: sortByOption,
        price: priceFilterOption,
      }),
    );
  }, [dispatch, filterOption, homeTypeOption, sortByOption, priceFilterOption]);

  return (
    <>
      <div className="flex items-center justify-between w-full bg-[#F7F7F7] px-10 pt-11.5">
        <h2 className="text-lg font-semibold text-black">ALL HOUSING</h2>

        <div className="flex items-center gap-4">
          <Select
            value={filterOption}
            label="Filter by:"
            onChange={handleChangeFilterOptionValue}
            defaultId={1}
            isValueAsId
            options={BOOKIING_FILTER_OPTIONS}
          />

          <Select
            value={sortByOption}
            label="Sort by:"
            onChange={handleChangeSortOptionValue}
            defaultId={1}
            isValueAsId
            options={POPULAR_SORT_OPTIONS}
          />

          <Select
            value={homeTypeOption}
            label="Filter by home type:"
            onChange={handleChangeHomeTypeValue}
            defaultId={1}
            isValueAsId
            options={HOUSE_TYPE_OPTIONS}
          />

          <Select
            value={priceFilterOption}
            label="Filter by price:"
            onChange={handleChangePriceOptionValue}
            defaultId={1}
            isValueAsId
            options={PRICE_FILTER_OPTIONS}
          />
        </div>
      </div>

      {allHouses?.length > 0 ? (
        <div className="grid grid-cols-6 gap-5 bg-[#F7F7F7] px-10 py-6">
          {allHouses?.map((item) => (
            <Card
              key={item.id}
              data={item}
              variant="admin"
              menuActions={menuActions}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-120 flex flex-col items-center justify-center m-auto">
          <img src={AdminNoDataImage} alt="no data" className="width-[30rem]" />
        </div>
      )}

      <RejectedModal
        isOpen={isRejectModalOpen}
        onClose={handleCloseRejectModal}
        value={rejectReason}
        onChange={(e) => setRejectReason(e.target.value)}
        sendRequest={handleSendReject}
      />
    </>
  );
};

export default AllHousing;
