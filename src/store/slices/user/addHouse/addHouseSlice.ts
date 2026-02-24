import { createSlice } from "@reduxjs/toolkit";
import { postImageFile } from "./addHouseThunk";

type AddHouseState = {
  images: string[];
};

const initialState: AddHouseState = {
  images: [],
};

export const addHouseSlice = createSlice({
  name: "addHouse",
  initialState,
  reducers: {
    clearImage: (state) => {
      state.images = [];
    },

    deleteImage: (state, { payload }: { payload: number }) => {
      const newImages = [...state.images];

      newImages.splice(payload, 1);
      state.images = newImages;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postImageFile.fulfilled, (state, { payload }) => {
      state.images = [...state.images, payload.Link];
    });
  },
});

export const { clearImage, deleteImage } = addHouseSlice.actions;
