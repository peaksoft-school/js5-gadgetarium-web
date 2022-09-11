import { configureStore } from '@reduxjs/toolkit'

import adminPanelSlice from './slices/adminPanelSlice'
import authSlice from './slices/authSlice'
import mainProductSlice from './slices/mainProductSlice'
import productSlice from './slices/productSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      product: productSlice.reducer,
      adminPanel: adminPanelSlice.reducer,
   },
})

export default store
