import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { authSlice } from "./slices/auth/authSlice";
import { userSlice } from "./slices/user/userSlice";
import { landingSlice } from "./slices/landing/landingSlice";
import { announcementsName, announcementsReducer } from "./slices/admin/user/announcements/announcementsSlice";
import { bookingsName, bookingsReducer } from "./slices/admin/user/bookings/bookingsSlice";


const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [landingSlice.name]: landingSlice.reducer,
  [announcementsName]: announcementsReducer,
  [bookingsName]: bookingsReducer,
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
