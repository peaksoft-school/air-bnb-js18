import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { authSlice } from "./slices/auth/authSlice";
import { userSlice } from "./slices/user/userSlice";
import { landingSlice } from "./slices/landing/landingSlice";
import {paymentSlice} from "./slices/payment-feedback-slice/paymentSlice";
import { feedbacksSlice } from "./slices/inner-page-vendor/feedback/feedbackSlice";
import { housesVendorSlice } from "./slices/inner-page-vendor/house/houseSlice";
import { housesSlice } from "./slices/user/houses/housesSlice";
import { favoritesSlice } from "./slices/inner-page-vendor/inFavorites/favoritesSlice";
import { bookingsVendorSlice } from "./slices/inner-page-vendor/bookings/bookingsSlice";
import { bookingsSlice } from "./slices/admin/users/profile/bookings/bookingsSlice";
import { usersSlice } from "./slices/admin/users/usersSlice";
import { applicationSlice } from "./slices/admin/application/applicationSlice";
import { allHousingSlice } from "./slices/admin/all-housing/allHousingSlice";
import { favoriteSlice } from "./slices/user/favorite/favoriteSlice";
import { bookingsUserSlice } from "./slices/user/bookingsUser/userBookingsSlice";
import { announcementsUserSlice } from "./slices/user/announcementsUser/userAnnouncementsSlice";
import { moderationHousesSlice } from "./slices/user/moderationHouses/moderationHousesSlice";
import { announcementsSlice } from "./slices/admin/users/profile/announcements/announcementsSlice";
import { profileSlice } from "./slices/user/profile/profileSlice";
import { innerApplicationSlice } from "./slices/admin/inner-application/innerApplicationSlice";
import { profileUserSlice } from "./slices/admin/users/profile/user/profileUserSlice";
import { addHouseSlice } from "./slices/user/addHouse/addHouseSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
  [landingSlice.name]: landingSlice.reducer,
  [paymentSlice.name]: paymentSlice.reducer,
  [feedbacksSlice.name]: feedbacksSlice.reducer,
  [housesSlice.name]: housesSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [bookingsSlice.name]: bookingsSlice.reducer,
  [announcementsSlice.name]: announcementsSlice.reducer,
  [bookingsVendorSlice.name]: bookingsVendorSlice.reducer,
  [profileSlice.name]: profileSlice.reducer,
  [applicationSlice.name]: applicationSlice.reducer,
  [allHousingSlice.name]: allHousingSlice.reducer,
  [innerApplicationSlice.name]: innerApplicationSlice.reducer,
  [housesVendorSlice.name]: housesVendorSlice.reducer,
  [favoriteSlice.name]: favoriteSlice.reducer,
  [bookingsUserSlice.name]: bookingsUserSlice.reducer,
  [announcementsUserSlice.name]: announcementsUserSlice.reducer,
  [moderationHousesSlice.name]: moderationHousesSlice.reducer,
  [profileUserSlice.name]: profileUserSlice.reducer,
  [addHouseSlice.name]: addHouseSlice.reducer,
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
