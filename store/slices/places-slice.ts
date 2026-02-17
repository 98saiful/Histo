import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlacesState {
  visited: Record<string, boolean>;
}

const initialState: PlacesState = {
  visited: {},
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    toggleVisited: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.visited[id]) {
        delete state.visited[id];
      } else {
        state.visited[id] = true;
      }
    },
  },
});

export const { toggleVisited } = placesSlice.actions;

export default placesSlice.reducer;
