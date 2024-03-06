import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../utils/api"
import signinReducer from "../state/userSlice"


export const store = configureStore({
  reducer: {
    signin:  signinReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

