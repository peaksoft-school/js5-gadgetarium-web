import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getAllProducts,
   deleteAllProducts,
   addWishProducts,
   getHoverWishProducts,
} from '../actions/wishListActions'

const initialState = {
   wishProducts: [],
   hoverWishProducts: [],
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
      [getHoverWishProducts.pending]: (state) => {
         state.loading = true
      },
      [getHoverWishProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.hoverWishProducts = action.payload
      },
      [getHoverWishProducts.rejected]: (state, action) => {
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
      [addWishProducts.pending]: (state) => {
         state.loading = true
      },
      [addWishProducts.fulfilled]: (state) => {
         state.loading = false
         toast.success('Товар успешно добавлен')
      },
      [addWishProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default wishListSlice
