/**
 * Styles for PlaceCard component
 */

import { StyleSheet } from "react-native";
import { Spacing } from "../../constants/spacing";
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  titleContainer: {
    flex: 1,
    marginRight: Spacing.lg,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: Spacing.md,
    height: Spacing.md,
    tintColor: Colors.switchTrackActive,
    marginEnd: Spacing.xs,
  },
  switchContainer: {
    alignItems: "center",
  },
});
