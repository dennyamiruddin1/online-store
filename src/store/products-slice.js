import { createSlice } from "@reduxjs/toolkit";

import {
  products,
  excel_products,
  product,
  filteredProducts,
} from "../datafiles";

const initialProductsState = {
  products,
  excel_products,
  product,
  filteredProducts,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    viewExcelProducts(state, action) {
      state.excel_products = action.payload;
    },
    uploadExcelProducts(state) {
      if (excel_products.length < 0) {
        console.log("error");
      } else {
        const newProducts = state.products.concat(state.excel_products);
        state.products = newProducts;
        state.excel_products = [];
      }
    },
    selectProduct(state, action) {
      const product = state.products.find((item) => item.id === action.payload);
      state.product = product;
    },
    filterProducts(state, action) {
      const filteredProducts = state.products.filter(
        (item) => item.type === action.payload
      );
      state.filteredProducts = filteredProducts;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
