import { createSlice } from '@reduxjs/toolkit'

import {
   getOrders,
   updateOrdersStatusById,
   deleteOrderById,
   getOrderInfographic,
} from '../actions/orderActions'

const initialState = {
   orders: [],
   infographic: null,
   sizeOfProducts: null,
   totalPage: null,
   error: '',
   loading: false,
}

const ordersPanelSilce = createSlice({
   name: 'orders',
   initialState,
   reducers: {},
   extraReducers: {
      [getOrders.pending]: (state) => {
         state.loading = true
      },
      [getOrders.fulfilled]: (state, action) => {
         state.loading = false
         state.orders = action.payload.orders
         state.sizeOfProducts = action.payload.countOfOrders
         state.totalPage = action.payload.totalPage
      },
      [getOrders.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getOrderInfographic.pending]: (state) => {
         state.loading = true
      },
      [getOrderInfographic.fulfilled]: (state, action) => {
         state.loading = false
         state.infographic = action.payload
      },
      [getOrderInfographic.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [updateOrdersStatusById.pending]: (state) => {
         state.loading = true
      },
      [updateOrdersStatusById.fulfilled]: (state) => {
         state.loading = false
      },
      [updateOrdersStatusById.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [deleteOrderById.pending]: (state) => {
         state.loading = true
      },
      [deleteOrderById.fulfilled]: (state) => {
         state.loading = false
      },
      [deleteOrderById.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default ordersPanelSilce
