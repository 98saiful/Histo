import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Colors } from "../constants";
import store from "../store";

/**
 * Root layout - wraps the app with Redux Provider and SafeAreaProvider
 */
export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: Colors.background },
            headerTitleStyle: { color: Colors.textInverse },
            headerTintColor: Colors.textInverse,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Historical Places",
            }}
          />
          <Stack.Screen
            name="details/[id]"
            options={{
              title: "Place Details",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
}
