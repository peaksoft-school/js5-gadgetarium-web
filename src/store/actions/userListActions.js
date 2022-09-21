import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { fileUpload } from '../../services/fileUploadService'
import {
   getUserProfile,
   postUserProfile,
   putUserProfile,
} from '../../services/userListService'

export const getProfile = createAsyncThunk(
   'user/getProfile',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getUserProfile()
         // console.log(response.data)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const putProfile = createAsyncThunk(
   'user/putProfile',
   async ({ file, user }, { dispatch }) => {
      console.log(user, file)
      const formData = new FormData()
      try {
         const resFile = {}
         if (file.name) {
            formData.append('file', file)
            resFile.link = await fileUpload(formData)
         }
         console.log(resFile.link.data.link)
         const finalData = {
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            email: user.email,
            image: file.name ? resFile.link.data.link : file,
         }
         const response = await putUserProfile(finalData)
         toast.success('Ваши данные успешно изменены')
         dispatch(getProfile())
         return response.data
      } catch (err) {
         return console.log(err.response.data)
      }
   }
)

export const postProfile = createAsyncThunk(
   'user/postProfile',
   async ({ currentPassword, newPassword, showOther }, { rejectWithValue }) => {
      try {
         const response = await postUserProfile({
            currentPassword,
            newPassword,
         })
         showOther(true)
         return response.data
      } catch (err) {
         showOther(false)
         return rejectWithValue(err.response.data)
      }
   }
)
