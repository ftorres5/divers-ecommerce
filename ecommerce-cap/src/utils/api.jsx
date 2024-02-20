import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fakestoreapi.com/"

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ['Products']
    }),
    getId: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Products'],
    }),
    // addEvent: builder.mutation({
    //   query: (body) => ({
    //     url: `events`,
    //     method: 'POST',
    //     body
    //   }),
    //   invalidatesTags: ['Products'],
    // }),
 
  }),
  // Can add middleware here if desired
  // middleware:
});

export const { useGetProductsQuery, useGetIdMutation} = productsApi