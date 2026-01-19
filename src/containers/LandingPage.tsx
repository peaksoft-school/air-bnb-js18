import Intro from "@/components/landing/Intro";
import { PopularHouses } from "@/components/landing/PopularHouses";
import { Regions } from "@/components/landing/regions";
import { Footer } from "@/layout/Footer";
import { POPULAR_HOUSES_DATA } from "@/utils/constants/landing";

const LandingPage = () => {
  return (
    <>
      <Intro />
      <Regions />
      <h1>Popular Apartments</h1>
      <PopularHouses houses={POPULAR_HOUSES_DATA} />
      <h1>The lastest</h1>
      <Footer />
    </>
  );
};

export default LandingPage;
