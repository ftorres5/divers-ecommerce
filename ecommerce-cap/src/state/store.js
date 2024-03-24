import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../utils/api"
import signinReducer from "../state/userSlice"
import cartReducer from './cartSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    signin:  signinReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

