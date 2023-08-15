import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://simple-book-app-server.vercel.app",
  }),
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: (params) =>
        `/books?search=${params.search}&genre=${params.genre}&year=${params.year}`,
    }),
    getBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `book/${id}`,
        method: "DELETE",
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `book/${id}`,
        method: "PATCH",
        body: book,
      }),
    }),
    addReview: builder.mutation({
      query: ({ id, ...review }) => ({
        url: `add-review/${id}`,
        method: "PATCH",
        body: review,
      }),
    }),
    addBook: builder.mutation({
      query: ({ ...book }) => ({
        url: `book`,
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
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
