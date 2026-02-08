import { Button } from "@/components/UI/Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { deleteHouse } from "@/store/slices/inner-page-vendor/house/houseThunk";
import type { FC } from "react";

interface PropertyActionsProps {
  houseId: string;
}

export const PropertyActions: FC<PropertyActionsProps> = ({ houseId }) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.houses);

  const handleDelete = () => {
    dispatch(deleteHouse(houseId));
  };

  const handleEdit = () => {
    // обычно тут:
    // navigate(`/houses/edit/${houseId}`)
    console.log("edit", houseId);
  };

  return (
    <div className="flex gap-4 mt-4">
      <Button
        variant="outline"
        className="text-[#DD8A08] border-[#DD8A08]"
        onClick={handleDelete}
        disabled={loading}
      >
        DELETE
      </Button>

      <Button variant="default" onClick={handleEdit}>
        EDIT
      </Button>
    </div>
  );
};