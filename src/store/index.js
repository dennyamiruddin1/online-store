import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productsSlice from "./products-slice";
import uiSlice from "./ui-slice";
import orderSlice from "./order-slice";

import testSlice from "./test-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    ui: uiSlice.reducer,
    order: orderSlice.reducer,
    test: testSlice.reducer,
  },
});

export default store;
