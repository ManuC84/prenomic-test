import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  devTools: true,
});
