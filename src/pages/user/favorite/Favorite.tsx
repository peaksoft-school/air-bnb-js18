import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card } from "@/components/UI/card/Card";
import {
  getAllFavorites,
  toggleFavorite,
} from "@/store/slices/user/favorite/favoriteThunk";
import UserNoDataImage from "@/assets/images/user-no-data.png";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import { useNavigate } from "react-router";

const Favorite = () => {
  const { favorite, isLoading } = useAppSelector((state) => state.favorite);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllFavorites());
  }, [dispatch]);

  const handleFavorite = (id: number | string) => dispatch(toggleFavorite(id));

  const handleOpenHouse = (id: number | string) => {
    navigate(`/user/inner-region/house/${id}`);
  };

  if (isLoading) return <div className="py-10">Loading...</div>;

  const breadcrumbLinks = [
    { href: "/", label: "Main" },
    { href: "/user/favorite", label: "Favorite" },
  ];

  return (
    <div className="w-full px-25 py-10">
      <Breadcrumbs links={breadcrumbLinks} />

      <h1 className="mb-6 text-[rgba(54,54,54,1)] font-medium text-[20px] uppercas flex items-center">
        Favorite
        <span className="text-[#646464] font-normal text-[18px]">
          ({favorite?.length})
        </span>
      </h1>

      {favorite?.length !== 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorite.map((item) => (
            <Card
              key={item.id}
              data={item}
              onToggleFavorite={() => handleFavorite(item.id)}
              onClick={() => handleOpenHouse(item.id)}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col items-center justify-center m-auto">
            <img src={UserNoDataImage} alt="no data" className="w-120 h-120" />
          </div>

          <p className="text-[#828282] text-center">No favorites yet</p>
        </>
      )}
    </div>
  );
};

export default Favorite;
