import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Dayjs } from "dayjs";
import { postPayment } from "./paymentThunks";

interface PaymentState {
  isLoading: boolean;
  startedDate: string | null; // ISO строка
  endedDate: string | null;
  booking: any[];
}

const initialState: PaymentState = {
  isLoading: false,
  startedDate: null,
  endedDate: null,
  booking: [],
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    changeStartDate: (state, { payload }: PayloadAction<Dayjs | null>) => {
      // Сохраняй строку, а не Dayjs объект
      state.startedDate = payload ? payload.toISOString() : null;
    },
    changeEndDate: (state, { payload }: PayloadAction<Dayjs | null>) => {
      state.endedDate = payload ? payload.toISOString() : null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postPayment.fulfilled, (state, { payload }) => {
      state.booking = [...state.booking, payload];
    });
  },
});

export const { changeStartDate, changeEndDate } = paymentSlice.actions;
