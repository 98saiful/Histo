/**
 * API configuration constants
 */

export const API = {
  // Base URL for UNESCO World Heritage API
  BASE_URL: "https://data.unesco.org/api/explore/v2.1/catalog/datasets/whc001",

  // Pagination
  DEFAULT_LIMIT: 20,

  // Timeout settings
  TIMEOUT: 10000, // 10 seconds

  // Retry settings
  MAX_RETRIES: 3,
} as const;

/**
 * Default image URLs for fallbacks
 */
export const DefaultImages = {
  PLACEHOLDER:
    "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
} as const;
