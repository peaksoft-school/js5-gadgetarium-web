import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getAllWishProducts } from '../../services/wishListService'
import { STEPPER_FORM_DATA_KEY } from '../../utils/constants/constants'
import { sessionStorageHelpers } from '../../utils/helpers/general'

const initialState = {
   products: null,
}

export const getAllProducts = createAsyncThunk(
   'wish/getAllWishProducts',
   async ({ userId }) => {
      try {
         const response = await getAllWishProducts(userId)
         console.log(response.data)
         return response.data
      } catch (error) {
         return console.error(error.response.data)
      }
   }
)

const productSlice = createSlice({
   name: 'wish',
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
      [getAllProducts.pending]: (state) => {
         state.loading = true
      },
      [getAllProducts.fulfilled]: (state, action) => {
         state.loading = false
         state.products = action.payload
         console.log(action)
      },
      [getAllProducts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default productSlice
