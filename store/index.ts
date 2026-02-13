import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "./slices/places-slice";
import { placesApi } from "../services/places-api";

/**
 * Redux store configuration
 */
const store = configureStore({
  reducer: {
    places: placesReducer,
    [placesApi.reducerPath]: placesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(placesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
