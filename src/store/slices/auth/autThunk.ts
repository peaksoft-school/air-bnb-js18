import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "@/configs/axiosInstance";
import { showToast } from "@/utils/helpers/showToast";

import type {
  SignInPayload,
  SignInResponse,
  GoogleAuthPayload,
  GoogleAuthResponse,
} from "./types";

export const signIn = createAsyncThunk<
  SignInResponse,
  SignInPayload,
  { rejectValue: string }
>(
  "auth/signIn",

  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<SignInResponse>(
        "/api/auth/login",
        data,
      );

      showToast({
        title: "Success",
        message: "You have successfully logged in",
        type: "success",
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Login failed",
          type: "error",
        });
      }

      return rejectWithValue("Login error");
    }
  },
);

export const authWithGoogleRequest = createAsyncThunk<
  GoogleAuthResponse,
  GoogleAuthPayload,
  { rejectValue: string }
>(
  "auth/googleSignIn",

  async ({ idToken }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<GoogleAuthResponse>(
        "/api/auth/google",

        null,

        { params: { idToken } },
      );

      showToast({
        title: "Success",
        message: "Logged in with Google",
        type: "success",
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message:
            error.response?.data?.message || "Google authentication failed",
          type: "error",
        });
      }

      return rejectWithValue("Google auth error");
    }
  },
);
