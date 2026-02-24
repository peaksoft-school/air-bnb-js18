import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getHouse } from "@/store/slices/inner-page-vendor/house/houseThunk";
import { INNERPAGE_BREADCRUMBS } from "@/utils/constants/breadcrumbs";
import { NotFound } from "@/layout/NotFound";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import { PropertyCard } from "@/components/user/inner-my-announcement/house-card/PropertyCard";
import { Booked } from "@/components/user/inner-my-announcement/booked/Booked";
import { Favorites } from "@/components/user/inner-my-announcement/favorites/Favorites";
import { Reviews } from "@/components/user/inner-my-announcement/feedback/Reviews";

const InnerMyAnnouncement = () => {
  const { houseId } = useParams<{ houseId: string }>();

  const dispatch = useAppDispatch();

  const { house, loading, error } = useAppSelector(
    (state) => state.housesVendor,
  );

  useEffect(() => {
    if (houseId) {
      dispatch(getHouse(houseId));
    }
  }, [dispatch, houseId]);

  if (loading) return <p className="m-auto text-gray-400">Loading house…</p>;
  if (error) return <p className="mt-6 text-red-500">{error}</p>;
  if (!house) return <NotFound />;

  return (
    <div className="px-25 py-20">
      <Breadcrumbs
        links={[...INNERPAGE_BREADCRUMBS, { label: house.title, href: "" }]}
      />

      {house ? (
        <>
          <PropertyCard house={house} />
          <Booked houseId={house.id} />
          <Favorites houseId={house.id} />
          <Reviews />
        </>
      ) : loading ? (
        <p className="m-auto text-gray-400">Loading house…</p>
      ) : error ? (
        <p className="mt-6 text-red-500">{error}</p>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default InnerMyAnnouncement;
