import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Booking } from "./types";

const API = "/api/bookings";

export const getBookingsByHouseId = createAsyncThunk<
  Booking[],
  string, 
  { rejectValue: string }
>("bookings/getByHouseId", async (houseId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API}/${houseId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Error fetching bookings",
    );
  }
});
