import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import * as api from '../../services/comareService'

import { getProductsCatalog } from './CatalogActions'

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
   async (_, { dispatch }) => {
      try {
         const response = await api.deleteAllCompareProducts()
         dispatch(getCompareProducts())
         dispatch(getHoverCompareProducts())
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)

export const removeCompareProduct = createAsyncThunk(
   'compareProducts/removeCompareProduct',
   async ({ productId }, { dispatch }) => {
      try {
         const response = await api.deleteCompareProductById(productId)
         dispatch(getHoverCompareProducts())
         dispatch(getCompareProducts())
         toast.success('Успешно удалено!')
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)

export const addToComparison = createAsyncThunk(
   'compareProducts/removeCompareProduct',
   async ({ id, queryParams }, { dispatch }) => {
      try {
         const response = await api.postToComparison(id)
         toast.success('Товар успешно добавлен для сравнения')
         dispatch(getHoverCompareProducts())
         dispatch(getProductsCatalog(queryParams))
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)
