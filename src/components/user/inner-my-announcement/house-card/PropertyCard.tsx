import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "@/components/UI/Button";
import { Modal } from "@/components/UI/Modal";
import {
  deleteHouse,
  updateHouse,
} from "@/store/slices/inner-page-vendor/house/houseThunk";
import type {
  House,
  HouseInnerPage,
} from "@/store/slices/inner-page-vendor/house/types";

interface PropertyCardProps {
  house: House;
}

export const PropertyCard = ({ house }: PropertyCardProps) => {
  const { loadingDelete, loadingUpdate } = useAppSelector(
    (state) => state.housesVendor,
  );
  const dispatch = useAppDispatch();

  const [activeImage, setActiveImage] = useState(house.images[0]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<HouseInnerPage | null>(null);

  const previewImages = house.images
    .filter((img) => img !== activeImage)
    .slice(0, 3);

  const handleEditChange = (key: keyof HouseInnerPage, value: unknown) => {
    if (!editData) return;
    setEditData({ ...editData, [key]: value });
  };

  const handleConfirmEdit = () => {
    if (!editData) return;
    dispatch(updateHouse({ houseId: house.id, data: editData }));
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-xl font-medium">{house.title}</h1>

      <div className="flex gap-16.5">
        <div className="mt-6 flex flex-col gap-5">
          <div className="overflow-hidden w-157.5 h-126.75">
            <img
              src={activeImage}
              alt="Main view"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-5">
            {previewImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(img)}
                className="overflow-hidden cursor-pointer border-2 w-49.25 h-34.25"
              >
                <img
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-13 pl-20">
          <div className="flex gap-5">
            <span className="px-3 py-1 bg-[#FFF0F6] border border-[#FFCBE0] text-sm">
              {house.houseType?.charAt(0)?.toUpperCase() +
                house.houseType?.slice(1)?.toLowerCase()}
            </span>
            <span className="px-3 py-1 bg-[#FFF0F6] border border-[#FFCBE0] text-sm">
              {house.maxGuests} Guests
            </span>
          </div>

          <div className="pt-5">
            <h1 className="text-xl font-medium">{house.title}</h1>
            <p className="text-[#838383] mt-2">
              {house.address}, {house.province}, {house.region}
            </p>
          </div>

          <p className="text-[#363636] text-[16px] leading-relaxed pt-5 max-w-135.5">
            {house.description}
          </p>

          <div className="flex gap-4 mt-12">
            <Button
              variant="outline"
              className="text-[#DD8A08] border-[#DD8A08]"
              onClick={() => setIsDeleteModalOpen(true)}
              disabled={loadingDelete}
            >
              DELETE
            </Button>
            <Button
              variant="default"
              onClick={() => {
                setEditData({ ...house } as HouseInnerPage);
                setIsEditModalOpen(true);
              }}
              disabled={loadingUpdate}
            >
              EDIT
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">
            Вы уверены, что хотите удалить этот объект?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              onClick={() => {
                dispatch(deleteHouse(house.id));
                setIsDeleteModalOpen(false);
              }}
              disabled={loadingDelete}
            >
              Удалить
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Отмена
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        {editData && (
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Редактировать объект</h3>
            <input
              type="text"
              value={editData.title}
              onChange={(e) => handleEditChange("title", e.target.value)}
              placeholder="Title"
              className="border p-2 rounded"
            />
            <textarea
              value={editData.description}
              onChange={(e) => handleEditChange("description", e.target.value)}
              placeholder="Description"
              className="border p-2 rounded"
            />
            <input
              type="number"
              value={editData.price}
              onChange={(e) =>
                handleEditChange("price", Number(e.target.value))
              }
              placeholder="Price"
              className="border p-2 rounded"
            />
            <div className="flex justify-end gap-4 mt-4">
              <Button onClick={handleConfirmEdit} disabled={loadingUpdate}>
                Сохранить
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsEditModalOpen(false)}
              >
                Отмена
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
