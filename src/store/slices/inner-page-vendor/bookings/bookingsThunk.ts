import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Booking } from "./types";
import { axiosInstance } from "@/configs/axiosInstance";

const API = "/api/bookings";

export const getBookingsByHouseId = createAsyncThunk<
  Booking[],
  string,
  { rejectValue: string }
>("bookingsVendor/getByHouseId", async (houseId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`${API}/${houseId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Error fetching bookings",
    );
  }
});
