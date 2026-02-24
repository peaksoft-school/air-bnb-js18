import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getModerationHouses } from "@/store/slices/user/moderationHouses/moderationHousesThunk";
import { Card } from "@/components/UI/card/Card";
import UserNoDataImage from "@/assets/images/user-no-data.png";

export const OnModeration = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.moderation);

  useEffect(() => {
    dispatch(getModerationHouses());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {data && data?.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <Card key={item.id} variant="admin" data={item} />
          ))}
        </div>
      ) : (
        <img src={UserNoDataImage} alt="no house" className="w-125 m-auto" />
      )}
    </>
  );
};
