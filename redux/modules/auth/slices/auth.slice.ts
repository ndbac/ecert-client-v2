import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import {
  IIamUser,
  IUserLogin,
  IUserRegister,
} from "../interfaces/auth.interface";
import baseUrl from "../../../../utils/baseUrl";

const resetRegister = createAction("auth/register");

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (userData: IUserLogin, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.put<IIamUser>(
        `${baseUrl}/auth/login`,
        userData,
        config
      );
      localStorage.setItem("token", data.token.access_token);
      localStorage.setItem("id", data.id);
      localStorage.setItem("time", data.token.expires_in.toString());
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

export const registerUserAction = createAsyncThunk(
  "auth/register",
  async (userData: IUserRegister, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${baseUrl}/auth/register`,
        userData,
        config
      );
      dispatch(resetRegister());
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

let userLoginFromStorage;
if (typeof window !== "undefined") {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const time = localStorage.getItem("time");
  userLoginFromStorage = {
    id,
    token: {
      access_token: token,
      expires_in: time,
    },
  };
}

const authSlices = createSlice({
  name: "auth",
  initialState: {
    ...userLoginFromStorage,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Login user action
    builder.addCase(loginUserAction.pending, (state) => {
      state.loading = true;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.loading = false;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
    // Register user action
    builder.addCase(registerUserAction.pending, (state) => {
      state.loading = true;
      state.serverErr = undefined;
    });
    builder.addCase(resetRegister, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state) => {
      state.registered = false;
      state.loading = false;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
  },
});

export default authSlices.reducer;
