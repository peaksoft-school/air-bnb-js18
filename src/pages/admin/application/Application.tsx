import { useEffect, useState } from "react";
import { Card } from "@/components/UI/card/Card";
import { Pagination } from "@/components/UI/Pogination";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getAllApplication,
  acceptCardApplication,
  deleteCardApplication,
  rejectCardApplication,
} from "@/store/slices/admin/application/applicationThunk";
import AdminNoDataImage from "@/assets/images/admin-no-data.png";
import type { CardData } from "@/components/UI/card/types";
import RejectedModal from "@/components/UI/admin/RejectModal";

const Application = () => {
  const { houses, totalPages } = useAppSelector((state) => state.application);

  const [currentPage, setCurrentPage] = useState(1);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [selectedHouseId, setSelectedHouseId] = useState<number | null>(null);

  const pageSize = 18;

  const dispatch = useAppDispatch();

  const getCurrentParams = () => ({
    pageSize,
    currentPage,
  });

  const handleOpenRejectModal = (houseId: number) => {
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
        rejectCardApplication({
          houseId: selectedHouseId,
          massage: rejectReason,
          getData: getCurrentParams(),
        }),
      );

      handleCloseRejectModal();
    }
  };

  useEffect(() => {
    dispatch(getAllApplication({ pageSize, currentPage }));
  }, [dispatch, currentPage]);

  const menuActions = [
    {
      label: "Accept",
      onClick: (data: CardData) => {
        dispatch(
          acceptCardApplication({
            id: data.id,
            getData: getCurrentParams(),
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
          deleteCardApplication({
            id: data.id,
            getData: getCurrentParams(),
          }),
        );
      },
      className: "text-red-600 hover:bg-red-50",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between w-full bg-[#F7F7F7] px-10 pt-11.5">
        <h2 className="text-lg font-semibold text-black">APPLICATION</h2>
      </div>

      {houses?.length > 0 ? (
        <div className="grid grid-cols-6 gap-5 bg-[#F7F7F7] px-10 py-6">
          {houses?.map((item) => (
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

      {houses?.length > 0 && totalPages && (
        <div className="width-full flex justify-center mt-8 pb-28">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={setCurrentPage}
          />
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

export default Application;
