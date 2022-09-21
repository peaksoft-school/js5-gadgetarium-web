import { configureStore } from '@reduxjs/toolkit'

import adminPanelSlice from './slices/adminPanelSlice'
import authSlice from './slices/authSlice'
import catalogSlice from './slices/catalogSlice'
import compareProductSlice from './slices/comparisonSlice'
import mainProductSlice from './slices/mainProductSlice'
import ordersPanelSilce from './slices/ordersPanelSlice'
import productSlice from './slices/productSlice'
import userContactSlice from './slices/userContactSlice'
import userListSlice from './slices/userListSlice'
import wishListSlice from './slices/WishListSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      catalogSlice: catalogSlice.reducer,
      wishProducts: wishListSlice.reducer,
      compareProducts: compareProductSlice.reducer,
      product: productSlice.reducer,
      adminPanel: adminPanelSlice.reducer,
      contactUs: userContactSlice.reducer,
      orders: ordersPanelSilce.reducer,
      mainProducts: mainProductSlice.reducer,
      userProfile: userListSlice.reducer,
   },
})

export default store
