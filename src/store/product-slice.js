import { createSlice } from '@reduxjs/toolkit'

import { products, excel_products } from '../dummyfiles'

const initialProductsState = { products, excel_products }

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    viewExcelProducts(state, action) {
      state.excel_products = action.payload
    },
    uploadExcelProducts(state) {
      if (excel_products.length < 0) {
        console.log('error')
      } else {
        const newProducts = state.products.concat(state.excel_products);
        state.products = newProducts;
        state.excel_products = [];
      }
    }
  }
})

export const productsActions = productsSlice.actions;
export default productsSlice