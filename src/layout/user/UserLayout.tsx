import { Outlet } from "react-router";
import { UserHeader } from "./UserHeader";
import { Footer } from "../Footer";

export const UserLayout = () => (
  <div className="flex flex-col justify-between h-screen">
    <UserHeader />

    <Outlet />

    <Footer />
  </div>
);
