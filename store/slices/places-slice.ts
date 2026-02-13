import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlacesState {
  visited: (string | number)[];
}

const initialState: PlacesState = {
  visited: [],
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    toggleVisited: (state, action: PayloadAction<string | number>) => {
      const id = action.payload;
      if (state.visited.includes(id)) {
        state.visited = state.visited.filter((placeId) => placeId !== id);
      } else {
        state.visited.push(id);
      }
    },
  },
});

export const { toggleVisited } = placesSlice.actions;

export default placesSlice.reducer;
