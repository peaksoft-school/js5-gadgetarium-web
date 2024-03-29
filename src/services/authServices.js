import axiosInstance from '../config/axiosInstance'

// Authorization api services
export const signIn = (formData) =>
   axiosInstance.post('api/public/login', formData)
export const signUp = (formData) =>
   axiosInstance.post('api/public/register', formData)

export const subscribe = (formData) =>
   axiosInstance.post('api/mailings/subscribe', formData)
export const createSendMailing = (formData) =>
   axiosInstance.post('api/mailings/send', formData)
