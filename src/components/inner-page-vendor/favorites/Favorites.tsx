import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getFavorites } from "@/store/slices/inner-page-vendor/inFavorites/favoritesThunk";
import type { Favorite } from "@/store/slices/inner-page-vendor/inFavorites/types";

interface FavoritesSectionProps {
  houseId: string;
}

export const Favorites = ({ houseId }: FavoritesSectionProps) => {
  const dispatch = useAppDispatch();
  const { favorites, loading, error } = useAppSelector(
    (state) => state.favorites,
  );

  useEffect(() => {
    if (houseId) dispatch(getFavorites(houseId));
  }, [dispatch, houseId]);

  if (loading) return <p className="mt-6 text-gray-400">Loading favorites…</p>;
  if (error) return <p className="mt-6 text-red-500">{error}</p>;
  if (!favorites.length)
    return <p className="mt-6 text-gray-400">No favorites yet.</p>;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-medium mb-4">IN FAVORITES</h3>
      <div className="grid grid-cols-5 gap-7.5">
        {favorites.map((favorite: Favorite) => (
          <div key={favorite.id} className="flex items-center gap-3 p-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
              {favorite.userResponse.image ? "Image" : "No image"}
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-medium">
                {favorite.userResponse.fullName || "Unknown User"}
              </p>
              <p className="text-[16px] text-[#838383]">
                {favorite.userResponse.email || "No email"}
              </p>
              <span className="text-[16px]">
                {favorite.createdAt
                  ? new Date(favorite.createdAt).toLocaleDateString()
                  : "Unknown date"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
