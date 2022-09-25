import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getAllReviews,
   postAllReviews,
   postIsRead,
   putAllReviews,
   deleteReviews,
} from '../../services/adminReviewService'

export const getReviews = createAsyncThunk(
   'feedback/getReviews',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getAllReviews()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const readAction = createAsyncThunk(
   'feedback/readAction',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await postIsRead(id)
         dispatch(getReviews())
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const postReviews = createAsyncThunk(
   'feedback/postReviews',
   async ({ id, value }, { rejectWithValue }) => {
      try {
         const response = await postAllReviews(id, value)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const putReviews = createAsyncThunk(
   'feedback/putReviews',
   async ({ id, value }, { rejectWithValue, dispatch }) => {
      try {
         const response = await putAllReviews(id, value)
         dispatch(getReviews())
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const deleteReview = createAsyncThunk(
   'feedback/deleteReview',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await deleteReviews(id)
         dispatch(getReviews())
         toast.success('Успешно удалено')
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
