import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Booking } from "./type";


export const fetchBookings = createAsyncThunk<Booking[], string>(
  "bookings/fetchBookings",
  async (userId) => {
    const response = await axios.get(`/api/admin/bookings/${userId}`);
    return response.data;
  },
);
