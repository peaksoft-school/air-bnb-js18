import { LandingPage } from "@/containers/LandingPage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { PrivateRoutes } from "./PrivateRoutes";
import { Suspense } from "react";
import { AdminLayout } from "@/layout/admin/AdminLayout";
import { adminRoutes } from "./admin/AdminRoutes";
import { UserLayout } from "@/layout/user/UserLayout";
import { userRoutes } from "./user/UserRoutes";
import { ADMIN_ROUTES, ROLES, USER_ROUTES } from "@/utils/constants/routes";
import { NotFound } from "@/layout/NotFound";

const store = {
  role: "ADMIN",
  isAuth: true,
};

const AppRoutes = () => {
  const { role, isAuth } = store;

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        role === "ADMIN" ? (
          <Navigate to={`${ADMIN_ROUTES.index}`} />
        ) : (
          <LandingPage />
        ),
    },
    {
      element: (
        <PrivateRoutes
          isAuth={isAuth}
          role={role}
          roles={[ROLES.ADMIN]}
          fallbackPath="/"
        />
      ),
      children: [
        {
          path: `${ADMIN_ROUTES.index}`,
          element: (
            <Suspense fallback={<NotFound />}>
              <AdminLayout />
            </Suspense>
          ),
          children: adminRoutes,
        },
      ],
    },

    {
      element: (
        <PrivateRoutes
          isAuth={isAuth}
          role={role}
          roles={[ROLES.USER]}
          fallbackPath={`${ADMIN_ROUTES.index}`}
        />
      ),
      children: [
        {
          path: `${USER_ROUTES.index}`,
          element: (
            <Suspense>
              <UserLayout />
            </Suspense>
          ),
          children: userRoutes,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
