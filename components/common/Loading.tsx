/**
 * Loading component
 * Displays a centered activity indicator
 */

import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { LayoutStyles } from "../../theme";

interface LoadingProps {
  size?: "small" | "large";
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "large",
  color = Colors.primary,
}) => {
  return (
    <View style={[LayoutStyles.center, { backgroundColor: Colors.surface }]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
