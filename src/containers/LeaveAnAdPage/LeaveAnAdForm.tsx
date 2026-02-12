import { useState } from "react";
import { Input } from "@/components/UI/Input";
import { Button } from "@/components/UI/Button";
import { Radio } from "@/components/UI/Radio";
import RegionDropdown from "@/components/UI/RegionsDropdown/RegionDropdown";

export const LeaveAnAdForm = () => {
  const [homeType, setHomeType] = useState<"Apartment" | "House">("House");

  return (
    <div className="bg-[#F7F7F7] w-full flex flex-col items-center py-10">
      <div className="w-152.5">
        <h1 className="text-[18px] font-medium text-[#363636] uppercase text-center">
          Hi! Let's get started listing your place.
        </h1>

        <p className="mt-3 text-[16px] text-[#646464] text-center">
          In this form, we'll collect some basic and additional information
          about your listing.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="text-[16px] text-[#363636]">Image</span>
          <span className="text-[16px] text-[#BDBDBD]">Max 4 photo</span>
        </div>

        <div className="mt-4 flex items-center gap-6">
          <div className="w-33.75 h-33.75 bg-[#F3F3F3] flex items-center justify-center">
            <div className="w-10 h-10 border border-[#C4C4C4] rounded-[6px] opacity-60" />
          </div>

          <div>
            <button
              type="button"
              className="text-[16px] text-[#266BD3] font-medium"
            >
              Add photos to the review
            </button>

            <p className="mt-2 text-[14px] text-[#646464]">
              It will become more noticeable and even more useful.
            </p>

            <p className="text-[14px] text-[#646464]">
              You can upload up to 4 photos.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[16px] text-[#363636] mb-4">Home type</p>

          <Radio
            value={homeType}
            onChange={(value) => setHomeType(value as "Apartment" | "House")}
            options={[
              { label: "Apartment", value: "Apartment" },
              { label: "House", value: "House" },
            ]}
            className="flex gap-10"
          />
        </div>

        <div className="mt-8 flex justify-between">
          <div className="w-61.25">
            <p className="text-[16px] text-[#363636] mb-2">Max of Guests</p>
            <Input placeholder="0" className="w-61.25 h-9.75 rounded-[2px]" />
          </div>

          <div className="w-61.25">
            <p className="text-[16px] text-[#363636] mb-2">Price</p>
            <Input placeholder=" 0" className="w-61.25 h-9.75 rounded-[2px]" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Title</p>
          <Input className="w-152.5 h-9.75 rounded-[2px]" />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">
            Description of listing
          </p>
          <textarea className="w-152.5 h-26 border border-[#E0E0E0] rounded-[2px] px-3 py-2 text-[16px] outline-none resize-none" />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Region</p>
          <RegionDropdown />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Town / Province</p>
          <Input className="w-152.5 h-9.75 rounded-[2px]" />
        </div>

        <div className="mt-8">
          <p className="text-[16px] text-[#363636] mb-2">Address</p>
          <Input className="w-152.5 h-9.75 rounded-[2px]" />
        </div>

        <div className="mt-10 flex justify-end">
          <Button variant="default">SUBMIT</Button>
        </div>
      </div>
    </div>
  );
};
