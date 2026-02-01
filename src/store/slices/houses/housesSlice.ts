import { createSlice } from "@reduxjs/toolkit";
import { fetchHouses } from "./housesThunks";

interface House {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
}

interface HousesState {
  houses: House[];
  loading: boolean;
}

const initialState: HousesState = {
  houses: [],
  loading: false,
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.loading = false;
        state.houses = action.payload;
      })
      .addCase(fetchHouses.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default housesSlice.reducer;
