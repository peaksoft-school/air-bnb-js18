import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Booking, DeleteHouseArgs } from "./type";
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

export const deleteHouse = createAsyncThunk<void, DeleteHouseArgs>(
  "user/deleteHouse",
  async ({ id, navigate }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`api/houses/${id}`);

      navigate?.(-1);

      showToast({
        title: "Delete",
        message: "Successfully deleted",
        type: "success",
      });

      dispatch(getUserBooking(String(id)));
    } catch (error: unknown) {
      const err = error as { response?: { message?: string } };

      showToast({
        title: "Delete",
        message: err.response?.message ?? "Something went wrong",
        type: "error",
      });

      return rejectWithValue(err.response?.message);
    }
  },
);
