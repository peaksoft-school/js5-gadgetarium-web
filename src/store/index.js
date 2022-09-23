import { configureStore } from '@reduxjs/toolkit'

import adminReviewSlice from './slices/adminReviewSlice'
import authSlice from './slices/authSlice'
import mainProductSlice from './slices/productSlice'
import userContactSlice from './slices/userContactSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      contactUs: userContactSlice.reducer,
      adminFeedbacks: adminReviewSlice.reducer,
   },
})

export default store
