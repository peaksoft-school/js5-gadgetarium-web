import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { signIn, signUp } from '../../services/authService'
import { GADGETARIUM_USER_DATA } from '../../utils/constants/constants'
import { localStorageHelpers } from '../../utils/helpers/general'

export const login = createAsyncThunk(
   'auth/login',
   async ({ email, password }, { rejectWithValue }) => {
      try {
         const response = await signIn({ email, password })
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

export const registration = createAsyncThunk(
   'auth/register',
   async (
      { firstName, lastname, phoneNumber, password, email },
      { rejectWithValue }
   ) => {
      try {
         const response = await signUp({
            firstName,
            lastname,
            phoneNumber,
            password,
            email,
         })
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)

const initialState = {
   user: {
      jwt: null,
      role: null,
      email: null,
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
         state.error = action.payload.message
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
         toast.success('Успешно!')
      },
      [registration.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
         toast.error('Ошибка с авторизацией')
      },
   },
})

export const { logout } = authSlice.actions

export default authSlice
