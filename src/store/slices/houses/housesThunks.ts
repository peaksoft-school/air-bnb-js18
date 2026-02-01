import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../utils/constants/user/axios"; 

export interface Filters {
  region?: string;
  popular?: string;
  houseType?: string;
  price?: string;
}

export const fetchHouses = createAsyncThunk(
  "houses/fetch",
  async (filters: Filters = {}) => {
    const { data } = await api.get("/api/users/houses", {
      params: {
        region: filters.region || undefined,
        popular: filters.popular || undefined,
        houseType: filters.houseType || undefined,
        price: filters.price || undefined,
      },
    });

    return data;
  }
);
