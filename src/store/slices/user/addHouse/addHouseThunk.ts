import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/configs/axiosInstance";
import { showToast } from "@/utils/helpers/showToast";

type PostImageFileArgs = {
  file: File;
};

type SaveHouseArgs = {
  newData: object;
  reset: () => void;
  clearImage: () => void;
  navigate: (path: string) => void;
};

export const postImageFile = createAsyncThunk<
  { Link: string },
  PostImageFileArgs
>("post/imageFile", async ({ file }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await axiosInstance.post("/api/file", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const saveHouse = createAsyncThunk<void, SaveHouseArgs>(
  "post/saveHouse",
  async (
    { newData, reset, clearImage, navigate },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const { data } = await axiosInstance.post("/api/houses", newData);

      reset();

      showToast({
        title: "Success",
        message: "You have successfully added an image :)",
        type: "success",
      });

      navigate("/user/profile");

      dispatch(clearImage());

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
