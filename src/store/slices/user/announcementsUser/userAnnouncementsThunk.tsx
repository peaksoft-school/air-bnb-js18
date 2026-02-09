import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Announcement } from "./types";

export const fetchAnnouncementsUser = createAsyncThunk<Announcement[], string>(
  "announcementsUser/fetchAnnouncements",
  async () => {
    const response = await axios.get(`/api/users/houses`);
    return response.data;
  },
);
