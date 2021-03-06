import { createSlice } from "@reduxjs/toolkit";
//create redux slice for cart
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, img } = action.payload;
      const product = { id, name, price, img, quantity: 1 };
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === id);
      if (index === -1) {
        cart.push(product);
      } else {
        cart[index].quantity += 1;
      }
      state.cart = cart;
      state.total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === id);
      cart[index].quantity += 1;
      state.cart = cart;
      state.total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === id);
      cart[index].quantity -= 1;
      if (cart[index].quantity === 0) {
        cart.splice(index, 1);
      }
      state.cart = cart;
      state.total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === id);
      cart.splice(index, 1);
      state.cart = cart;
      state.total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    removeAllFromCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
