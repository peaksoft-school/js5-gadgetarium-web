import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   getAllWishProducts,
   removeAllProducts,
   removeProduct,
   addToWishProducts,
} from '../../services/WishListService'

import { getMainNewProduct } from './productActions'

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

export const deleteWishProducts = createAsyncThunk(
   'wishProducts/deleteAllProducts',
   async ({ id, productId, dispatch }, { rejectWithValue }) => {
      try {
         const response = await removeProduct(id, productId)
         dispatch(getMainNewProduct())
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const addWishProducts = createAsyncThunk(
   'wishProducts/addWishProducts',
   async ({ id, productId, dispatch }, { rejectWithValue }) => {
      console.log(id, productId)
      try {
         console.log('click')
         const response = await addToWishProducts(id, productId)
         dispatch(getMainNewProduct())
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
