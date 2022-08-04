import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

const primalState = {
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
           ...primalState,
           user: localStorageHelpers.getFromLocalStorage(GADGETARIUM_USER_DATA),
        }
      : primalState,
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
      },
      [login.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload.message
      },
      [registration.pending]: (state) => {
         state.loading = true
      },
      [registration.fulfilled]: (state, action) => {
         state.loading = false
         const user = action.payload
         localStorageHelpers.saveToLocalStorage(GADGETARIUM_USER_DATA, user)
         state.user = user
      },
      [registration.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export const { logout } = authSlice.actions

export default authSlice
