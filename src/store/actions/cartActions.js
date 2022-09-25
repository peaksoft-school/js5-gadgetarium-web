import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import * as api from '../../services/cartServices'

// import {
//    getMainNewProduct,
//    getMainDiscountProduct,
//    getMainRecommendProduct,
// } from './productActions'

// const getBySort = (param) => {
//    switch (param) {
//       case 'NEW':
//          return getMainNewProduct()
//       case 'DISCOUNT':
//          return getMainDiscountProduct()
//       case 'RECOMMEND':
//          return getMainRecommendProduct()
//       default:
//          return getMainNewProduct()
//    }
// }

export const postProducts = createAsyncThunk(
   'cartProducts/postToCart',
   async ({ productId, sort }, { dispatch }) => {
      console.log(sort)
      try {
         const response = await api.postToCart(productId)
         // dispatch(getBySort(sort))
         dispatch(getAllHoverProducts())
         toast.success('Товар успешно добавлен в корзину')
         return response.data
      } catch (err) {
         return err.response.data
      }
   }
)

export const deleteProducts = createAsyncThunk(
   'cartProducts/deleteProduct',
   async (productId, { dispatch }) => {
      try {
         const response = await api.deleteCartItemById(productId)
         dispatch(getAllProducts())
         dispatch(getAllHoverProducts())
         toast.success('Товар успешно удален!')
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

export const getProductsTotalSum = createAsyncThunk(
   'cartProducts/getTotalSum',
   async (productIds, { rejectWithValue }) => {
      console.log(productIds)
      try {
         const response = await api.getTotalSum(productIds)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
