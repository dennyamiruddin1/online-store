import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice(
  {
    name: "toggleToast",
    initialState: { toggle: false },
    reducers: {
      showToast(state) {
        state.toggle = true;
      },
      hideToast(state) {
        state.toggle = false;
      }
    }
  },
  {
    name: "toggle",
    initialState: { toggle: false },
    reducers: {
      show(state) {
        state.toggle = true;
      },
      hide(state) {
        state.toggle = false;
      }
    }
  },
)

export const uiActions = uiSlice.actions;
export default uiSlice;