import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ratesApi } from "../services/currencyRates";

export const store = configureStore({
  reducer: {
    [ratesApi.reducerPath]: ratesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ratesApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);