import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getAllWishProducts,
   removeAllProducts,
   removeProduct,
   addToWishProducts,
   getAllHoverWishProducts,
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

export const getHoverWishProducts = createAsyncThunk(
   'compareProducts/getHoverWishProducts',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getAllHoverWishProducts()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
export const deleteAllProducts = createAsyncThunk(
   'wishProducts/deleteAllProducts',
   async ({ userId }, { dispatch }) => {
      try {
         const response = await removeAllProducts(userId)
         dispatch(getHoverWishProducts())
         return response.data
      } catch (err) {
         return console.log(err.response.data)
      }
   }
)

export const deleteWishProducts = createAsyncThunk(
   'wishProducts/deleteAllProducts',
   async ({ id, productId }, { dispatch }) => {
      try {
         const response = await removeProduct(id, productId)
         toast.success('Товар успешно удален')
         dispatch(getMainNewProduct())
         dispatch(getHoverWishProducts())
         return response.data
      } catch (err) {
         console.log(err)
         return console.log(err.response.data)
      }
   }
)

export const addWishProducts = createAsyncThunk(
   'wishProducts/addWishProducts',
   async ({ id, productId }, { dispatch }) => {
      try {
         const response = await addToWishProducts(id, productId)
         dispatch(getMainNewProduct())
         dispatch(getHoverWishProducts())
         return response.data
      } catch (err) {
         return console.log(err.response.data)
      }
   }
)
