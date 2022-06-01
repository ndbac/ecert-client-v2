import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../../../utils/baseUrl";
import axios, { AxiosError } from "axios";
import { IAccountState } from "../interface/account.interface";

export const getUserDetail = createAsyncThunk(
  "account/user",
  async (userId: string, { rejectWithValue }) => {
    try {
      const url = `${baseUrl}/account/${userId}`;
      const response = await axios.get(url);
      return response.data;
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

export const accountSlices = createSlice({
  name: "account",
  initialState: {} as IAccountState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetail.pending, (state) => {
        state.loading = true;
        state.serverErr = undefined;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...action.payload };
        state.serverErr = undefined;
      })
      .addCase(getUserDetail.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      });
  },
});
export default accountSlices.reducer;
