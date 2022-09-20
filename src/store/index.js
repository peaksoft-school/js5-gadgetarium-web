import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import catalogSlice from './slices/catalogSlice'
import mainProductSlice from './slices/productSlice'

export const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      catalogSlice: catalogSlice.reducer,
   },
})

export default store
