import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./axios";
import type {
  ChargePaymentArgs,
  ChargePaymentResponse,
  PaymentError,
} from "./types/payment";

export const chargePayment = createAsyncThunk<
  ChargePaymentResponse, 
  ChargePaymentArgs, 
  { rejectValue: PaymentError } 
>("payment/charge", async (data, thunkAPI) => {
  try {
    const response = await api.post<ChargePaymentResponse>(
      "/payments/charge",
      data
    );
    return response.data;
  } catch {
    return thunkAPI.rejectWithValue({ message: "Payment failed" });
  }
});
