import { createSlice } from '@reduxjs/toolkit'

import { getProductsCatalog, getSingleProduct } from '../actions/CatalogActions'

const initial = {
   products: null,
   single: null,
}
const catalogSlice = createSlice({
   name: 'catalogSlice',
   initialState: initial,
   extraReducers: {
      [getProductsCatalog.fulfilled]: (state, action) => {
         state.products = action.payload
         console.log(action.payload)
      },
      [getSingleProduct.fulfilled]: (state, action) => {
         state.single = action.payload
      },
   },
})
export const catalogActions = catalogSlice.actions
export default catalogSlice
