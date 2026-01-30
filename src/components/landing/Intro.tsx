import { useState } from "react";
import { Input } from "../UI/Input";
import { Checkbox } from "../UI/Checkbox";
import { Button } from "../UI/Button";
import { JoinUsModal } from "../auth/JoinUsModal";
import { Logo, ProfileIcon } from "@/assets/icons";

export const Intro = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [nearby, setNearby] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  console.log(setIsloggedIn);

  return (
    <div className="h-screen w-screen bg-[url('@/assets/images/landing-bg.png')] bg-cover bg-center relative">
      <header className="relative z-20 flex items-center justify-between px-24 py-7">
        <img src={Logo} alt="logo" className="w-22 h-16.25" />

        {isLoggedIn ? (
          <div className="flex items-center gap-6">
            <button className="text-white font-medium">leave an ad</button>
            <img src={ProfileIcon} alt="profile" />
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <button className="text-white font-medium">leave an ad</button>
            <Button
              type="button"
              onClick={() => setIsSignUpOpen(true)}
              variant="default"
              className="text-[#F7F7F7] text-sm font-medium leading-4 uppercase px-17.5 py-2.5"
            >
              JOIN US
            </Button>
          </div>
        )}

        {isSignUpOpen && <JoinUsModal onClose={() => setIsSignUpOpen(false)} />}
      </header>

      <main className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white font-[jenriv-titling] uppercase text-[36px] mb-12 text-center">
          Find a place you'll love to stay at
        </h1>

        <div className="relative w-181.25">
          <Input
            type="text"
            className="
              bg-white h-11 text-[18px] text-gray-700 placeholder:text-gray-400 border-none"
            placeholder="Region, city, apartment, house..."
            icon
          />
        </div>

        {!isLoggedIn && (
          <div className="w-181.25 mt-3 flex justify-end items-center">
            <Checkbox
              id="nearby"
              checked={nearby}
              onChange={() => setNearby((prev) => !prev)}
            />

            <label
              htmlFor="nearby"
              className="text-white ml-2 cursor-pointer text-sm"
            >
              Искать поблизости
            </label>
          </div>
        )}
      </main>
    </div>
  );
};
