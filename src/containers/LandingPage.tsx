import { Intro } from "@/components/landing/Intro";
import { PopularApartments } from "@/components/landing/PopularApartments";
import { PopularHouses } from "@/components/landing/PopularHouses";
import { Regions } from "@/components/landing/Regions";
import { Footer } from "@/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <Intro />
      <Regions />
      <PopularApartments variant="popular-apartments" />
      <PopularHouses />
      <PopularApartments variant="the-lastest" />
      <Footer />
    </>
  );
};

export default LandingPage;
