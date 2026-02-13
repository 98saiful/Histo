/**
 * Separator component
 * A reusable horizontal line divider for separating content sections
 */

import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "../../constants/colors";
import { Spacing } from "../../constants/spacing";

interface SeparatorProps {
  /** Height/thickness of the separator line (default: StyleSheet.hairlineWidth) */
  height?: number;
  /** Color of the separator line (default: Colors.divider) */
  color?: string;
  /** Vertical margin above and below the separator (default: Spacing.md) */
  marginVertical?: number;
  /** Additional styles to apply to the separator */
  style?: ViewStyle;
}

export const Separator: React.FC<SeparatorProps> = ({
  height = StyleSheet.hairlineWidth,
  color = Colors.divider,
  marginVertical = Spacing.md,
  style,
}) => {
  return (
    <View
      style={[
        styles.separator,
        {
          height,
          backgroundColor: color,
          marginVertical,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
  },
});

export default Separator;
