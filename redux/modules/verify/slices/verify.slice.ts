import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../../../utils/baseUrl";
import axios, { AxiosError } from "axios";
import {
  IVerifyData,
  IVerifyAccountState,
  IVerifyPassword,
  IPasswordData,
} from "../interface/verify.interface";

export const createVerifyAccountToken = createAsyncThunk(
  "create/verify",
  async (data: string, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data}`,
        Accept: "application/json",
      },
    };
    try {
      const url = `${baseUrl}/verify/createVerifyAccountToken`;
      const res = await axios.put(url, {}, config);
      return res.data.status;
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
export const verifyToken = createAsyncThunk(
  "verify",
  async (data: IVerifyData, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.loginToken}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.put(
        `${baseUrl}/verify/${data.tokenId}`,
        {},
        config
      );
      return res.data.message;
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

export const createResetPasswordToken = createAsyncThunk(
  "passwordToken",
  async (data: IPasswordData, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `${baseUrl}/verify/createResetPasswordToken`,
        data
      );
      return res.data.status;
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
export const resetPassword = createAsyncThunk(
  "passwordReset",
  async (data: IVerifyPassword, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `${baseUrl}/verify/reset-password/${data.token}`,
        data.data
      );
      return res.data.status;
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

export const verifySlices = createSlice({
  name: "verify-account",
  initialState: {} as IVerifyAccountState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVerifyAccountToken.pending, (state) => {
        state.serverErr = undefined;
        state.loading = true;
      })
      .addCase(createVerifyAccountToken.fulfilled, (state, action) => {
        state.serverErr = undefined;
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(createVerifyAccountToken.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      })

      .addCase(verifyToken.pending, (state) => {
        state.loading = true;
        state.serverErr = undefined;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.serverErr = undefined;
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      })
      .addCase(createResetPasswordToken.pending, (state) => {
        state.loading = true;
        state.serverErr = undefined;
      })
      .addCase(createResetPasswordToken.fulfilled, (state, action) => {
        state.serverErr = undefined;
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(createResetPasswordToken.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.serverErr = undefined;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.serverErr = undefined;
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      });
  },
});
export default verifySlices.reducer;
