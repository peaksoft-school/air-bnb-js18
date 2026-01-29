import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { authSlice } from "./slices/auth/authSlice";
import { favoriteReducer } from "./slices/favorite/favoriteSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  favorite: favoriteReducer,
});

const persistConfig = {
  key: "AIR-BNB",
  storage,
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
