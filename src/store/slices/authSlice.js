import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { signIn, signUp } from '../../api/authService'
import { GADGETARIUM_USER_DATA } from '../../utils/constants/constants'
import { localStorageHelpers } from '../../utils/helpers/general'

export const login = createAsyncThunk(
   'auth/login',
   async ({ formValue }, { rejectWithValue }) => {
      try {
         const response = await signIn(formValue)
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
         console.log({ firstName, lastname, phoneNumber, password, email })
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

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: {
         jwt: '',
         role: '',
         email: '',
      },
      error: '',
      loading: false,
   },
   reducers: {},
   extraReducers: {
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

export default authSlice
