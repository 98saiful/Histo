/**
 * Loading component
 * Displays a centered activity indicator
 */

import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
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
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...LayoutStyles.center,
    backgroundColor: Colors.surface,
  },
});

export default Loading;
