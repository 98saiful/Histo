/**
 * FabButton component
 * Floating Action Button with customizable icon/text
 */

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ButtonStyles } from "../../theme";

interface FabButtonProps {
  onPress: () => void;
  icon: string;
  accessibilityLabel?: string;
}

export const FabButton: React.FC<FabButtonProps> = ({
  onPress,
  icon,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      style={ButtonStyles.fab}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.8}
    >
      <Text style={ButtonStyles.fabText}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default FabButton;
