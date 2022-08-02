import axios from 'axios'

const BASE_URL =
   'http://gadgetarium-env.eba-edpzzr3j.eu-central-1.elasticbeanstalk.com/'

const authApi = axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
})

const authInterceptor = (config) => {
   // eslint-disable-next-line no-param-reassign
   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
   return config
}

authApi.interceptors.request.use(authInterceptor)

export default authApi
