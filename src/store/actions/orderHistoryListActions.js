import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   getorderHistoryProducts,
   getorderHistoryOrders,
} from '../../services/orderHistoryListService'

export const getOrders = createAsyncThunk(
   'orderHistoryProducts/getProducts',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await getorderHistoryOrders(userId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getProducts = createAsyncThunk(
   'orderHistoryProducts/getProducts',
   async (orderId, { rejectWithValue }) => {
      try {
         const response = await getorderHistoryProducts(orderId)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
