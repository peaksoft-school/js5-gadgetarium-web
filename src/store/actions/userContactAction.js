import { createAsyncThunk } from '@reduxjs/toolkit'

import { userContact } from '../../services/userContactService'

export const postContacts = createAsyncThunk(
   'contacts/postContacts',
   async (contact, { rejectWithValue }) => {
      try {
         const response = await userContact(contact)
         return response.data
      } catch (err) {
         return rejectWithValue(err.response.data)
      }
   }
)
