// // Import the necessary functions from '@reduxjs/toolkit/query/react'
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// /**
//  * Create an API service using Redux Toolkit Query
//  *
//  * The `createApi` function from Redux Toolkit Query is used to define an API service.
//  * It generates endpoints and hooks for interacting with the API.
//  */
// export const api = createApi({
//   // The name for the slice of the state that will store the API cache
//   reducerPath: "adminApi",

//   // The base query function to use for fetching data from the API
//   // `fetchBaseQuery` is a simplified fetch wrapper that automatically handles base URLs and headers
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

//   // Define the possible tags that can be used for caching and invalidating data
//   tagTypes: ["User"],

//   // Define the endpoints (API operations) for this service
//   endpoints: (build) => ({
//     /**
//      * Define a query endpoint to get user data by ID
//      *
//      * The `getUser` endpoint is defined using the `build.query` function.
//      * It generates a hook and other utilities for querying user data.
//      */
//     getUser: build.query({
//       // The `query` function returns the URL for the request
//       // In this case, it constructs the URL using the user ID parameter
//       query: (id) => `general/user/${id}`,
//     }),
//   }),
// });

// /**
//  * Export the auto-generated hook for the `getUser` query
//  *
//  * The `useGetUserQuery` hook can be used in React components to fetch user data.
//  * This hook is created automatically based on the `getUser` endpoint defined above.
//  */
// export const { useGetUserQuery } = api;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
    }),
  }),
});

export const { useGetUserQuery } = api;
