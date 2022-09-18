import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   getHoverCompareProducts,
   getCompareProducts,
   removeAllCompareProducts,
   removeCompareProduct,
   addToComparison,
} from '../actions/comparisonActions'

const initialState = {
   smartPhone: [],
   laptop: [],
   tablet: [],
   smartWatch: [],
   compareHoverProducts: [],
   message: '',
   error: '',
   loading: false,
}

const compareProductSlice = createSlice({
   name: 'compareProduct',
   initialState,
   reducers: {},
   extraReducers: {
      [getCompareProducts.pending]: (state) => {
         state.loading = true
      },
      [getCompareProducts.fulfilled]: (state, action) => {
         state.loading = false
         const smartPhone = action.payload.filter(
            (el) => el.catalogName === 'Смартфоны'
         )
         const laptop = action.payload.filter(
            (el) => el.catalogName === 'Ноутбуки'
         )
         const tablet = action.payload.filter(
            (el) => el.catalogName === 'Планшеты'
         )
         const smartWatch = action.payload.filter(
            (el) => el.catalogName === 'Смарт-часы и браслеты'
         )
         state.smartPhone = Object.assign({}, ...smartPhone)
         state.laptop = Object.assign({}, ...laptop)
         state.tablet = Object.assign({}, ...tablet)
         state.smartWatch = smartWatch
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
         const {
            arg: { id },
         } = action.meta
         if (id) {
            state.smartPhone = state.smartPhone.filter((item) => item.id !== id)
            state.laptop = state.laptop.filter((item) => item.id !== id)
            state.smartWatch = state.smartWatch.filter((item) => item.id !== id)
            state.tablet = state.tablet.filter((item) => item.id !== id)
         }
         toast.success('Успешно удалено!')
      },
      [removeCompareProduct.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
         toast.error('Что-то пошло не так')
      },
      [addToComparison.pending]: (state) => {
         state.loading = true
      },
      [addToComparison.fulfilled]: (state, action) => {
         state.loading = false
         state.message = action.payload
      },
      [addToComparison.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default compareProductSlice
