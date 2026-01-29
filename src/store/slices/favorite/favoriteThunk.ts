import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/components/configs/axiosInstance";
import type { FavoriteData } from "./type";

export const getAllFavorites = createAsyncThunk<
  FavoriteData[],
  void,
  { rejectValue: string }
>("favorite/getAll", async (_, { rejectWithValue }) => {
  try {
     const res = await axiosInstance.get<FavoriteData[]>(
      "/api/houses/getAllFavorites",
    );

    return res.data;
  } catch {
    return rejectWithValue("Failed to load favorites");
  }
});

export const toggleFavorite = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("favorite/toggle", async (houseId, { rejectWithValue }) => {
  try {
    await axiosInstance.post(`/api/favorites/${houseId}`);
    return houseId;
  } catch {
    return rejectWithValue("Failed to toggle favorite");
  }
});
