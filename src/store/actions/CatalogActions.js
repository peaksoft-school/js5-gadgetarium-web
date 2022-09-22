import { createAsyncThunk } from '@reduxjs/toolkit'

import { getCatalogProducts, getSingle } from '../../services/catalogService'

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
export const getSingleProduct = createAsyncThunk(
   'catalog/getSingleProduct',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getSingle(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)
