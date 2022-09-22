import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
   getFeedbacks,
   getFeedbackStars,
   postFeedback,
} from '../../services/feedbackServices'
import { fileUpload } from '../../services/fileUploadServices'

export const getAllFeedbacks = createAsyncThunk(
   'feedback/getAllFeedbacks',
   async (productId, { rejectWithValue }) => {
      try {
         const response = await getFeedbacks(productId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const leaveFeedback = createAsyncThunk(
   'feedback/leaveFeedbacks',
   async ({ feedbackData, files }, { rejectWithValue }) => {
      try {
         const fullData = {
            ...feedbackData,
            images: [],
         }
         // eslint-disable-next-line no-plusplus
         for (let index = 0; index < files.length; index++) {
            const image = files[index]
            const formData = new FormData()
            formData.append('file', image.file)
            // eslint-disable-next-line no-await-in-loop
            const response = await fileUpload(formData)
            fullData.images.push(response?.data.link)
         }
         const response = await postFeedback({ fullData })
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getFeedbackRatings = createAsyncThunk(
   'feedback/getFeedbackRatings',
   async (productId, { rejectWithValue }) => {
      try {
         const response = await getFeedbackStars(productId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

const initialState = {
   feedbacks: {
      userFeedbacks: [],
   },
   feedbackRating: [],
   message: '',
   error: '',
   loading: false,
}

const feedbackSlice = createSlice({
   name: 'feedbacks',
   initialState,
   reducers: {},
   extraReducers: {
      [getAllFeedbacks.pending]: (state) => {
         state.loading = true
      },
      [getAllFeedbacks.fulfilled]: (state, action) => {
         state.loading = false
         state.feedbacks.userFeedbacks = action.payload
      },
      [getAllFeedbacks.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getFeedbackRatings.pending]: (state) => {
         state.loading = true
      },
      [getFeedbackRatings.fulfilled]: (state, action) => {
         state.loading = false
         state.feedbackRating = action.payload
      },
      [getFeedbackRatings.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [leaveFeedback.pending]: (state) => {
         state.loading = true
      },
      [leaveFeedback.fulfilled]: (state) => {
         state.loading = false
         state.message = 'success'
      },
      [leaveFeedback.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default feedbackSlice
