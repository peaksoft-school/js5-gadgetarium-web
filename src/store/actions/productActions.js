import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   getDiscountProducts,
   getNewProducts,
   getRecommendProducts,
} from '../../services/productService'

export const getMainNewProduct = createAsyncThunk(
   'products/getMainNewProduct',
   async (size, { rejectWithValue }) => {
      try {
         const response = await getNewProducts(size)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getMainDiscountProduct = createAsyncThunk(
   'products/getMainDiscountProduct',
   async (size, { rejectWithValue }) => {
      try {
         const response = await getDiscountProducts(size)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getMainRecommendProduct = createAsyncThunk(
   'products/getMainRecommendProduct',
   async (size, { rejectWithValue }) => {
      try {
         const response = await getRecommendProducts(size)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
