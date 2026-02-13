/**
 * Color palette for the application
 */

export const Colors = {
  // Primary colors
  primary: "#19e619",
  primaryDark: "#132e13",
  primaryLight: "#1d2c1d",

  // Secondary colors
  secondary: "#03dac6",
  secondaryDark: "#018786",

  // Background colors
  // background: "#f5f5f5",
  background: "#0a1f0a",
  surface: "#132e13",
  surfaceDark: "#1b5e20",
  surfaceDarker: "#144718",

  // Text colors
  text: "#000000",
  textSecondary: "#666666",
  textTertiary: "#888888",
  textInverse: "#ffffff",

  // Status colors
  success: "#388e3c",
  error: "#d32f2f",
  warning: "#f57c00",
  info: "#1976d2",

  // UI Element colors
  divider: "#e0e0e0",
  overlay: "rgba(0, 0, 0, 0.3)",
  shadow: "#000000",

  // Interactive element colors
  switchTrackActive: "#8fb38f",
  switchTrackInactive: "#0a1f0a",
  switchThumbActive: "#19e619",
  switchThumbInactive: "#f4f3f4",

  // Activity indicator
  loading: "#0000ff",
} as const;

export type ColorType = keyof typeof Colors;
