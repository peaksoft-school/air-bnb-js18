import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/components/configs/axiosInstance";
import type { PopularHouses } from "./type";

export const getPopularHouses = createAsyncThunk<
  PopularHouses[],
  void,
  { rejectValue: string }
>("houses/getPopularHouses", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<PopularHouses[]>(
      "/api/houses/getPopularHouses",
    );

    return response.data;
  } catch {
    return rejectWithValue("Failed to load popular houses");
  }
});
