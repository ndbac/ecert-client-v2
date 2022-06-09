import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../modules/auth/slices/auth.slice";
import certiReducer from "../modules/certification/slices/certification.slice";
import verifyReducer from "../modules/verify/slices/verify.slice";
import accountReducer from "../modules/account/slices/account.slice";
import emailReducer from "../modules/email/slices/email.slice";
import notiReducer from "../modules/notification/slices/notification.slice";

const store = configureStore({
  reducer: {
    authReducer,
    certiReducer,
    verifyReducer,
    accountReducer,
    emailReducer,
    notiReducer,
  },
});

export default store;
