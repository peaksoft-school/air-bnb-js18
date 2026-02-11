import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/configs/axiosInstance";
import type {
  LatestAnnouncement,
  PopularApartment,
  PopularHouses,
} from "./types";

// latest announcements
export const getLatestAnnouncements = createAsyncThunk<
  LatestAnnouncement,
  void,
  { rejectValue: string }
>(
  "landing/getLatestAnnouncements",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<LatestAnnouncement>(
        "/api/houses/latestAnnouncement",
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to load latest announcements");
    }
  },
);

// popular apartments
export const getPopularApartments = createAsyncThunk<
  PopularApartment,
  void,
  { rejectValue: string }
>(
  "landing/getPopularApartments",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<PopularApartment>(
        "/api/houses/getPopularApartment",
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to load popular apartments");
    }
  },
);

//popular house
export const getPopularHouses = createAsyncThunk<
  PopularHouses,
  void,
  { rejectValue: string }
>(
  "landing/getPopularHouses",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<PopularHouses>(
        "/api/houses/getPopularHouses",
      );

      return response.data;
    } catch {
      return rejectWithValue("Failed to load popular houses");
    }
  },
);
