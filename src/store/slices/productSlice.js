import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { GADGETARIUM_ADD_PRODUCT_DATA } from '../../utils/constants/constants'
import { sessionStorageHelpers } from '../../utils/helpers/general'
import {
   getCategories,
   getBrands,
   getSubcategories,
} from '../actions/categories/categoriesActions'
import {
   createFirstStage,
   createSecondStage,
   createThirdStage,
   createDiscountProducts,
} from '../actions/stages/stagesActions'

const initialState = {
   products: [],
   categories: null,
   brands: null,
   search: '',
   subcategories: null,
   error: '',
   loading: false,
}

const productSlice = createSlice({
   name: 'product',
   initialState: sessionStorageHelpers.getFromSessionStorage(
      GADGETARIUM_ADD_PRODUCT_DATA
   )
      ? {
           ...initialState,
           products: sessionStorageHelpers.getFromSessionStorage(
              GADGETARIUM_ADD_PRODUCT_DATA
           ),
        }
      : initialState,
   reducers: {
      clearSessionStorage: (state) => {
         sessionStorageHelpers.deleteFromSessionStorage(
            GADGETARIUM_ADD_PRODUCT_DATA
         )
         state.products = []
      },
      setSearchQuery: (state, action) => {
         state.search = action.payload
      },
   },
   extraReducers: {
      [getCategories.pending]: (state) => {
         state.loading = true
      },
      [getCategories.fulfilled]: (state, action) => {
         state.loading = false
         state.categories = action.payload
      },
      [getCategories.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getSubcategories.pending]: (state) => {
         state.loading = true
      },
      [getSubcategories.fulfilled]: (state, action) => {
         state.loading = false
         state.subcategories = action.payload
      },
      [getSubcategories.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [getBrands.pending]: (state) => {
         state.loading = true
      },
      [getBrands.fulfilled]: (state, action) => {
         state.loading = false
         state.brands = action.payload
      },
      [getBrands.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [createFirstStage.pending]: (state) => {
         state.loading = true
      },
      [createFirstStage.fulfilled]: (state, action) => {
         state.loading = false
         const product = action.payload
         sessionStorageHelpers.saveToSessionStorage(
            GADGETARIUM_ADD_PRODUCT_DATA,
            product
         )
         state.products = product
         toast.success('Успешно!')
      },
      [createFirstStage.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [createSecondStage.pending]: (state) => {
         state.loading = true
      },
      [createSecondStage.fulfilled]: (state, action) => {
         state.loading = false
         state.products = action.payload
         toast.success('Успешно!')
      },
      [createSecondStage.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [createThirdStage.pending]: (state) => {
         state.loading = true
      },
      [createThirdStage.fulfilled]: (state, action) => {
         state.loading = false
         state.products = action.payload
         toast.success('Успешно!')
      },
      [createThirdStage.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [createDiscountProducts.pending]: (state) => {
         state.loading = true
      },
      [createDiscountProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.products = action.payload
         toast.success('Скидка на товар успешно установлена')
      },
      [createDiscountProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export const { clearSessionStorage, setSearchQuery } = productSlice.actions

export default productSlice
