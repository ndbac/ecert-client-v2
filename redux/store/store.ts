import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/slices/auth.slice";
import certiReducer from "../modules/certification/slices/certification.slice";
import verifyReducer from "../modules/verify/slices/verify.slice";
import accountReducer from "../modules/account/slices/account.slice";
const store = configureStore({
  reducer: {
    authReducer,
    certiReducer,
    verifyReducer,
    accountReducer,
  },
});

export default store;
