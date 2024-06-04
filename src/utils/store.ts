import { configureStore } from "@reduxjs/toolkit";
import beneficiaryReducer from "./beneficiarySlice";

export const store = configureStore({
  reducer: {
    beneficiary: beneficiaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
