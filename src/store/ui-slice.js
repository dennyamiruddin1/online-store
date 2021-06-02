import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice(
  {
    name: "ui",
    initialState: { show: false, addToCartNotificationData: null, fetchingCartDataNotificationData: null },
    reducers: {
      showNotification(state) {
        state.show = true;
      },
      hideNotification(state) {
        state.show = false;
      },
      setNotificationData(state, action) {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message
        }
        state.show = true;
        console.log('clicked!')
      }
    }
  }
)

export const uiActions = uiSlice.actions;
export default uiSlice;