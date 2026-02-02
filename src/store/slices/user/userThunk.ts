import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/configs/axiosInstance";
import type { UserProfileResponse } from "./type";

export const getProfile = createAsyncThunk<
  UserProfileResponse,
  void,
  { rejectValue: string }
>("user/getProfile", async (_, { rejectWithValue }) => {
  try {
    const response =
      await axiosInstance.get<UserProfileResponse>("/api/users/profile");
    return response.data;
  } catch {
    return rejectWithValue("Failed to load profile");
  }
});
