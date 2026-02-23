import { axiosInstance } from "@/configs/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

type AnnouncementFilters = {
  houseType?: string;
  rating?: string;
  price?: string;
};

export const fetchAnnouncementsUser = createAsyncThunk(
  "announcementsUser/fetchAnnouncements",
  async (
    { houseType, rating, price }: AnnouncementFilters,
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axiosInstance.get("/api/users/filter", {
        params: { houseType, rating, price },
      });

      return data.responses;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
