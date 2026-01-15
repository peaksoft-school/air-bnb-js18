import { Outlet } from "react-router";
import { UserHeader } from "./UserHeader";
import { Footer } from "../Footer";

export const UserLayout = () => {
  return (
    <div>
      <UserHeader />

      <Outlet />

      <Footer />
    </div>
  );
};
