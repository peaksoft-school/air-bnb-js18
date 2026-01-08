import { Navigate, Outlet } from "react-router";

type PrivateRoutesProps = {
  isAuth: boolean;
  role: string;
  roles: string[];
  fallbackPath: string;
};

export const PrivateRoutes = ({
  isAuth,
  role,
  roles,
  fallbackPath,
}: PrivateRoutesProps) => {
  const isAllowed = roles.includes(role);

    if (!isAuth || !isAllowed) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <Outlet />;
};
