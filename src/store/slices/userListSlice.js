import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { getProfile, putProfile, postProfile } from '../actions/userListActions'

const initialState = {
   userInfo: {
      firstName: null,
      lastName: null,
      address: null,
      phoneNumber: null,
      email: null,
      image: null,
   },
   error: '',
   loading: false,
}

const userListSlice = createSlice({
   name: 'getProfile',
   initialState,
   reducers: {},
   extraReducers: {
      [getProfile.pending]: (state) => {
         state.loading = true
      },
      [getProfile.fulfilled]: (state, action) => {
         state.loading = false
         state.userInfo = action.payload
      },
      [getProfile.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },

      [putProfile.pending]: (state) => {
         state.loading = true
      },
      [putProfile.fulfilled]: (state, action) => {
         state.loading = false
         state.userInfo = action.payload
      },
      [putProfile.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      [postProfile.fulfilled]: (state) => {
         state.loading = false
         toast.success('Ваш пароль успешно изменен')
      },
      [postProfile.rejected]: (state) => {
         state.loading = false
         toast.error('Неверный пароль')
      },
   },
})
export default userListSlice
