import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { signIn, signUp, subscribe } from '../../services/authServices'
import { GADGETARIUM_USER_DATA } from '../../utils/constants/constants'
import { localStorageHelpers } from '../../utils/helpers/general'

export const login = createAsyncThunk(
   'auth/login',
   async ({ email, password, onClose }, { rejectWithValue }) => {
      try {
         const response = await signIn({ email, password })
         onClose()
         return response.data
      } catch (err) {
         toast.error(`${err.response.data.message}`)
         return rejectWithValue(err.response.data)
      }
   }
)

export const registration = createAsyncThunk(
   'auth/register',
   async (
      { firstName, lastName, phoneNumber, password, email, onClose, reset },
      { rejectWithValue }
   ) => {
      try {
         const response = await signUp({
            firstName,
            lastName,
            phoneNumber,
            password,
            email,
         })
         onClose()
         reset()
         return response.data
      } catch (err) {
         toast.error(`${err.response.data.message}`)
         return rejectWithValue(err.response.data)
      }
   }
)

export const subscribeForMailingList = createAsyncThunk(
   'auth/subscribe',
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

const initialState = {
   user: {
      jwt: null,
      role: null,
      email: null,
      id: null,
   },
   error: '',
   loading: false,
}

const authSlice = createSlice({
   name: 'auth',
   initialState: localStorageHelpers.getFromLocalStorage(GADGETARIUM_USER_DATA)
      ? {
           ...initialState,
           user: localStorageHelpers.getFromLocalStorage(GADGETARIUM_USER_DATA),
        }
      : initialState,
   reducers: {
      logout: (state) => {
         localStorageHelpers.deleteFromLocalStorage(GADGETARIUM_USER_DATA)
         state.user = null
      },
   },
   extraReducers: {
      [login.pending]: (state) => {
         state.loading = true
      },
      [login.fulfilled]: (state, action) => {
         state.loading = false
         const user = action.payload
         localStorageHelpers.saveToLocalStorage(GADGETARIUM_USER_DATA, user)
         state.user = user
         toast.success('Успешно!')
      },
      [login.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
         toast.error('Ошибка с авторизацией')
      },
      [registration.pending]: (state) => {
         state.loading = true
      },
      [registration.fulfilled]: (state, action) => {
         state.loading = false
         const user = action.payload
         localStorageHelpers.saveToLocalStorage(GADGETARIUM_USER_DATA, user)
         state.user = user
         toast.success('Вы успешно зарегистрирвались!')
      },
      [registration.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [subscribeForMailingList.fulfilled]: (state) => {
         state.loading = false
      },
   },
})

export const { logout } = authSlice.actions

export default authSlice
