import type { Favorite } from "@/store/slices/inner-page-vendor/inFavorites/types";

interface FavoriteUserProps {
  favorite: Favorite;
}

export const FavoriteUser = ({ favorite }: FavoriteUserProps) => {
  const { userResponse, createdAt } = favorite;

  return (
    <div className="flex items-center gap-3 p-3 border-none">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
        {userResponse.image ? "Image" : "No image"}
      </div>

      <div className="flex-1">
        <p className="text-[16px] font-medium">
          {userResponse.fullName || "Unknown User"}
        </p>
        <p className="text-[16px] text-[#838383]">
          {userResponse.email || "No email"}
        </p>
        <span className="text-[16px]">
          {createdAt
            ? new Date(createdAt).toLocaleDateString()
            : "Unknown date"}
        </span>
      </div>
    </div>
  );
};