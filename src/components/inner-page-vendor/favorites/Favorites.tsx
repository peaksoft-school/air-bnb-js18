import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FavoriteUser } from "./FavoriteUser";
import { getFavorites } from "@/store/slices/inner-page-vendor/inFavorites/favoritesThunk";
interface FavoritesSectionProps {
  houseId: string;
}

export const FavoritesSection = ({ houseId }: FavoritesSectionProps) => {
  const dispatch = useAppDispatch();
  const { favorites, loading, error } = useAppSelector(
    (state) => state.favorites,
  );

  useEffect(() => {
    if (houseId) {
      dispatch(getFavorites(houseId));
    }
  }, [dispatch, houseId]);

  if (loading) return <p className="mt-6 text-gray-400">Loading favorites…</p>;
  if (error) return <p className="mt-6 text-red-500">{error}</p>;
  if (!favorites.length)
    return <p className="mt-6 text-gray-400">No favorites yet.</p>;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-medium mb-4">IN FAVORITES</h3>
      <div className="grid grid-cols-5 gap-7.5">
        {favorites.map((favorite) => (
          <FavoriteUser key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};
