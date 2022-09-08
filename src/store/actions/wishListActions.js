import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   getAllWishProducts,
   removeAllProducts,
} from '../../services/wishListService'

export const getAllProducts = createAsyncThunk(
   'wishProducts/getAllProducts',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await getAllWishProducts(userId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
export const deleteAllProducts = createAsyncThunk(
   'wishProducts/deleteAllProducts',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await removeAllProducts(userId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
