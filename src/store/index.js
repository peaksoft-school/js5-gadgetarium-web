import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import mainProductSlice from './slices/productSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
   },
})

export default store
