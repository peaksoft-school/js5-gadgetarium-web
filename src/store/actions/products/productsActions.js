import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getAllProducts,
   getProduct,
   deleteProduct,
} from '../../../services/productServices'

export const getProducts = createAsyncThunk(
   'products/getProducts',
   async (queryParams, { rejectWithValue }) => {
      try {
         const { data } = await getAllProducts(queryParams)
         return data
      } catch (err) {
         return rejectWithValue(err.response.data.error)
      }
   }
)

export const getProductById = createAsyncThunk(
   'products/getProductById',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await getProduct(id)
         return data
      } catch (err) {
         return rejectWithValue(err.response.data.error)
      }
   }
)

export const deleteProductById = createAsyncThunk(
   'products/deleteProduct',
   async (productId, { rejectWithValue }) => {
      try {
         const { data } = await deleteProduct(productId)
         toast.success('Товар успешно удален')
         return data
      } catch (error) {
         toast.error('Что-то пошло не так')
         return rejectWithValue(error.response.data.error)
      }
   }
)
