import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: (params) =>
        `/books?search=${params.search}&genre=${params.genre}&year=${params.year}`,
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: book,
      }),
    }),
    addReview: builder.mutation({
      query: ({ id, ...review }) => ({
        url: `books/add-review/${id}`,
        method: "PATCH",
        body: review,
      }),
    }),
    addBook: builder.mutation({
      query: ({ ...book }) => ({
        url: `books`,
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const {
  useGetAllBookQuery,
  useGetBookQuery,
  useDeleteBookMutation,
  useEditBookMutation,
  useAddReviewMutation,
  useAddBookMutation,
} = api;
