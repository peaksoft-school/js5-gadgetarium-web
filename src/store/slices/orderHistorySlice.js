import { createSlice } from '@reduxjs/toolkit'

import { getProducts, getOrders } from '../actions/orderHistoryListActions'

const initialState = {
   userOrders: [],
   userProducts: [],
   error: '',
   loading: false,
}

const orderHistorySlice = createSlice({
   name: 'userOrders',
   initialState,
   reducers: {},
   extraReducers: {
      [getProducts.pending]: (state) => {
         state.loading = true
      },
      [getProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.userProducts = action.payload
      },
      [getProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getOrders.pending]: (state) => {
         state.loading = true
      },
      [getOrders.fulfilled]: (state, action) => {
         state.loading = false
         state.userOrders = action.payload
      },
      [getOrders.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})
export default orderHistorySlice
