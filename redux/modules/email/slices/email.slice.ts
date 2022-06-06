import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import {
  EmailState,
  ISendCertiToEmailReq,
} from "../interfaces/email.interface";
import baseUrl from "../../../../utils/baseUrl";

export const sendCertificationToEmail = createAsyncThunk(
  "certification/sendCerti",
  async (input: ISendCertiToEmailReq, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(input);
    try {
      const { data } = await axios.post(
        `${baseUrl}/accuracy/send-certification`,
        input,
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

const emailSlices = createSlice({
  name: "email",
  initialState: {} as EmailState,
  reducers: {},
  extraReducers: (builder) => {
    // Send certification to email
    builder.addCase(sendCertificationToEmail.pending, (state) => {
      state.loading = true;
      state.serverErr = undefined;
      state.isSent = false;
    });
    builder.addCase(sendCertificationToEmail.fulfilled, (state) => {
      state.isSent = true;
      state.loading = false;
      state.serverErr = undefined;
    });
    builder.addCase(sendCertificationToEmail.rejected, (state, action) => {
      state.serverErr = action?.error?.message;
      state.loading = false;
      state.isSent = false;
    });
  },
});

export default emailSlices.reducer;
