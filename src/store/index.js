import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
// eslint-disable-next-line import/no-cycle
import catalogSlice from './slices/catalogSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      catalogSlice: catalogSlice.reducer,
   },
})

export default store
