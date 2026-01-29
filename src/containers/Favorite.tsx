import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card } from "@/components/UI/card/Card";
import { getAllFavorites, toggleFavorite } from "@/store/slices/favorite/favoriteThunk";

export const Favorite = () => {
  const dispatch = useAppDispatch();
  const { favorite, isLoading } = useAppSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(getAllFavorites());
  }, [dispatch]);

  if (isLoading) return <div className="py-10">Loading...</div>;

  return (
    <div className="w-full px-25 py-10">
      <h1 className="mb-6 text-[rgba(54,54,54,1)] font-medium text-[20px] uppercase">
        Favorite{" "}
        <span className="text-[#646464] font-normal text-[18px]">
          ({favorite.length})
        </span>
      </h1>

      {favorite.length === 0 && (
        <p className="text-[#828282]">No favorites yet</p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favorite.map((item) => (
          <Card
            key={item.id}
            data={item}
            isFavorite={true}
            onToggleFavorite={(id) => dispatch(toggleFavorite(id))}
          />
        ))}
      </div>
    </div>
  );
};
