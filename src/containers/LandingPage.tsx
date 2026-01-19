import Intro from "@/components/landing/Intro";
import { PopularHouses } from "@/components/landing/PopularHouses";
import { Regions } from "@/components/landing/Regions";
import { PopularApartments } from "@/components/landing/popular-apartments/PopularApartments";
import { Footer } from "@/layout/Footer";
import { POPULAR_HOUSES_DATA } from "@/utils/constants/landing";

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
