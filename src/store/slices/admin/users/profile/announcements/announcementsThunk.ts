import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Announcement } from "./types";
import { showToast } from "@/utils/helpers/showToast";
import { axiosInstance } from "@/configs/axiosInstance";

export const getUserAnnouncements = createAsyncThunk<
  Announcement[],
  string | undefined
>(
  "announcements/fetchAnnouncements",

  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/admin/announcements/${userId}`,
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Announcements failed",
          type: "error",
        });
      }

      return rejectWithValue("Announcements error");
    }
  },
);
