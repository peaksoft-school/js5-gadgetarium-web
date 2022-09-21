import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import * as api from '../../services/cartServices'

import { getMainNewProduct } from './productActions'

export const postProducts = createAsyncThunk(
   'cartProducts/postToCart',
   async (productId, { dispatch }) => {
      try {
         const response = await api.postToCart(productId)
         dispatch(getMainNewProduct())
         dispatch(getAllHoverProducts())
         toast.success('Товар успешно добавлен в корзину')
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)

export const getAllProducts = createAsyncThunk(
   'cartProducts/getToCart',
   async (_, { rejectWithValue }) => {
      try {
         const response = await api.getAllCartProducts()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getAllHoverProducts = createAsyncThunk(
   'cartProducts/getAllHoverProducts',
   async (_, { rejectWithValue }) => {
      try {
         const response = await api.getAllHoverCartProducts()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const deleteProducts = createAsyncThunk(
   'cartProducts/deleteProduct',
   async (productId, { dispatch }) => {
      try {
         const response = await api.deleteCartItemById(productId)
         dispatch(getMainNewProduct())
         dispatch(getAllProducts())
         dispatch(getAllHoverProducts())
         toast.success('Успешно удалено!')
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)

export const getProductsTotalSum = createAsyncThunk(
   'cartProducts/getTotalSum',
   async (productId, { rejectWithValue }) => {
      try {
         const response = await api.getTotalSum(productId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
