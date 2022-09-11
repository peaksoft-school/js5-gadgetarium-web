import { createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '../../services/comareService'

export const getCompareProducts = createAsyncThunk(
   'compareProducts/getCompareProducts',
   async (_, { rejectWithValue }) => {
      try {
         const response = await api.getAllCompareProducts()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getHoverCompareProducts = createAsyncThunk(
   'compareProducts/getHoverCompareProducts',
   async (_, { rejectWithValue }) => {
      try {
         const response = await api.getAllHoverCompareProducts()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const removeAllCompareProducts = createAsyncThunk(
   'compareProducts/removeAllCompareProducts',
   async (_, { rejectWithValue }) => {
      try {
         const response = await api.deleteAllCompareProducts()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const removeCompareProduct = createAsyncThunk(
   'compareProducts/removeCompareProduct',
   async (id, { rejectWithValue }) => {
      try {
         const response = await api.deleteCompareProductById(id)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const addToComparison = createAsyncThunk(
   'compareProducts/removeCompareProduct',
   async (id, { rejectWithValue }) => {
      try {
         const response = await api.postToComparison(id)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
