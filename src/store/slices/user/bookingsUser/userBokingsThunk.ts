import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Booking } from "./types";
import { axiosInstance } from "@/configs/axiosInstance";

export const fetchBookingsUser = createAsyncThunk<Booking[]>(
  "bookingsUser/fetchBookings",
  async () => {
    const response = await axiosInstance.get(`/api/users/bookings`);
    console.log("BOOKINGS RESPONSE:", response.data);
    return response.data;
  },
);
