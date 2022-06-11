import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../../../utils/baseUrl";
import axios, { AxiosError } from "axios";
import {
  IPostGet,
  IPostRandomGet,
  IPostState,
} from "../interface/post.interface";

export const getPost = createAsyncThunk(
  "user/post/get",
  async (data: IPostGet, { rejectWithValue }) => {
    try {
      const url = `${baseUrl}/user/post`;
      const response = await axios.get(url, { params: data });
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

export const getRandomPost = createAsyncThunk(
  "user/post/random/get",
  async (data: IPostRandomGet, { rejectWithValue }) => {
    try {
      const url = `${baseUrl}/user/post/random-posts/${data.quantity}`;
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

export const getPostDetail = createAsyncThunk(
  "user/post",
  async (postId: string | string[], { rejectWithValue }) => {
    try {
      const url = `${baseUrl}/user/post/${postId}`;
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

export const postSlices = createSlice({
  name: "post",
  initialState: {} as IPostState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
        state.serverErr = undefined;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.list = [...action.payload];
        state.serverErr = undefined;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      })
      .addCase(getPostDetail.pending, (state) => {
        state.loading = true;
        state.serverErr = undefined;
      })
      .addCase(getPostDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.serverErr = undefined;
      })
      .addCase(getPostDetail.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      })
      .addCase(getRandomPost.pending, (state) => {
        state.loading = true;
        state.serverErr = undefined;
      })
      .addCase(getRandomPost.fulfilled, (state, action) => {
        state.loading = false;
        state.list = [...action.payload];
        state.serverErr = undefined;
      })
      .addCase(getRandomPost.rejected, (state, action) => {
        state.serverErr = action?.error?.message;
        state.loading = false;
      });
  },
});

export default postSlices.reducer;
