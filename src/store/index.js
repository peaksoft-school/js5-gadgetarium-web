import { configureStore } from '@reduxjs/toolkit'

import adminPanelSlice from './slices/adminPanelSlice'
import authSlice from './slices/authSlice'
import compareProductSlice from './slices/comparisonSlice'
import feedbackSlice from './slices/feedbackSlice'
import mainProductSlice from './slices/mainProductSlice'
import ordersPanelSilce from './slices/ordersPanelSlice'
import productSlice from './slices/productSlice'
import userContactSlice from './slices/userContactSlice'
import userListSlice from './slices/userListSlice'
import wishListSlice from './slices/WishListSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      wishProducts: wishListSlice.reducer,
      compareProducts: compareProductSlice.reducer,
      product: productSlice.reducer,
      adminPanel: adminPanelSlice.reducer,
      contactUs: userContactSlice.reducer,
      feedback: feedbackSlice.reducer,
      orders: ordersPanelSilce.reducer,
      userProfile: userListSlice.reducer,
   },
})

export default store
