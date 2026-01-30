import { Intro } from "@/components/landing/Intro";
import { PopularApartments } from "@/components/landing/PopularApartments";
import { PopularHouses } from "@/components/landing/PopularHouses";
import { Regions } from "@/components/landing/Regions";
import { POPULAR_HOUSES_DATA } from "@/utils/constants/landing";
import { Footer } from "@/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <Intro />
      <Regions />
      <PopularApartments variant="popular-apartments" />
      <PopularHouses houses={POPULAR_HOUSES_DATA} />
      <PopularApartments variant="the-lastest" />
      <Footer />
    </>
  );
};

export default LandingPage;
