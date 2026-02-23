import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getUserProfile } from "./store/slices/user/profile/profileUserThunk";
import { USER_ACTIONS } from "./store/slices/user/profile/profileUserSlice";

const App = () => {
  const { isAuth, role } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth && role === "USER") dispatch(getUserProfile());

    dispatch(USER_ACTIONS.clearUserInfo());
  }, [isAuth]);

  return <AppRoutes />;
};

export default App;
