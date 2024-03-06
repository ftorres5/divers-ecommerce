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
    getId: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Products'],
    }),
    userLogin: builder.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Login'],
    }),
 
  }),
  // Can add middleware here if desired
  // middleware:
});

export const { useGetProductsQuery, useGetIdQuery, useUserLoginMutation } = productsApi