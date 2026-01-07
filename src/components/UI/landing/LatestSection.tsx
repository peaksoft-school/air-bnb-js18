import mapGeoPin from "../../../../assets/Icons/Geo Icon.svg";
import type { LatestHouse } from "./LatestHouse.tsx";
import { InteriorSlider } from "./InteriorSlider.tsx";
import { ViewLink } from "./ViewLink";

type LatestSectionProps = {
  data: LatestHouse | null;
};

export const LatestSection = ({ data }: LatestSectionProps) => {
  if (!data) {
    return <p className="text-gray-500 px-6">No latest house data</p>;
  }

  const { mainImage, title, description, address, interiorImages } = data;

  return (
    <section className="pl-25 pb-42.5">
      <div className="flex justify-between items-center mb-15 max-w-300">
        <h2 className="text-xl text-[#363636] uppercase font-medium leading-6">
          The latest
        </h2>
        <a href="#" className="border-b border-[#363636]">
          <ViewLink />
        </a>
      </div>

      <div className="grid grid-cols-[1fr_1fr_auto] items-start">
        <img
          src={mainImage}
          alt={title}
          className="h-114 w-full object-cover"
        />

        <div className="px-6 max-w-105 flex flex-col">
          <h3
            className="text-[#363636] font-sans font-medium text-[18px] leading-5.5 mb-10
"
          >
            {title}
          </h3>

          <p className=" text-[#6a6a6a] font-sans font-normal text-base leading-[20.8px] mb-1.75">
            {description}
          </p>

          <p
            className="text-[#97c69e] font-sans font-normal text-[14px] leading-4.25 text-left
 flex items-center gap-1 mb-4"
          >
            <img src={mapGeoPin} alt="map pin" className="h-3.5 w-3.5" />
            {address}
          </p>

          <a
            href="#"
            className="text-[#8a8a8a] font-sans font-medium text-base leading-[20.8px] text-left underline"
          >
            Read more
          </a>
        </div>
        <InteriorSlider interiorImages={interiorImages} />
      </div>
    </section>
  );
};
