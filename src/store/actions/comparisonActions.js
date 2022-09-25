import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import * as api from '../../services/comareService'

import { getProductsCatalog } from './CatalogActions'
import {
   getMainNewProduct,
   getMainDiscountProduct,
   getMainRecommendProduct,
} from './productActions'

const getBySort = (param) => {
   switch (param) {
      case 'NEW':
         return getMainNewProduct()
      case 'DISCOUNT':
         return getMainDiscountProduct()
      case 'RECOMMEND':
         return getMainRecommendProduct()
      default:
         return getMainNewProduct()
   }
}

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
   async ({ id, queryParams, sort, productId }, { dispatch }) => {
      console.log(productId)
      try {
         const response = await api.deleteCompareProductById(id || productId)
         dispatch(getHoverCompareProducts())
         dispatch(getBySort(sort))
         dispatch(getCompareProducts())
         dispatch(getProductsCatalog(queryParams))
         toast.success('Успешно удалено!')
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)

export const addToComparison = createAsyncThunk(
   'compareProducts/removeCompareProduct',
   async ({ id, queryParams, sort }, { dispatch }) => {
      try {
         const response = await api.postToComparison(id)
         toast.success('Товар успешно добавлен для сравнения')
         dispatch(getHoverCompareProducts())
         dispatch(getBySort(sort))
         dispatch(getProductsCatalog(queryParams))
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)
