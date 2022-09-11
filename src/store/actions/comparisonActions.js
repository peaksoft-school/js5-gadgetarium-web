import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

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
   async (dispatch, { rejectWithValue }) => {
      try {
         const response = await api.deleteAllCompareProducts()
         dispatch(getCompareProducts())
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const removeCompareProduct = createAsyncThunk(
   'compareProducts/removeCompareProduct',
   async (id, { rejectWithValue }) => {
      console.log(id)
      try {
         const response = await api.deleteCompareProductById(id)
         toast.success('Успешно удалено!')
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
