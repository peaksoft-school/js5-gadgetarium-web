import axiosInstance from '../config/axiosInstance'

export const getUserProfile = () => axiosInstance.get('api/user/profile')
export const postUserProfile = (formData) =>
   axiosInstance.post('api/user/profile', formData)

export const putUserProfile = (formData) =>
   axiosInstance.put('api/user/profile', formData)
