import { ArrowDownIcon, Logo } from "@/assets/icons";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/auth/authSlice";
import { ADMIN_ROUTES } from "@/utils/constants/routes";
import { useState } from "react";
import { NavLink } from "react-router";

export const AdminHeader = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleOpenDropDown = () => setOpen((prev) => !prev);

  const handleLogOut = () => dispatch(logout());

  return (
    <header className="bg-[#0B0B0B] h-20.5 flex justify-between items-center px-10">
      <div className="flex items-center gap-20.75 text-[#E5E5E5] text-lg font-normal leading-6">
        <img src={Logo} alt="Logo" className="w-18.5 h-13.5" />

        <div className="flex gap-9 cursor-pointer">
          <NavLink
            to="application"
            end
            className={({ isActive }) =>
              isActive ? "text-[#FF4B4B]" : "hover:text-[#FF4B4B]"
            }
          >
            Application
          </NavLink>

          <NavLink
            to="users"
            end
            className={({ isActive }) =>
              isActive ? "text-[#FF4B4B]" : "hover:text-[#FF4B4B]"
            }
          >
            Users
          </NavLink>

          <NavLink
            to={ADMIN_ROUTES.allHousing}
            end
            className={({ isActive }) =>
              isActive ? "text-[#FF4B4B]" : "hover:text-[#FF4B4B]"
            }
          >
            All housing
          </NavLink>
        </div>
      </div>

      <div className="relative flex items-center text-[#FFFFFF]">
        <button
          onClick={handleOpenDropDown}
          className="flex items-center gap-2 cursor-pointer"
        >
          Administrator
          <img src={ArrowDownIcon} alt="ArrowDown" className="w-3.25" />
        </button>

        {open && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-45 h-14.75 bg-white rounded-[2px]">
            <button
              className="
                w-full h-6.25 mx-auto mt-4 px-5 flex items-center text-[#525252] font-inter text-base hover:bg-gray-200 cursor-pointer"
              onClick={handleLogOut}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
