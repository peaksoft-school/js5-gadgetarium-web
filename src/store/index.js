import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import compareProductSlice from './slices/comparisonSlice'
import mainProductSlice from './slices/productSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      compareProducts: compareProductSlice.reducer,
   },
})

export default store
