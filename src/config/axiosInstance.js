import axios from 'axios'

let store

export const injectStore = (_store) => {
   store = _store
}

// import { GADGETARIUM_USER_DATA } from '../utils/constants/constants'
// import { localStorageHelpers } from '../utils/helpers/general'

// const token = getJwt()

const BASE_URL =
   'http://gadgetarium-env.eba-edpzzr3j.eu-central-1.elasticbeanstalk.com/'

const headers = {
   Accept: 'application/json',
   'Content-Type': 'application/json;charset=UTF-8',
}

const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const {
      user: { jwt },
   } = store.getState().auth
   if (jwt) updatedConfig.headers.Authorization = `Bearer ${jwt}`
   console.log(jwt)
   return updatedConfig
})

export default axiosInstance
