import { createSlice } from "@reduxjs/toolkit";
import { chargePayment } from "./paymentThunks";
import type { PaymentError } from "./types/payment";

interface PaymentState {
  loading: boolean;
  error: PaymentError | null;
  success: boolean;
}

const initialState: PaymentState = {
  loading: false,
  error: null,
  success: false,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    resetPayment: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(chargePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(chargePayment.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(chargePayment.rejected, (state, action) => {
        state.loading = false;
        state.success = false;

        state.error = action.payload ?? { message: "Unknown error" };
      });
  },
});

export const { resetPayment } = paymentSlice.actions;
