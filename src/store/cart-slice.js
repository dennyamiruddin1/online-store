import { createSlice } from '@reduxjs/toolkit'

import { cart } from '../dummyfiles'

const initialCartState = { cart: cart, quantity: 0, total: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload.id)
      const newItem = {
        id: action.payload.id,
        label: action.payload.label,
        price: action.payload.price,
        description: action.payload.description,
        image: action.payload.image,
        quantity: 1,
        totalprice: action.payload.price
      }
      if (!existingItem) {
        state.cart.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.price * existingItem.quantity
      }
      state.total = state.total + newItem.price
      state.quantity++;
    },
    removeItemFromCart(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload.id)
      if (!existingItem) {
        <p>Something is wrong!</p>
      } else {
        if (existingItem.quantity === 1) {
          const newState = state.cart.filter(item => item.id !== existingItem.id);
          state.cart = newState;
        } else {
          existingItem.quantity--
          existingItem.totalprice = existingItem.price * existingItem.quantity
        }
      }
      state.total = state.total - existingItem.price
      state.quantity--;
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice