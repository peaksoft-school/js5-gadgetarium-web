import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getHoverCompareProducts,
   getCompareProducts,
   removeAllCompareProducts,
   removeCompareProduct,
   addToComparison,
} from '../actions/comparisonActions'

const checkLocalStorage = () => {
   return Object.assign(
      {},
      ...Object.entries(localStorage).map(([id, value]) => ({
         [id]: JSON.parse(value),
      }))
   )
}

const initialState = {
   compareProducts: [],
   compareHoverProducts: [],
   compare: checkLocalStorage(),
   message: '',
   error: '',
   loading: false,
}

const compareProductSlice = createSlice({
   name: 'compareProduct',
   initialState,
   reducers: {
      addToCompare: (state, action) => {
         const jsonProduct = JSON.stringify(action.payload)
         localStorage.setItem(action.payload.id, jsonProduct)
         state.compare = {
            ...state.compare,
            [action.payload.id]: action.payload,
         }
      },
      removeFromCompare: (state, action) => {
         localStorage.removeItem(action.payload)
         state.compare = Object.keys(state.compare)
            .filter((item) => item !== action.payload(toString()))
            .reduce((obj, item) => ({ ...obj, [item]: state.compare[item] }))
      },
   },
   extraReducers: {
      [getCompareProducts.pending]: (state) => {
         state.loading = true
      },
      [getCompareProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.compareProducts = action.payload
      },
      [getCompareProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getHoverCompareProducts.pending]: (state) => {
         state.loading = true
      },
      [getHoverCompareProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.compareHoverProducts = action.payload
      },
      [getHoverCompareProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [removeAllCompareProducts.pending]: (state) => {
         state.loading = true
      },
      [removeAllCompareProducts.fulfilled]: (state) => {
         state.loading = false
         state.compareProducts = null
      },
      [removeAllCompareProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [removeCompareProduct.pending]: (state) => {
         state.loading = true
      },
      [removeCompareProduct.fulfilled]: (state, action) => {
         state.loading = false
         state.compareProducts = action.payload
      },
      [removeCompareProduct.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [addToComparison.pending]: (state) => {
         state.loading = true
      },
      [addToComparison.fulfilled]: (state, action) => {
         state.loading = false
         state.message = action.payload
         toast.success('Товар успешно добавлен для сравнения')
      },
      [addToComparison.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export const { addToCompare, removeFromCompare } = compareProductSlice.reducer

export default compareProductSlice
