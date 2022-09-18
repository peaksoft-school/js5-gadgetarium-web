import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import feedbackSlice from './slices/feedbackSlice'
import mainProductSlice from './slices/productSlice'
import userContactSlice from './slices/userContactSlice'

const store = configureStore({
   reducer: {
      mainProducts: mainProductSlice.reducer,
      auth: authSlice.reducer,
      contactUs: userContactSlice.reducer,
      feedback: feedbackSlice.reducer,
   },
})

export default store
