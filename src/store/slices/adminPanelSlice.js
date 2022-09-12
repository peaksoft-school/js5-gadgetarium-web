import { createSlice } from '@reduxjs/toolkit'

import {
   deleteProductById,
   getProductById,
   getProducts,
} from '../actions/products/productsActions'

const initialState = {
   products: {
      allproducts: [],
      on_sale: [],
      basket: [],
      wish_list: [],
   },
   product: {},
   sizeOfProducts: null,
   totalPage: null,
   error: '',
   loading: false,
}

const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers: {
      [getProducts.pending]: (state) => {
         state.loading = true
      },
      [getProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.products.allproducts = action.payload.allProducts
         state.sizeOfProducts = action.payload.sizeOfProducts
         state.totalPage = action.payload.totalPage
      },
      [getProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [deleteProductById.pending]: (state) => {
         state.loading = true
      },
      [deleteProductById.fulfilled]: (state, action) => {
         state.loading = false
         const {
            arg: { id },
         } = action.meta
         if (id) {
            state.products.allproducts = state.products.allproducts.filter(
               (item) => item.id !== id
            )
         }
      },
      [deleteProductById.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getProductById.pending]: (state) => {
         state.loading = true
      },
      [getProductById.fulfilled]: (state, action) => {
         state.loading = false
         state.product = action.payload
      },
      [getProductById.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export const { clearSessionStorage } = productSlice.actions

export default productSlice
