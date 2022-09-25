import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { subscribe, createSendMailing } from '../../services/authServices'
import { fileUpload } from '../../services/fileUploadService'

export const subscribeForMailingList = createAsyncThunk(
   'mailing/subscribe',
   async ({ email }, { rejectWithValue }) => {
      try {
         const response = await subscribe({ email })
         toast.success('Вы успешно подписались')
         return response.data
      } catch (err) {
         toast.error(`${err.response.data.message}`)
         return rejectWithValue(err.response.data)
      }
   }
)

export const sendMailingList = createAsyncThunk(
   'mailing/sendMailingList',
   async ({ mailing, file, onClose }, { rejectWithValue }) => {
      const formData = new FormData()
      try {
         const resFile = {}
         if (file.name) {
            formData.append('file', file)
            resFile.link = await fileUpload(formData)
         }
         const finalData = {
            title: mailing.title,
            description: mailing.description,
            dateOfStart: mailing.dateOfStart,
            dateOfFinish: mailing.dateOfFinish,
            image: file.name ? resFile.link.data.link : file,
         }
         const response = await createSendMailing(finalData)
         toast.success('Успешно отправлено')
         onClose()
         return response.data
      } catch (err) {
         toast.error(`${err.response.data.message}`)
         return rejectWithValue(err.response.data)
      }
   }
)

const initialState = {
   mail: null,
   error: '',
   loading: false,
}

const mailingSlice = createSlice({
   name: 'mailing',
   initialState,
   reducers: {},
   extraReducers: {
      [subscribeForMailingList.fulfilled]: (state) => {
         state.loading = false
      },
      [sendMailingList.fulfilled]: (state) => {
         state.loading = false
      },
   },
})

export default mailingSlice
