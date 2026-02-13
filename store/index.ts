import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { placesApi } from "../services/places-api";
import { mmkvStorage } from "./mmkv-storage";
import placesReducer from "./slices/places-slice";

/**
 * Root reducer combining persisted places slice and API reducer
 */
const rootReducer = combineReducers({
  places: persistReducer(
    {
      key: "places",
      storage: mmkvStorage,
    },
    placesReducer
  ),
  [placesApi.reducerPath]: placesApi.reducer,
});

/**
 * Redux store configuration
 */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(placesApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
