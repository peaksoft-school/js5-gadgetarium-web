import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   createProductFirstStage,
   createProductSecondStage,
   createProductThirdStage,
   fileUpload,
   createDiscount,
} from '../../../services/productServices'
import { getProducts } from '../products/productsActions'

export const createFirstStage = createAsyncThunk(
   'product/createFirstStage',
   async ({ subcategoryId, updatedProductData, files }) => {
      try {
         const fullField = {
            ...updatedProductData,
            images: [],
         }
         // eslint-disable-next-line no-plusplus
         for (let index = 0; index < files.length; index++) {
            const image = files[index]
            const formData = new FormData()
            formData.append('file', image.file)
            // eslint-disable-next-line no-await-in-loop
            const response = await fileUpload(formData)
            fullField.images.push(response?.data.link)
         }
         const response = await createProductFirstStage(
            fullField,
            subcategoryId
         )
         return response.data
      } catch (error) {
         toast.error(`${error.response.data.message}`)
         return console.error(error.response.data.message)
      }
   }
)

export const createSecondStage = createAsyncThunk(
   'product/createSecondStage',
   async ({ productId, quantity, price }) => {
      try {
         const response = await createProductSecondStage(productId, {
            quantity,
            price,
         })
         return response.data
      } catch (error) {
         toast.error(`${error.response.data.message}`)
         return console.error(error.response.data.message)
      }
   }
)

export const createThirdStage = createAsyncThunk(
   'product/createThirdStage',
   async ({ productId, description, videoReview, pdfFile }) => {
      const formData = new FormData()
      try {
         formData.append('file', pdfFile)
         const resfile = await fileUpload(formData)

         const response = await createProductThirdStage(productId, {
            description,
            videoReview,
            pdf: resfile.data.link,
         })
         return response.data
      } catch (error) {
         toast.error(`${error.response.data.message}`)
         return console.error(error.response.data.message)
      }
   }
)

const queryParams = {
   search: 'all',
   page: 1,
   size: 7,
   sort: null,
   startOfDate: null,
   finishOfDate: null,
   status: null,
}

export const createDiscountProducts = createAsyncThunk(
   'product/createDiscountProducts',
   async ({ formData, dispatch }) => {
      try {
         const response = await createDiscount(formData)
         toast.success('Cкидка успешно установлена!')
         dispatch(getProducts(queryParams))
         return response.data
      } catch (error) {
         return console.error(error.response.data.message)
      }
   }
)
