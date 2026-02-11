import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { HeaderFilters } from "@/components/UI/HeaderFilters";
import { UserHeader } from "@/layout/user/UserHeader";
import { fetchHouses } from "@/store/slices/houses/housesThunks";

const HousesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houses, loading } = useSelector((state: RootState) => state.houses);

   useEffect(() => {
     dispatch(fetchHouses());
   }, [dispatch]);

  return (
    <>
      <UserHeader />
      <HeaderFilters />

      {loading && <p className="text-center mt-10">Loading...</p>}

      <div className="grid grid-cols-3 gap-6 p-6">
        {houses.map((house) => (
          <div key={house.id} className="border rounded p-4">
            <img src={house.images[0]} alt="" className="mb-2" />
            <h3 className="font-semibold">{house.title}</h3>
            <p>⭐ {house.rating}</p>
            <p>${house.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HousesPage;
