import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import {
  IUploadCertificationRes,
  IUploadCertificationReq,
  CertState,
  IGetCertificationReq,
} from "../interfaces/certification.interface";
import baseUrl from "../../../../utils/baseUrl";

const resetUploadCert = createAction("certification/upload");

export const uploadCertAction = createAsyncThunk(
  "certification/upload",
  async (inputData: IUploadCertificationReq, { rejectWithValue, dispatch }) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const formData = new FormData();
      formData.append("data", inputData.data);
      formData.append("name", inputData.name);
      formData.append("subject", inputData.subject);
      formData.append("email", inputData.email);
      formData.append("image", inputData.file);
      const { data } = await axios.post<IUploadCertificationRes>(
        `${baseUrl}/accuracy/automatically/generate`,
        formData,
        config
      );
      dispatch(resetUploadCert());
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

export const getCertification = createAsyncThunk(
  "certification/get",
  async (inputData: IGetCertificationReq, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IUploadCertificationRes>(
        `${baseUrl}/user/accuracy/${inputData.signature}`
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

const certificationSlices = createSlice({
  name: "certification",
  initialState: {} as CertState,
  reducers: {},
  extraReducers: (builder) => {
    // Upload certification action
    builder.addCase(uploadCertAction.pending, (state) => {
      state.loading = true;
      state.serverErr = undefined;
    });
    builder.addCase(resetUploadCert, (state) => {
      state.isCreated = true;
    });
    builder.addCase(uploadCertAction.fulfilled, (state) => {
      state.isCreated = false;
      state.loading = false;
      state.serverErr = undefined;
    });
    builder.addCase(uploadCertAction.rejected, (state, action) => {
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
    // Get certification
    builder.addCase(getCertification.pending, (state) => {
      state.loading = true;
      state.serverErr = undefined;
    });
    builder.addCase(getCertification.fulfilled, (state, action) => {
      state.uploadCert = action?.payload;
      state.loading = false;
      state.serverErr = undefined;
    });
    builder.addCase(getCertification.rejected, (state, action) => {
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
  },
});

export default certificationSlices.reducer;
