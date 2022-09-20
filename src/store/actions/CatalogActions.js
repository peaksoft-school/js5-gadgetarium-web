import { createAsyncThunk } from '@reduxjs/toolkit'

import { getCatalogProducts } from '../../services/catalogService'

export const getProductsCatalog = createAsyncThunk(
   'catalog/getProducts',
   async (queryParams, { rejectWithValue }) => {
      try {
         const response = await getCatalogProducts(queryParams)
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)
