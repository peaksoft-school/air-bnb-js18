import Logo from "../../assets/Icons/logoBlack.svg";
import SearchIcon from "../../assets/Icons/searchIcon.svg";
import { Button } from "../UI/Button";
import { Checkbox } from "../UI/Checkbox";
import { Input } from "../UI/Input";

export const MainHeader = () => {
  return (
    <header className="bg-white h-22 flex justify-between items-center px-25">
      <div className="flex gap-15">
        <img src={Logo} alt="AirBNB logo" className="w-18.5 h-13.75" />

        <button className="text-[#FFBE58] font-medium cursor-pointer">
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
          variant="default"
          className="text-[#F7F7F7] text-sm font-medium leading-4 uppercase px-17.5 py-2.5"
        >
          Join Us
        </Button>
      </div>
    </header>
  );
};
