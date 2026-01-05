import airbnb from "../../assets/icons/logo.svg";
import profile from "../../assets/icons/profile.svg";
import { useState } from "react";
import { Input } from "../UI/Input";

const Intro = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  console.log(setIsloggedIn);

  return (
    <div className="h-screen w-screen bg-[url('/main-page.png')] bg-cover bg-center relative">
      <div className="flex items-center justify-between px-24 py-7">
        <img src={airbnb} alt="logo" className="w-[88px] h-[65px]" />

        {isLoggedIn ? (
          <div className="flex items-center gap-6">
            <button className="text-white font-medium">leave an ad</button>
            <img src={profile} alt="profile" />
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <button className="text-white font-medium">leave an ad</button>
            <button className="text-white bg-[#DD8A08] py-2.5 px-8 rounded uppercase">
              join us
            </button>
          </div>
        )}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white font-[jenriv-titling] uppercase text-[36px] mb-12 text-center">
          Find a place you'll love to stay at
        </h1>

        <div className="relative w-[725px]">
          <Input
            type="text"
            className="
              bg-white h-[44px] pl-14 pr-4 text-[18px] text-gray-700 placeholder:text-gray-400 border-none"
            placeholder="Region, city, apartment, house..."
          />
        </div>

        {!isLoggedIn && (
          <div className="w-[725px] mt-3 flex justify-end items-center">
            <input
              id="checkbox"
              type="checkbox"
              className="w-4 h-4 border border-white"
            />
            <label
              htmlFor="checkbox"
              className="text-white ml-2 cursor-pointer text-sm"
            >
              Искать поблизости
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
