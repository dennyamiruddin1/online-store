import { createSlice } from "@reduxjs/toolkit";

import { cart } from "../datafiles";

const initialCartState = { cart: cart, quantity: 0, total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.cart.push({
          id: action.payload.id,
          label: action.payload.label,
          price: action.payload.price,
          description: action.payload.description,
          image: action.payload.image,
          quantity: action.payload.quantity,
          totalPrice: action.payload.totalPrice,
        });
      } else {
        existingProduct.quantity =
          existingProduct.quantity + action.payload.quantity;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
      }
      state.total = state.cart.reduce((total, product) => {
        return total + product.totalPrice;
      }, 0);
      state.quantity = state.cart.reduce((quantity, product) => {
        return quantity + product.quantity;
      }, 0);
    },
    removeItemFromCart(state, action) {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        <p>Something is wrong!</p>;
      } else {
        if (existingProduct.quantity === 1) {
          const newState = state.cart.filter(
            (product) => product.id !== existingProduct.id
          );
          state.cart = newState;
        } else {
          existingProduct.quantity--;
          existingProduct.totalPrice =
            existingProduct.price * existingProduct.quantity;
        }
      }
      state.total = state.total - existingProduct.price;
      state.quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
