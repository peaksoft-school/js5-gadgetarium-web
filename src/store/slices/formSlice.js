import { createSlice } from '@reduxjs/toolkit'

import { STEPPER_FORM_DATA_KEY } from '../../utils/constants/constants'
import { sessionStorageHelpers } from '../../utils/helpers/general'

const initialState = {
   activeStep: 0,
   products: {
      category: '',
      subcategory: '',
      guarantee: '',
      brand: '',
      productName: '',
      price: '',
      amount: '',
      video: '',
      file: '',
      description: '',
   },
}

const formSlice = createSlice({
   name: 'form',
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
   reducers: {
      formDetails: (state, action) => {
         const products = action.payload
         sessionStorageHelpers.saveToSessionStorage(
            STEPPER_FORM_DATA_KEY,
            products
         )
         state.products = action.payload
      },
      nextStage: (state, action) => {
         state.activeStep = action.payload
      },
   },
})

export const { formDetails, nextStage } = formSlice.actions

export default formSlice
