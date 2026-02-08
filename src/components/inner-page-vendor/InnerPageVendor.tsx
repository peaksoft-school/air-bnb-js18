import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getHouse } from "@/store/slices/inner-page-vendor/house/houseThunk";
import { PropertyCard } from "./HouseCard/PropertyCard";
import { BookedSection } from "./booked/Booked";
import { FavoritesSection } from "./favorites/Favorites";
import { Reviews } from "./feedback/Reviews";
import Breadcrumbs from "../UI/BreadCrumbs";
import { INNERPAGE_BREADCRUMBS } from "@/utils/constants/breadcrumbs";
import { NotFound } from "@/layout/NotFound";

export const InnerPageVendor = () => {
  const { houseId } = useParams<{ houseId: string }>();
  const dispatch = useAppDispatch();
  const { house, loading, error } = useAppSelector((state) => state.houses);

  useEffect(() => {
    if (houseId) {
      dispatch(getHouse(houseId));
    }
  }, [dispatch, houseId]);

  if (loading) return <p className="m-auto text-gray-400">Loading house…</p>;
  if (error) return <p className="mt-6 text-red-500">{error}</p>;
  if (!house) return <NotFound/>;

  return (
    <div className="mx-auto p-10">
      <Breadcrumbs
        links={[...INNERPAGE_BREADCRUMBS, { label: house.title, href: "" }]}
      />
      <PropertyCard house={house} />
      <BookedSection houseId={house.id} />
      <FavoritesSection houseId={house.id} />
      <Reviews />
    </div>
  );
};
