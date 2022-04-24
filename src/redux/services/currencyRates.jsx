import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ratesApi = createApi({
  reducerPath: "ratesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.exchangerate.host",
  }),
  endpoints: (builder) => ({
    getRates: builder.query({
      query: () => `/latest?base=UAH&symbols=USD,PLN,EUR`,
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetRatesQuery,
} = ratesApi;