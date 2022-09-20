import { createSlice } from '@reduxjs/toolkit'

import { getProductsCatalog } from '../actions/CatalogActions'

const initial = {
   products: null,
}
const catalogSlice = createSlice({
   name: 'catalogSlice',
   initialState: initial,
   extraReducers: {
      [getProductsCatalog.fulfilled]: (state, action) => {
         state.products = action.payload
         console.log(action.payload)
      },
   },
})
export const catalogActions = catalogSlice.actions
export default catalogSlice
