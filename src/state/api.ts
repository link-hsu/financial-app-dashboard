import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_PORT }),
  // import.meta.env.VITE_BASE_URL
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    // first genetic is the response we want
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"]
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    // deleteProduct:
    //   invalidateTags: ["Products"]
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

// use 是 React hook 的前綴。
// GetKpis 是 getKpis 函數名稱的 PascalCase 版本。
export const {  useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;


// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
//   reducerPath: "main",
//   tagTypes: ["Kpis", "Products", "Transactions"],
//   endpoints: (build) => ({
//     getKpis: build.query<void, void>({
//       query: () => "kpi/kpis/",
//       providesTags: ["Kpis"],
//     }),
//     getProducts: build.query<Array<GetProductsResponse>, void>({
//       query: () => "product/products/",
//       providesTags: ["Products"],
//     }),
//     getTransactions: build.query<Array<GetTransactionsResponse>, void>({
//       query: () => "transaction/transactions/",
//       providesTags: ["Transactions"],
//     }),
//   }),
// });




// export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
//   api;