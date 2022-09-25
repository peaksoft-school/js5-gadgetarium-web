import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getAllWishProducts,
   removeAllProducts,
   removeProduct,
   addToWishProducts,
   getAllHoverWishProducts,
} from '../../services/WishListService'

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

export const getUserWishList = createAsyncThunk(
   'wishProducts/getAllProducts',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await getAllWishProducts(userId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getHoverWishProducts = createAsyncThunk(
   'compareProducts/getHoverWishProducts',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getAllHoverWishProducts()
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
export const deleteAllProducts = createAsyncThunk(
   'wishProducts/deleteAllProducts',
   async ({ userId }, { dispatch }) => {
      try {
         const response = await removeAllProducts(userId)
         dispatch(getHoverWishProducts())
         return response.data
      } catch (err) {
         return console.error(err.response.data)
      }
   }
)

export const deleteWishProducts = createAsyncThunk(
   'wishProducts/deleteWishProducts',
   async ({ id, productId, queryParams, sort }, { dispatch }) => {
      try {
         const response = await removeProduct(id, productId)
         toast.success('Товар успешно удален')
         dispatch(getBySort(sort))
         dispatch(getHoverWishProducts())
         dispatch(getProductsCatalog(queryParams))
         return response.data
      } catch (err) {
         return console.error(err.response.data)
      }
   }
)

export const addWishProducts = createAsyncThunk(
   'wishProducts/addWishProducts',
   async ({ id, productId, queryParams, sort }, { dispatch }) => {
      try {
         const response = await addToWishProducts(id, productId)
         dispatch(getBySort(sort))
         dispatch(getHoverWishProducts())
         dispatch(getProductsCatalog(queryParams))
         return response.data
      } catch (err) {
         return console.error(err.response.data)
      }
   }
)
