import { axiosInstance } from "@/configs/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface PostPaymentPayload {
  id: string | number;
  amount: number;
  checkIn: string;
  checkOut: string;
  token: string | null;
  stripeId: string;
}

export const postPayment = createAsyncThunk(
  "post/payment",
  async (payload: PostPaymentPayload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/bookings", {
        amount: payload.amount,
        token: payload.token,
        stripeId: payload.stripeId,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deletePayment = createAsyncThunk(
  "delete/payment",
  async (payload: string | number, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `/api/bookings?bookingId=${payload}`,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
