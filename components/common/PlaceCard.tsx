/**
 * PlaceCard component
 * Reusable card for displaying a place in a list
 */

import { Image } from "expo-image";
import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { location } from "../../assets";
import { Colors } from "../../constants/colors";
import { CardStyles, Typography } from "../../theme";
import { Place } from "../../types";
import { styles } from "./PlaceCard.styles";

interface PlaceCardProps {
  place: Place;
  isVisited: boolean;
  onPress: (place: Place) => void;
  onToggleVisited: () => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  isVisited,
  onPress,
  onToggleVisited,
}) => {
  return (
    <TouchableOpacity
      style={CardStyles.container}
      onPress={() => onPress(place)}
      activeOpacity={0.9}
    >
      <Image
        source={{
          uri: place.image || "",
        }}
        style={CardStyles.image}
        contentFit="cover"
      />
      <View style={CardStyles.overlay}>
        <View style={styles.headerRow}>
          <View style={styles.titleContainer}>
            <Text
              numberOfLines={2}
              style={[Typography.heading3, Typography.inverse]}
            >
              {place.name}
            </Text>
            <View style={styles.locationRow}>
              <Image source={location} style={styles.locationIcon} />
              <Text
                numberOfLines={2}
                style={[Typography.caption, Typography.inverse]}
              >
                {place.country}
              </Text>
            </View>
          </View>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{
                false: Colors.switchTrackInactive,
                true: Colors.switchTrackActive,
              }}
              thumbColor={
                isVisited
                  ? Colors.switchThumbActive
                  : Colors.switchThumbInactive
              }
              onValueChange={onToggleVisited}
              value={isVisited}
              accessibilityLabel={`Mark ${place.name} as ${isVisited ? "unvisited" : "visited"}`}
            />
            <Text style={[Typography.xsmall, Typography.inverse]}>
              {isVisited ? "Visited" : "Visit"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;
