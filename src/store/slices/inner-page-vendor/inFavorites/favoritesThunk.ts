import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Favorite } from "./types";

export const getFavorites = createAsyncThunk<
  Favorite[],
  string, 
  { rejectValue: string }
>("favorites/getFavorites", async (houseId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/favorites/${houseId}`);
    const favorites = response.data;
    if (!Array.isArray(favorites)) {
      return rejectWithValue("Invalid favorites data");
    }
    return favorites;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message || "Failed to fetch favorites",
    );
  }
});
