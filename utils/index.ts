/**
 * Utility functions
 */

import { DefaultImages } from "../constants/api";

/**
 * Get a random integer between min and max (exclusive)
 */
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Get image URL with fallback to placeholder
 */
export const getImageUrl = (image: string | null | undefined): string => {
  return image || DefaultImages.PLACEHOLDER;
};

/**
 * Format error message from various error types
 */
export const formatErrorMessage = (error: unknown): string => {
  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }
  return "An unexpected error occurred";
};
