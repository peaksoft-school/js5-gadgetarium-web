import axiosInstance from '../config/axiosInstance'

export const signIn = (formData) =>
   axiosInstance.post('api/public/login', formData)
export const signUp = (formData) =>
   axiosInstance.post('api/public/register', formData)

// export const getCatalog = (url) => {
//    return axiosInstance.get('api/catalog/')
// }
