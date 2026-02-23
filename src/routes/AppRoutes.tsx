import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { PrivateRoutes } from "./PrivateRoutes";
import { adminRoutes } from "./admin/AdminRoutes";
import { userRoutes } from "./user/UserRoutes";
import { AdminLayout } from "@/layout/admin/AdminLayout";
import { UserLayout } from "@/layout/user/UserLayout";
import { NotFound } from "@/layout/NotFound";
import { ADMIN_ROUTES, ROLES, USER_ROUTES } from "@/utils/constants/routes";
import { useAppSelector } from "@/store/hooks";

const LandingPage = lazy(() => import("@/pages/LandingPage"));

const AppRoutes = () => {
  const { role, isAuth } = useAppSelector((state) => state.auth);

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
          path: ADMIN_ROUTES.index,
          element: (
            <Suspense fallback={<NotFound />}>
              <AdminLayout />
            </Suspense>
          ),

          children: [
            {
              index: true,
              element: <Navigate to={ADMIN_ROUTES.application} replace />,
            },

            ...adminRoutes,
          ],
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
          path: USER_ROUTES.index,
          element: (
            <Suspense>
              <UserLayout />
            </Suspense>
          ),

          children: [
            {
              index: true,
              element: <Navigate to={USER_ROUTES.innerRegion} replace />,
            },

            ...userRoutes,
          ],
        },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
