import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Booking } from "./type";
import { showToast } from "@/utils/helpers/showToast";
import { axiosInstance } from "@/configs/axiosInstance";

export const getUserBooking = createAsyncThunk<Booking[], string | undefined>(
  "bookings/fetchBookings",

  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<Booking[]>(
        `/api/admin/bookings/${userId}`,
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Bookings failed",
          type: "error",
        });
      }

      return rejectWithValue("Bookings error");
    }
  },
);
