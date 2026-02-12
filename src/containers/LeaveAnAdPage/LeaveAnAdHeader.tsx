import { BlackLogoIcon, SearchIcon } from "@/assets/icons";

import { Button } from "@/components/UI/Button";
import { Checkbox } from "@/components/UI/Checkbox";
import { Input } from "@/components/UI/Input";
import { HeaderWithRight } from "./HeaderWithRight";

export const LeaveAnAdHeader = () => {
  return (
    <header className="bg-white h-22 flex items-center justify-between px-25">
      <div className="flex items-center gap-15">
        <img src={BlackLogoIcon} alt="AirBNB logo" className="w-18.5 h-13.75" />
        <button className="text-[#FFBE58] font-medium cursor-pointer uppercase">
          leave an ad
        </button>
      </div>

      <div className="flex items-center gap-7.5">
        <label className="flex items-center gap-2 text-[#525252] font-inter text-base">
          <Checkbox />
          Search nearby
        </label>

        <div className="relative">
          <img
            src={SearchIcon}
            alt="search"
            className="w-5.5 h-5.5 absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
          />
          <Input
            placeholder="Search"
            className="pl-12 rounded-[2px] w-103.5 h-9.25"
          />
        </div>

        <Button
          type="button"
          variant="default"
          className="text-[#F7F7F7] text-sm font-medium leading-4 uppercase px-17.5 py-2.5"
        >
          SUBMIT AN AD
        </Button>
      </div>

      <div className="flex items-center gap-6">
        <HeaderWithRight />
      </div>
    </header>
  );
};
