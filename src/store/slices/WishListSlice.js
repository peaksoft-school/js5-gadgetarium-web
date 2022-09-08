import { createSlice } from '@reduxjs/toolkit'

import { getAllProducts, deleteAllProducts } from '../actions/wishListActions'

const initialState = {
   wishProducts: [],
   error: '',
   loading: false,
}

const wishListSlice = createSlice({
   name: 'wishProducts',
   initialState,
   reducers: {},
   extraReducers: {
      [getAllProducts.pending]: (state) => {
         state.loading = true
      },
      [getAllProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.wishProducts = action.payload
      },
      [getAllProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [deleteAllProducts.pending]: (state) => {
         state.loading = true
      },
      [deleteAllProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.wishProducts = action.payload
      },
      [deleteAllProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default wishListSlice
