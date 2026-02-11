import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constants/user/axios";
import type { Filters, House } from "./types";

export const fetchHouses = createAsyncThunk<House[], Filters | undefined>(
  "houses/fetch",
  async (filters: Filters = {}) => {
    const { data } = await api.get<{ houseResponses: House[] }>(
      "/api/houses/filtered",
      {
        params: filters,
      }
    );

    return data.houseResponses;
  }
);
