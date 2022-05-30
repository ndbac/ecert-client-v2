import store from "../../store/store";

export enum IamNamespace {
  ADMIN = "admin",
  PROJECT = "project",
  USER = "user",
  GUEST = "guest",
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
