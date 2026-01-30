import { Outlet } from "react-router";
import { AdminHeader } from "./AdminHeader";

export const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />

      <Outlet />
    </div>
  );
};
