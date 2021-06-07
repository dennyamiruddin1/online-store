import { createSlice } from '@reduxjs/toolkit'

import { order, order_history } from '../dummyfiles'


const orderSlice = createSlice({
  name: 'order',
  initialState: { order: order, orderHistory: order_history },
  reducers: {
    addOrder(state, action) {
      const newOrder = {
        id: action.payload.id,
        email: action.payload.email,
        orderer: action.payload.orderer,
        address: action.payload.address,
        phone: action.payload.phone,
        date: action.payload.date,
        orderedCart: action.payload.orderedCart
      }
      state.order = newOrder;
    },
    replaceOrderedCart(state, action) {
      state.order.orderedCart = action.payload
    }
  }
})

export const orderActions = (orderSlice.actions)
export default orderSlice