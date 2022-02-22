import { createSlice } from "@reduxjs/toolkit";
//create redux slice for cart
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const { id, name, price, img } = action.payload;
      const product = { id, name, price, img };
      const favorites = [...state.favorites];
      const index = favorites.findIndex((item) => item.id === id);
      if (index === -1) {
        favorites.push(product);
      } else {
        favorites.splice(index, 1);
      }
      state.favorites = favorites;
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
