import { createSlice } from '@reduxjs/toolkit'

import { getCategories } from '../actions/CatalogActions'

const inital = {
   categories: null,
}
const catalogSlice = createSlice({
   name: 'catalogSlice',
   initialState: inital,
   reducers: {
      // getSubCategories(state, action) {
      //    state.subCategories = action.payload
      //    console.log(action.payload)
      // },
   },
   extraReducers: {
      [getCategories.fufilled]: (state, action) => {
         state.categories = action.payload
         console.log(action.payload)
      },
   },
})
export const catalogActions = catalogSlice.actions
export default catalogSlice
