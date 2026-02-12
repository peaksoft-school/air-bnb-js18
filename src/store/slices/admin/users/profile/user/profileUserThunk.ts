import { axiosInstance } from "@/configs/axiosInstance";
import { showToast } from "@/utils/helpers/showToast";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "./types";

export const getUser = createAsyncThunk<User, string | undefined>(
  "profile-user/getUser",

  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<User>(
        `api/users/user/${userId}`,
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "User failed",
          type: "error",
        });
      }

      return rejectWithValue("User error");
    }
  },
);
