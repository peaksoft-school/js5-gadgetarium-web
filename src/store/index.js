import { configureStore } from '@reduxjs/toolkit'

import adminPanelSlice from './slices/adminPanelSlice'
import authSlice from './slices/authSlice'
import compareProductSlice from './slices/comparisonSlice'
import mainProductSlice from './slices/mainProductSlice'
import productSlice from './slices/productSlice'
import wishListSlice from './slices/WishListSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      wishProducts: wishListSlice.reducer,
      compareProducts: compareProductSlice.reducer,
      product: productSlice.reducer,
      adminPanel: adminPanelSlice.reducer,
   },
})

export default store
