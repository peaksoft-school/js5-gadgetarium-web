import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

export const getCategories = createAsyncThunk(
   'Catalog/getCategories',
   async () => {
      const response = await appFetch({ url: 'api/categories' })
      return response
   }
)
