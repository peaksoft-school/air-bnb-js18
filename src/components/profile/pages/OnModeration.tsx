import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getModerationHouses } from "@/store/slices/user/moderationHouses/moderationHousesThunk";
import { Card } from "@/components/UI/card/Card";

export const OnModeration = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.moderation);

  useEffect(() => {
    dispatch(getModerationHouses());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-6 w-225">
      {data.map((item) => (
        <Card key={item.id} variant="admin" data={item} />
      ))}
    </div>
  );
};