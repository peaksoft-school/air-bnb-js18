import { useEffect, useState } from "react";
import { Input } from "../UI/Input";
import { Checkbox } from "../UI/Checkbox";
import { Button } from "../UI/Button";
import { JoinUsModal } from "../auth/JoinUsModal";
import { Logo, ProfileIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProfile } from "@/store/slices/user/userThunk";
import downArrow from "../../assets/icons/svgs/down-arrow.svg";
import { logout } from "@/store/slices/auth/authSlice";

export const Intro = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { image } = useAppSelector((state) => state.user);

  const [nearby, setNearby] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(getProfile());
    }
  }, [isAuth, dispatch]);

  const handleDropDown = () => setIsProfileOpen((prev) => !prev);

  const handleMyProfile = () => {
    handleDropDown();
  };

  const handleLogOut = () => {
    dispatch(logout());

    handleDropDown();
  };

  return (
    <div className="h-screen w-screen bg-[url('@/assets/images/landing-bg.png')] bg-cover bg-center relative">
      <header className="relative z-20 flex items-center justify-between px-24 py-7">
        <img src={Logo} alt="logo" className="w-22 h-16.25" />

        <div className="flex items-center gap-6">
          <button className="text-white font-medium">leave an ad</button>

          {isAuth ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={image || ProfileIcon}
                alt="User profile"
                className="w-9.25 h-9.25 rounded-full object-cover"
              />

              <button type="button" onClick={handleDropDown}>
                <img
                  src={downArrow}
                  alt="arrow down"
                  className="w-3.25 h-1.75"
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-24 top-20 bg-white rounded shadow-lg w-40 z-50">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm rounded cursor-pointer"
                    onClick={handleMyProfile}
                  >
                    My profile
                  </button>

                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500 rounded cursor-pointer"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              type="button"
              onClick={() => setIsSignUpOpen(true)}
              variant="default"
              className="text-[#F7F7F7] text-sm font-medium leading-4 uppercase px-17.5 py-2.5"
            >
              JOIN US
            </Button>
          )}
        </div>

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

        {!isAuth && (
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
