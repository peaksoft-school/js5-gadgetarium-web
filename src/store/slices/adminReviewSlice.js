import { createSlice } from '@reduxjs/toolkit'

import {
   getReviews,
   postReviews,
   putReviews,
   deleteReview,
} from '../actions/adminReviewAction'

const initialState = {
   feedbacks: [],
   read: [],
   unread: [],
   error: '',
   loading: false,
}

const adminReviewSlice = createSlice({
   name: 'adminFeedbacks',
   initialState,
   reducers: {},
   extraReducers: {
      [getReviews.pending]: (state) => {
         state.loading = true
      },
      [getReviews.fulfilled]: (state, action) => {
         state.loading = false
         state.feedbacks = action.payload
         const read = action.payload
            .filter((el) => el.status === 'read')
            .map((el) => el.feedbackResponses)
         const unread = action.payload
            .filter((el) => el.status === 'unread')
            .map((el) => el.feedbackResponses)
         state.read = [...read]
         state.unread = [...unread]
         state.feedbacks = read.concat(unread)
      },
      [getReviews.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [postReviews.pending]: (state) => {
         state.loading = true
      },
      [postReviews.fulfilled]: (state, action) => {
         state.loading = false
         state.putReviews = action.payload
      },
      [postReviews.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [putReviews.pending]: (state) => {
         state.loading = true
      },
      [putReviews.fulfilled]: (state, action) => {
         state.loading = false
         state.postStatus = action.payload
      },
      [putReviews.pending]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [deleteReview.pending]: (state) => {
         state.loading = true
      },
      [deleteReview.fulfilled]: (state, action) => {
         state.loading = false
         state.deleteReviews = action.payload
      },
      [deleteReview.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default adminReviewSlice
