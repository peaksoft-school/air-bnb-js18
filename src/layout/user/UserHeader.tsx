import { useEffect, useState } from "react";
import {
  BlackLogoIcon,
  SearchIcon,
  ProfileIcon,
  GreyArrowDownIcon,
} from "@/assets/icons";
import { Button } from "../../components/UI/Button";
import { Checkbox } from "../../components/UI/Checkbox";
import { Input } from "../../components/UI/Input";
import { JoinUsModal } from "@/components/auth/JoinUsModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProfile } from "@/store/slices/user/userThunk";
import { logout } from "@/store/slices/auth/authSlice";
import { USER_ROUTES } from "@/utils/constants/routes";
import { useNavigate } from "react-router";
import { getAllFavorites } from "@/store/slices/user/favorite/favoriteThunk";
import LogoutModal from "@/components/logout-modal/LogoutModal";

export const UserHeader = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const { isAuth } = useAppSelector((state) => state.auth);
  const { image } = useAppSelector((state) => state.user);
  const { favorite } = useAppSelector((state) => state.favorite);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      dispatch(getProfile());
      dispatch(getAllFavorites());
    }
  }, [isAuth, dispatch]);

  const handleFavoriteNavigate = () => navigate(USER_ROUTES.favorite);

  const handleDropDown = () => setIsProfileOpen((prev) => !prev);

  const handleMyProfile = () => {
    navigate(USER_ROUTES.profile);

    handleDropDown();
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);

    handleDropDown();
  };

  const handleConfirmLogout = () => {
    dispatch(logout());

    setIsLogoutModalOpen(false);
  };

  return (
    <header className="bg-white h-22 flex justify-between items-center px-25 py-10">
      <div className="flex gap-15">
        <img
          src={BlackLogoIcon}
          alt="AirBNB logo"
          className="w-18.5 h-13.75"
          onClick={() => navigate("/")}
        />

        {!isAuth && (
          <button className="text-[#FFBE58] font-medium cursor-pointer">
            leave an ad
          </button>
        )}
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

        <div className="flex items-center gap-6">
          {isAuth ? (
            <>
              <Button onClick={() => navigate(USER_ROUTES.anAd)}>
                SUBMIT AN AD
              </Button>

              <button
                className="cursor-pointer"
                onClick={handleFavoriteNavigate}
              >
                FAVORITE ({favorite?.length})
              </button>

              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={image || ProfileIcon}
                  alt="User profile"
                  className="w-9.25 h-9.25 rounded-full object-cover"
                />

                <button type="button" onClick={handleDropDown}>
                  <img
                    src={GreyArrowDownIcon}
                    alt="arrow down"
                    className="w-5.25 cursor-pointer"
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
                      onClick={handleLogoutClick}
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </>
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
      </div>

      {isSignUpOpen && <JoinUsModal onClose={() => setIsSignUpOpen(false)} />}

      {isLogoutModalOpen && (
        <LogoutModal
          open={isLogoutModalOpen}
          onClose={() => setIsLogoutModalOpen(false)}
          onLogout={handleConfirmLogout}
        />
      )}
    </header>
  );
};
