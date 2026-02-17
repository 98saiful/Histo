/**
 * Separator component
 * A reusable horizontal line divider for separating content sections
 */

import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colors } from "../../constants/colors";
import { Spacing } from "../../constants/spacing";

interface SeparatorProps {
  height?: number;
  color?: string;
  marginVertical?: number;
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
