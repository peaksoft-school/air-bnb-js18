import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/components/configs/axiosInstance";
import type { LatestAnnouncement } from "./type";


export const getLatestAnnouncements = createAsyncThunk<
  LatestAnnouncement[],
  void,
  { rejectValue: string }
>("houses/latestAnnouncements", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<LatestAnnouncement[]>(
      "/api/houses/latestAnnouncement",
    );

    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to load latest announcements");
  }
});
