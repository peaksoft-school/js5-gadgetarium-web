import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   getAllWishProducts,
   removeAllProducts,
   addToWishProducts,
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

export const addWishProducts = createAsyncThunk(
   'wishProducts/addWishProducts',
   async (id, productId, { rejectWithValue }) => {
      try {
         console.log(id, productId)
         console.log('click')
         const response = await addToWishProducts(id, productId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
