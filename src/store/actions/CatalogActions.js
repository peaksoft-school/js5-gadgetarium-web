// import { createAsyncThunk } from '@reduxjs/toolkit'

// import { getCategories, getSubCategories } from '../../services/catalogService'

// export const getAllCategories = createAsyncThunk(
//    'Catalog/getCategories',
//    async () => {
//       try {
//          const response = await getCategories()
//          return response.data
//       } catch (error) {
//          return console.log(error.response.data)
//       }
//    }
// )
// export const getSubCategory = createAsyncThunk(
//    'catalod/getsubCategories',
//    async (id) => {
//       try {
//          const subCategories = await getSubCategories(id)
//          return subCategories.data
//       } catch (error) {
//          return console.log(error.subCategories.data)
//       }
//    }
// )
