import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { authSlice } from "./slices/auth/authSlice";
import { userSlice } from "./slices/user/userSlice";
import { landingSlice } from "./slices/landing/landingSlice";
import { usersSlice } from "./slices/admin/users/usersSlice";
import { announcementsSlice } from "./slices/admin/profile/announcements/announcementsSlice";
import { bookingsSlice } from "./slices/admin/profile/bookings/bookingsSlice";
import { profileUserSlice } from "./slices/admin/profile/user/profileUserSlice";
import { applicationSlice } from "./slices/admin/application/applicationSlice";
import { allHousingSlice } from "./slices/admin/all-housing/allHousingSlice";
import { innerApplicationSlice } from "./slices/admin/inner-application/innerApplicationSlice";


const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
  [landingSlice.name]: landingSlice.reducer,
  [announcementsSlice.name]: announcementsSlice.reducer,
  [bookingsSlice.name]: bookingsSlice.reducer,
  [profileUserSlice.name]: profileUserSlice.reducer,
  [applicationSlice.name]: applicationSlice.reducer,
  [allHousingSlice.name]: allHousingSlice.reducer,
  [innerApplicationSlice.name]: innerApplicationSlice.reducer
 
});

const persistConfig = {
  key: "AIR-BNB",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
