/**
 * DetailsScreen - Displays detailed information about a historical place
 */

import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Switch, Text, View } from "react-native";

import { calendar, location, map } from "../../assets";
import { ErrorMessage, Loading, Separator } from "../../components/common";
import { Colors } from "../../constants";
import { useVisitedStatus } from "../../hooks";
import { useGetHistoricalPlacesDetailsQuery } from "../../services/places-api";
import { styles } from "../../styles/details";
import { Typography } from "../../theme";
import { formatErrorMessage, getImageUrl } from "../../utils";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isVisited, toggle } = useVisitedStatus();

  const {
    data: place,
    isLoading,
    error,
  } = useGetHistoricalPlacesDetailsQuery(id);

  const handleToggleVisited = () => {
    if (place) {
      toggle(place.id);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error || !place) {
    return (
      <ErrorMessage
        message={
          error ? formatErrorMessage(error) : "Failed to fetch place details"
        }
      />
    );
  }

  const visited = isVisited(place.id);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: getImageUrl(place.image),
        }}
        style={styles.image}
        contentFit="cover"
      />

      <View style={styles.content}>
        <Text style={[Typography.heading1, Typography.inverse]}>
          {place.name}
        </Text>
        <Separator color={Colors.textSecondary} />

        <View style={styles.row}>
          <Image source={location} style={styles.iconSmall} />
          <Text style={styles.country}>{place.country}</Text>
        </View>

        {place.date_inscribed && (
          <View style={styles.row}>
            <Image source={calendar} style={styles.iconSmall} />
            <Text style={Typography.caption}>{place.date_inscribed}</Text>
          </View>
        )}

        <Separator color={Colors.textSecondary} />

        <View style={styles.visitCard}>
          <View style={styles.row}>
            <Image source={map} style={styles.iconMedium} />
            <View>
              <Text style={Typography.inverse}>Have you visited?</Text>
              <Text style={[Typography.inverse, Typography.small]}>
                Track your historical journey
              </Text>
            </View>
          </View>
          <Switch
            trackColor={{
              false: Colors.switchTrackInactive,
              true: Colors.switchTrackActive,
            }}
            thumbColor={
              visited ? Colors.switchThumbActive : Colors.switchThumbInactive
            }
            onValueChange={handleToggleVisited}
            value={visited}
            accessibilityLabel={`Mark ${place.name} as ${visited ? "unvisited" : "visited"}`}
          />
        </View>

        <Text
          style={[Typography.caption, Typography.inverse, styles.description]}
        >
          {place.description || "No description available."}
        </Text>
      </View>
    </ScrollView>
  );
}
