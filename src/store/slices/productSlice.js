import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
   getAllCategories,
   getAllSubcategories,
   getAllBrands,
   createProductFirstStage,
} from '../../services/productServices'
import { STEPPER_FORM_DATA_KEY } from '../../utils/constants/constants'
import { sessionStorageHelpers } from '../../utils/helpers/general'

const initialState = {
   products: null,
   categories: null,
   brands: null,
   subcategories: null,
   error: '',
   loading: false,
}

export const createFirstStage = createAsyncThunk(
   'product/createFirstStage',
   async ({ subcategoryId, updatedProductData }) => {
      try {
         console.log({ updatedProductData })
         const response = await createProductFirstStage(
            updatedProductData,
            subcategoryId
         )
         console.log(response.data)
         return response.data
      } catch (error) {
         return console.error(error.response.data)
      }
   }
)

export const getCategories = createAsyncThunk(
   'product/getCategories',
   async () => {
      try {
         const { data } = await getAllCategories()
         return data
      } catch (err) {
         return console.error(err.response.data)
      }
   }
)

export const getSubcategories = createAsyncThunk(
   'product/getSubcategories',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getAllSubcategories(id)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const getBrands = createAsyncThunk('product/brands', async () => {
   try {
      const { data } = await getAllBrands()
      return data
   } catch (err) {
      return console.error(err.response.data)
   }
})

const productSlice = createSlice({
   name: 'product',
   initialState: sessionStorageHelpers.getFromSessionStorage(
      STEPPER_FORM_DATA_KEY
   )
      ? {
           ...initialState,
           products: sessionStorageHelpers.getFromSessionStorage(
              STEPPER_FORM_DATA_KEY
           ),
        }
      : initialState,
   reducers: {},
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
         state.products = action.payload
         console.log(action)
      },
      [createFirstStage.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default productSlice
