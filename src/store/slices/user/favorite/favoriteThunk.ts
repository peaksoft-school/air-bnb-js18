import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FavoriteData } from "./type";
import { axiosInstance } from "@/configs/axiosInstance";

export const getAllFavorites = createAsyncThunk<
  FavoriteData[],
  void,
  { rejectValue: string }
>(
  "favorite/getAll",

  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get<FavoriteData[]>(
        "/api/favorites/getAllFavorites",
      );

      return res.data;
    } catch {
      return rejectWithValue("Failed to load favorites");
    }
  },
);

export const toggleFavorite = createAsyncThunk<
  void,
  number | string,
  { rejectValue: string }
>(
  "favorite/toggle",

  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.post(`/api/favorites/${id}`);

      await dispatch(getAllFavorites());
    } catch {
      return rejectWithValue("Failed to toggle favorite");
    }
  },
);
