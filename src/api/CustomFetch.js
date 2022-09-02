import { BASE_URL } from '../config/axiosInstance'
import { store } from '../store'

// let store
// export const injectStore = (_store) => {
//     store = _store
// }

export const appFetch = async (data) => {
   const { auth } = store.getState()
   try {
      const requestOptions = {
         method: data.method || 'GET',
         headers: auth.user.jwt
            ? {
                 Authorization: `Bearer ${auth.user.jwt}`,
                 'Content-Type': 'application/json',
              }
            : {
                 'Content-Type': 'application/json',
              },
      }
      if (data.method !== 'GET' && data.body) {
         requestOptions.body = JSON.stringify(data.body)
      }
      const response = await fetch(BASE_URL + data.url, requestOptions)
      if (!response.ok) {
         throw response.message
      }
      // console.log(response)

      return response.json()
   } catch (error) {
      return error
   }
}
export const appFetchFile = async (photo) => {
   const { auth } = store.getState()
   try {
      const requestOptions = {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${auth.user.jwt}`,
         },
         body: photo.body,
      }
      const response = await fetch(BASE_URL + photo.url, requestOptions)
      if (!response.ok) {
         throw new Error(response.message)
      }
      return response.json()
   } catch (error) {
      return new Error(error.message)
   }
}
