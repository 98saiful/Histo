/**
 * Places API service
 * Uses Redux Toolkit Query for data fetching
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Place } from "../types/place";
import { ApiResponse, PlacesResponse } from "../types/api";
import { API } from "../constants/api";

export const placesApi = createApi({
  reducerPath: "placesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API.BASE_URL,
  }),
  tagTypes: ["Places"],
  endpoints: (builder) => ({
    getHistoricalPlaces: builder.infiniteQuery<PlacesResponse, void, number>({
      infiniteQueryOptions: {
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          // If we got less than LIMIT results, there are no more pages
          if (lastPage.places.length < API.DEFAULT_LIMIT) {
            return undefined;
          }
          return lastPageParam + API.DEFAULT_LIMIT;
        },
      },
      providesTags: ["Places"],
      query: ({ pageParam }) => {
        const params = new URLSearchParams({
          select: "id_no, name_en, states_names, main_image_url",
          limit: API.DEFAULT_LIMIT.toString(),
          offset: pageParam.toString(),
        });
        return `/records?${params.toString()}`;
      },
      transformResponse: (response: ApiResponse): PlacesResponse => {
        return {
          places: response.results.map((item) => ({
            id: item.id_no || 0,
            name: item.name_en || "Unknown Place",
            description: "",
            image: item.main_image_url?.url || null,
            country: item.states_names || "Unknown Country",
            date_inscribed: undefined,
          })),
          totalCount: response.total_count,
        };
      },
    }),
    getHistoricalPlacesDetails: builder.query<Place, string>({
      providesTags: ["Places"],
      query: (id) => {
        const params = new URLSearchParams({
          select:
            "id_no, name_en, states_names, main_image_url, short_description_en, date_inscribed",
          where: `id_no="${id}"`,
          limit: "1",
        });
        return `/records?${params.toString()}`;
      },
      transformResponse: (response: ApiResponse): Place => {
        const item = response.results[0];
        if (!item) {
          throw new Error("Place not found");
        }
        return {
          id: item.id_no || "",
          name: item.name_en || "Unknown Place",
          description: item.short_description_en || "",
          image: item.main_image_url?.url || null,
          country: item.states_names || "Unknown Country",
          date_inscribed: item.date_inscribed,
        };
      },
    }),
  }),
});

export const {
  useGetHistoricalPlacesInfiniteQuery,
  useGetHistoricalPlacesDetailsQuery,
  util: { invalidateTags },
} = placesApi;
