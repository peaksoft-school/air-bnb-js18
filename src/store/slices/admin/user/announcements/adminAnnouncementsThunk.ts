import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Announcement } from "./types";

export const fetchAdminAnnouncements = createAsyncThunk<Announcement[], string>(
  "announcements/fetchAdminAnnouncements",
  async (userId) => {
    const response = await axios.get(`/api/admin/announcements/${userId}`);
    return response.data;
  },
);