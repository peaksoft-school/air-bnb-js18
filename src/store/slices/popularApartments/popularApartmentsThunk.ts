import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/components/configs/axiosInstance";
import type { PopularApartment } from "./type";


export const getPopularApartments = createAsyncThunk<
  PopularApartment[],
  void,
  { rejectValue: string }
>(
  "houses/getPopularApartment",

  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<PopularApartment[]>(
        "/api/houses/getPopularApartment",
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to load popular apartments");
    }
  },
);