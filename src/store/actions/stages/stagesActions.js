import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
   createProductFirstStage,
   createProductSecondStage,
   createProductThirdStage,
   fileUpload,
   createDiscount,
   getAllProducts,
} from '../../../services/productServices'

export const createFirstStage = createAsyncThunk(
   'product/createFirstStage',
   async ({ subcategoryId, updatedProductData, files }) => {
      try {
         console.log({ updatedProductData })
         console.log({ files })
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
            console.log(response)
            fullField.images.push(response?.data.link)
         }
         console.log(fullField)
         const response = await createProductFirstStage(
            fullField,
            subcategoryId
         )
         console.log(response.data)
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
         console.log(response.data)
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
      try {
         const formData = new FormData()
         formData.append('file', pdfFile)

         const resfile = await fileUpload(formData)
         console.log(resfile)

         const response = await createProductThirdStage(productId, {
            description,
            videoReview,
            pdf: resfile.data.link,
         })
         console.log(response.data)
         return response.data
      } catch (error) {
         toast.error(`${error.response.data.message}`)
         return console.error(error.response.data.message)
      }
   }
)

export const createDiscountProducts = createAsyncThunk(
   'product/createDiscountProducts',
   async (formData, dispatch) => {
      try {
         const response = await createDiscount(formData)
         console.log(response.data)
         dispatch(getAllProducts())
         return response.data
      } catch (error) {
         return console.error(error.response.data.message)
      }
   }
)
