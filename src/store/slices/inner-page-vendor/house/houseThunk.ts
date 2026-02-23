import { createAsyncThunk } from "@reduxjs/toolkit";
import type { House, HouseInnerPage } from "./types";
import { axiosInstance } from "@/configs/axiosInstance";

const API = "/api/houses";

export const getHouse = createAsyncThunk<
  House,
  string,
  { rejectValue: string }
>("housesVendor/getHouse", async (houseId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`${API}/${houseId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

export const deleteHouse = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("housesVendor/deleteHouse", async (houseId, { rejectWithValue }) => {
  try {
    await axiosInstance.delete(`${API}/${houseId}`);
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

export const updateHouse = createAsyncThunk<
  void,
  { houseId: string; data: HouseInnerPage },
  { rejectValue: string }
>(
  "housesVendor/updateHouse",
  async ({ houseId, data }, { rejectWithValue }) => {
    try {
      await axiosInstance.put(`${API}/update/${houseId}`, data);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error");
    }
  },
);
