import { createSlice } from '@reduxjs/toolkit'

import {
   getMainDiscountProduct,
   getMainNewProduct,
   getMainRecommendProduct,
} from '../actions/productActions'

const initialState = {
   products: {
      newProduct: [],
      discount: [],
      recommend: [],
   },
   error: '',
   loading: false,
}

const mainProductSlice = createSlice({
   name: 'mainProducts',
   initialState,
   reducers: {},
   extraReducers: {
      [getMainNewProduct.pending]: (state) => {
         state.loading = true
      },
      [getMainNewProduct.fulfilled]: (state, action) => {
         state.loading = false
         state.newProduct = action.payload
      },
      [getMainNewProduct.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getMainDiscountProduct.pending]: (state) => {
         state.loading = true
      },
      [getMainDiscountProduct.fulfilled]: (state, action) => {
         state.loading = false
         state.discount = action.payload
      },
      [getMainDiscountProduct.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getMainRecommendProduct.pending]: (state) => {
         state.loading = true
      },
      [getMainRecommendProduct.fulfilled]: (state, action) => {
         state.loading = false
         state.recommend = action.payload
      },
      [getMainRecommendProduct.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default mainProductSlice
