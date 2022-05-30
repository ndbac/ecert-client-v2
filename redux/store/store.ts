import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/slices/auth.slice";
import certiReducer from "../modules/certification/slices/certification.slice";

const store = configureStore({
  reducer: {
    authReducer,
    certiReducer,
  },
});

export default store;
