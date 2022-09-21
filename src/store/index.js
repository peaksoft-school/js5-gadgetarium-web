import { configureStore } from '@reduxjs/toolkit'

import adminPanelSlice from './slices/adminPanelSlice'
import authSlice from './slices/authSlice'
import { cartSlice } from './slices/cartSlice'
import compareProductSlice from './slices/comparisonSlice'
import mainProductSlice from './slices/mainProductSlice'
import productSlice from './slices/productSlice'
import userContactSlice from './slices/userContactSlice'
import wishListSlice from './slices/WishListSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      cart: cartSlice.reducer,
      wishProducts: wishListSlice.reducer,
      compareProducts: compareProductSlice.reducer,
      product: productSlice.reducer,
      adminPanel: adminPanelSlice.reducer,
      contactUs: userContactSlice.reducer,
   },
})

export default store
