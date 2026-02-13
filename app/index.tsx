/**
 * HomeScreen - Displays a list of historical places
 */

import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, RefreshControl, View } from "react-native";

import { FlashList } from "@shopify/flash-list";
import {
  ErrorMessage,
  FabButton,
  Loading,
  PlaceCard,
} from "../components/common";
import { useVisitedStatus } from "../hooks";
import { useGetHistoricalPlacesInfiniteQuery } from "../services/places-api";
import { styles } from "../styles/home";
import { LayoutStyles } from "../theme";
import { Place } from "../types";
import { getRandomInt } from "../utils";

export default function HomeScreen() {
  const router = useRouter();
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
    isFetching,
    refetch,
  } = useGetHistoricalPlacesInfiniteQuery();

  const { isVisited, toggle } = useVisitedStatus();

  const places = data?.pages.flatMap((page) => page.places) ?? [];
  const totalCount = data?.pages[0]?.totalCount ?? 0;

  const handlePress = (place: Place) => {
    router.push(`/details/${place.id}`);
  };

  const handleRandomSuggestion = () => {
    if (places.length > 0) {
      const randomIndex = getRandomInt(0, totalCount);
      router.push(`/details/${randomIndex}`);
    }
  };

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefresh = () => {
    refetch();
  };

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" />
      </View>
    );
  };

  const renderItem = ({ item }: { item: Place }) => (
    <PlaceCard
      place={item}
      isVisited={isVisited(item.id)}
      onPress={handlePress}
      onToggleVisited={() => toggle(item.id)}
    />
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={
          "message" in error && error.message
            ? error.message
            : "Failed to fetch places"
        }
      />
    );
  }

  return (
    <View style={LayoutStyles.container}>
      <FlashList
        data={places}
        renderItem={renderItem}
        keyExtractor={(item: Place) => item.id.toString()}
        contentContainerStyle={styles.list}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        removeClippedSubviews={true}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={handleRefresh} />
        }
      />
      <FabButton
        icon="🎲"
        onPress={handleRandomSuggestion}
        accessibilityLabel="Get random place suggestion"
      />
    </View>
  );
}
