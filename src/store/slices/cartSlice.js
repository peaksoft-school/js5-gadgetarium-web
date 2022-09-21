import { createSlice } from '@reduxjs/toolkit'

import {
   getAllProducts,
   postProducts,
   getProductsTotalSum,
   deleteProducts,
   getAllHoverProducts,
} from '../actions/cartActions'

const initialState = {
   cartProducts: [],
   cartHoverProducts: [],
   cartTotalSum: {},
   error: '',
   loading: false,
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {},
   extraReducers: {
      [postProducts.pending]: (state) => {
         state.loading = true
      },
      [postProducts.fulfilled]: (state) => {
         state.loading = false
      },
      [postProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getAllProducts.pending]: (state) => {
         state.loading = true
      },
      [getAllProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.cartProducts = action.payload
      },
      [getAllProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getProductsTotalSum.pending]: (state) => {
         state.loading = true
      },
      [getProductsTotalSum.fulfilled]: (state, action) => {
         state.loading = false
         state.cartTotalSum = action.payload
      },
      [getProductsTotalSum.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [deleteProducts.pending]: (state) => {
         state.loading = true
      },
      [deleteProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.cartProducts = action.payload
      },
      [deleteProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getAllHoverProducts.pending]: (state) => {
         state.loading = true
      },
      [getAllHoverProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.cartHoverProducts = action.payload
      },
      [getAllHoverProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

const cartActions = cartSlice.actions
export default cartActions
