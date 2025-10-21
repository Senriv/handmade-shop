import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BanerProps from "@/types/baner.types";

export interface Product {
  productId: number;
  productName: string;
  sendingDataShort: {
    price: number;
    imageUrl: string;
    variants: Record<string, string>;
    discountPrice: number | null;
  };
}

export interface PageResponse<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  sort: { sorted: boolean; empty: boolean; unsorted: boolean };
  pageable: {
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
    sort: { sorted: boolean; empty: boolean; unsorted: boolean };
  };
}

type GetAllProductsParams = { page?: number; size?: number };

export const apiRequests = createApi({
  reducerPath: "apiRequests",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rotry.xyz:9090" }),
  endpoints: (build) => ({
    getAllProducts: build.query<PageResponse<Product>, GetAllProductsParams>({
      query: ({ page = 0, size = 12 } = {}) =>
        `/api/v1/products?page=${page}&size=${size}`,
      keepUnusedDataFor: 60,
    }),
    getBaner: build.query<BanerProps[], void>({
      query: () => "/api/images/baner",
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetBanerQuery } = apiRequests;
