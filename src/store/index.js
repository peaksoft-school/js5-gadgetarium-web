import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import formSlice from './slices/formSlice'
import productSlice from './slices/productSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      form: formSlice.reducer,
      product: productSlice.reducer,
   },
})

export default store
