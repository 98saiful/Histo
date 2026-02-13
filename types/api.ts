/**
 * API-related types
 */

import { Place } from "./place";

/**
 * Raw API response structure from UNESCO API
 */
export interface ApiResponse {
  results: ApiPlaceItem[];
  total_count: number;
}

export interface ApiPlaceItem {
  id_no?: string;
  name_en?: string;
  states_names?: string;
  main_image_url?: {
    url?: string;
  };
  short_description_en?: string;
  date_inscribed?: string;
  latitude?: number;
  longitude?: number;
}

/**
 * Transformed response for places list
 */
export interface PlacesResponse {
  places: Place[];
  totalCount: number;
}
