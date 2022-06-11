import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import {
  NotificationState,
  IEmailSend,
} from "../interfaces/notification.interface";
import baseUrl from "../../../../utils/baseUrl";

export const userSendEmail = createAsyncThunk(
  "notification/mail",
  async (emailData: IEmailSend, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${baseUrl}/notification`,
        emailData,
        config
      );
      return data;
    } catch (error) {
      const err = error as AxiosError | Error;
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err?.response?.data);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

const notificationSlices = createSlice({
  name: "notification",
  initialState: {} as NotificationState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSendEmail.pending, (state) => {
      state.loading = true;
      state.serverErr = undefined;
    });
    builder.addCase(userSendEmail.fulfilled, (state) => {
      state.emailSent = true;
      state.loading = false;
      state.serverErr = undefined;
    });
    builder.addCase(userSendEmail.rejected, (state, action) => {
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
  },
});

export default notificationSlices.reducer;
