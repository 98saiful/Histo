/**
 * Theme configuration
 * Centralized styling for the entire application
 */

import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import { Spacing, BorderRadius } from "../constants/spacing";
import { Layout } from "../constants/layout";

/**
 * Common shadow styles
 */
export const Shadows = StyleSheet.create({
  sm: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: Layout.SHADOW_ELEVATION.sm,
  },
  md: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: Layout.SHADOW_ELEVATION.md,
  },
  lg: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: Layout.SHADOW_ELEVATION.lg,
  },
});

/**
 * Common card styles
 */
export const CardStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    overflow: "hidden",
    marginBottom: Spacing.lg,
    ...Shadows.md,
  },
  image: {
    width: "100%",
    height: Layout.CARD_IMAGE_HEIGHT,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.overlay,
    justifyContent: "flex-end",
    // alignItems: "center",
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xl,
  },
});

/**
 * Common text styles
 */
export const Typography = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
  },
  heading2: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
  heading3: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
  },
  body: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    color: Colors.textTertiary,
  },
  small: {
    fontSize: 12,
    color: Colors.textTertiary,
  },
  xsmall: {
    fontSize: 10,
    color: Colors.textTertiary,
  },
  inverse: {
    color: Colors.textInverse,
  },
});

/**
 * Layout styles
 */
export const LayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenPadding: {
    padding: Layout.SCREEN_PADDING,
  },
});

/**
 * Button styles
 */
export const ButtonStyles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: Layout.FAB_POSITION,
    bottom: Layout.FAB_POSITION,
    backgroundColor: Colors.primary,
    width: Layout.FAB_SIZE,
    height: Layout.FAB_SIZE,
    borderRadius: BorderRadius.full,
    justifyContent: "center",
    alignItems: "center",
    ...Shadows.lg,
  },
  fabText: {
    fontSize: 24,
    color: Colors.textInverse,
  },
});
