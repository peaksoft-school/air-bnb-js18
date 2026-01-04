
import ApartmentSlider from "./ApartmentSlider";
import { apartmentsData } from "./Apartment";

const PopularApartments: React.FC = () => {
  return (
    <div className="w-[1440px] h-[880px] bg-[#4f7755] flex items-center justify-center font-sans">
      <div className="w-[1393px] h-[540px] flex flex-col">
        <div className="flex justify-between items-center mb-12 text-white uppercase tracking-[0.2em]">
          <h2 className="text-xl font-medium">Popular Apartments</h2>
          <button className="text-xs border-b border-white pb-1 opacity-80 hover:opacity-100 transition-opacity">
            View all
          </button>
        </div>

        <div className="flex-grow">
          <ApartmentSlider data={apartmentsData} />
        </div>
      </div>
    </div>
  );
};

export default PopularApartments;
