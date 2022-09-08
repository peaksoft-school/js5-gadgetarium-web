import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { getAllProducts, getProduct } from '../../../services/productServices'

export const getProducts = createAsyncThunk(
   'products/getProducts',
   async (queryParams, { rejectWithValue }) => {
      try {
         const { data } = await getAllProducts(queryParams)
         console.log(data)
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
         console.log(data)
         return data
      } catch (err) {
         return rejectWithValue(err.response.data.error)
      }
   }
)

export const deleteProductById = createAsyncThunk(
   'products/deleteProduct',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await getAllProducts(id)
         toast.success('Товар успешно удален')
         console.log(data)
         return data
      } catch (error) {
         toast.error('Что-то пошло не так')
         return rejectWithValue(error.response.data.error)
      }
   }
)
