/**
 * ErrorMessage component
 * Displays an error message in a centered view
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Spacing } from "../../constants/spacing";
import { Typography, LayoutStyles } from "../../theme";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <View style={LayoutStyles.center}>
      <Text style={styles.error}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    ...Typography.body,
    color: Colors.error,
    textAlign: "center",
    paddingHorizontal: Spacing.xl,
  },
});

export default ErrorMessage;
