import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import wishListSlice from './slices/wishListSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      wishProducts: wishListSlice.reducer,
   },
})

export default store
