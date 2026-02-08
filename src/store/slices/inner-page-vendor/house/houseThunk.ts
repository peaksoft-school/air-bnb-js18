import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { House, HouseInnerPage } from "./types";

const API = "/api/houses";

export const getHouse = createAsyncThunk<
  House, 
  string, 
  { rejectValue: string }
>("houses/getHouse", async (houseId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API}/${houseId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

export const deleteHouse = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("houses/deleteHouse", async (houseId, { rejectWithValue }) => {
  try {
    await axios.delete(`${API}/${houseId}`);
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

export const updateHouse = createAsyncThunk<
  void,
  { houseId: string; data: HouseInnerPage },
  { rejectValue: string }
>("houses/updateHouse", async ({ houseId, data }, { rejectWithValue }) => {
  try {
    await axios.put(`${API}/update/${houseId}`, data);
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});
