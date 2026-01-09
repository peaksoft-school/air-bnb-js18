import { housingData } from "@/utils/constants/housingData";
import { AllHousing } from "@/containers/admin/allhousing/AllHousing";

export const Page = () => {
  return <AllHousing data={housingData} />;
};
