import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://simple-book-app-server.vercel.app",
  }),
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetAllBookQuery } = api;
