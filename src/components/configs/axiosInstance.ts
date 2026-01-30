import axios, { AxiosError, type AxiosInstance } from "axios";
import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

const BASE_URL = "http://18.194.43.178";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let customStore: Store<RootState> | undefined;

export const injectStore = (store: Store<RootState>) => {
  customStore = store;
};

axiosInstance.interceptors.request.use(
  (config) => {
    if (!customStore) return config;
 if (config.url?.includes("/auth/login")) {
   return config;
 }
    const token = customStore.getState().auth.token;

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as any;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);
