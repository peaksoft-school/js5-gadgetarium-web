import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getAllOrders,
   getOrderInfo,
   deleteOrders,
   updateOrdersStatus,
} from '../../services/ordersService'

export const getOrders = createAsyncThunk(
   'orders/getOrders',
   async (queryParams, { rejectWithValue }) => {
      try {
         const { data } = await getAllOrders(queryParams)
         return data
      } catch (err) {
         return rejectWithValue(err.response.data.error)
      }
   }
)

export const getOrderInfographic = createAsyncThunk(
   'orders/getOrderInfographic',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getOrderInfo()
         return data
      } catch (err) {
         return rejectWithValue(err.response.data.error)
      }
   }
)

export const updateOrdersStatusById = createAsyncThunk(
   'orders/updateOrdersStatusById',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await updateOrdersStatus(id)
         return data
      } catch (err) {
         return rejectWithValue(err.response.data.error)
      }
   }
)

export const deleteOrderById = createAsyncThunk(
   'products/deleteProduct',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await deleteOrders(id)
         toast.success('Товар успешно удален')
         return data
      } catch (error) {
         toast.error('Что-то пошло не так')
         return rejectWithValue(error.response.data.error)
      }
   }
)
