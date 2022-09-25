import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   getAllCategories,
   getAllSubcategories,
   getAllBrands,
} from '../../../services/productServices'

export const getCategories = createAsyncThunk(
   'product/getCategories',
   async () => {
      try {
         const { data } = await getAllCategories()
         return data
      } catch (err) {
         return console.error(err.response.data)
      }
   }
)

export const getSubcategories = createAsyncThunk(
   'product/getSubcategories',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getAllSubcategories(id)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getBrands = createAsyncThunk('product/brands', async () => {
   try {
      const { data } = await getAllBrands()
      return data
   } catch (err) {
      return console.error(err.response.data)
   }
})
