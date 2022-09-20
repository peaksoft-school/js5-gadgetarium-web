import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import orderHistorySlice from './slices/orderHistorySlice'
import userListSlice from './slices/userListSlice'
import wishListSlice from './slices/wishListSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      wishProducts: wishListSlice.reducer,
      userProfile: userListSlice.reducer,
      userOrders: orderHistorySlice.reducer,
   },
})

export default store
