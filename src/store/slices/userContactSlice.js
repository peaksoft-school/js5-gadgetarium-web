import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { postContacts } from '../actions/userContactAction'

const initialState = {
   error: '',
   loading: false,
}

const userContactSlice = createSlice({
   name: 'contact',
   initialState,
   reducers: {},
   extraReducers: {
      [postContacts.pending]: (state) => {
         state.loading = true
      },
      [postContacts.fulfilled]: (state, action) => {
         state.loading = false
         state.postContacts = action.payload
         toast.success('Успешно')
      },
      [postContacts.rejected]: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default userContactSlice
