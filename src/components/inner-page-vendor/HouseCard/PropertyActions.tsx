import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "@/components/UI/Button";
import { Modal } from "@/components/UI/Modal";
import {
  deleteHouse,
  updateHouse,
} from "@/store/slices/inner-page-vendor/house/houseThunk";
import type { HouseInnerPage } from "@/store/slices/inner-page-vendor/house/types";

interface PropertyActionsProps {
  houseId: string;
}

export const PropertyActions = ({ houseId }: PropertyActionsProps) => {
  const dispatch = useAppDispatch();
  const { house, loadingDelete, loadingUpdate } = useAppSelector(
    (state) => state.houses,
  );

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<HouseInnerPage | null>(null);

  const handleDeleteClick = () => setIsDeleteModalOpen(true);
  const handleConfirmDelete = () => {
    dispatch(deleteHouse(houseId));
    setIsDeleteModalOpen(false);
  };
  const handleCancelDelete = () => setIsDeleteModalOpen(false);

  const handleEditClick = () => {
    if (!house) return;
    setEditData({ ...house }); 
    setIsEditModalOpen(true);
  };

  const handleEditChange = (key: keyof HouseInnerPage, value: any) => {
    if (!editData) return;
    setEditData({ ...editData, [key]: value });
  };

  const handleConfirmEdit = () => {
    if (!editData) return;
    dispatch(updateHouse({ houseId, data: editData }));
    setIsEditModalOpen(false);
  };

  const handleCancelEdit = () => setIsEditModalOpen(false);

  return (
    <>
      <div className="flex gap-4 mt-4">
        <Button
          variant="outline"
          className="text-[#DD8A08] border-[#DD8A08]"
          onClick={handleDeleteClick}
          disabled={loadingDelete}
        >
          DELETE
        </Button>

        <Button
          variant="default"
          onClick={handleEditClick}
          disabled={loadingUpdate || !house}
        >
          EDIT
        </Button>
      </div>

      <Modal open={isDeleteModalOpen} onClose={handleCancelDelete}>
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">
            Вы уверены, что хотите удалить этот объект?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              onClick={handleConfirmDelete}
              disabled={loadingDelete}
            >
              Удалить
            </Button>
            <Button variant="outline" onClick={handleCancelDelete}>
              Отмена
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={isEditModalOpen} onClose={handleCancelEdit}>
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
              <Button variant="outline" onClick={handleCancelEdit}>
                Отмена
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
