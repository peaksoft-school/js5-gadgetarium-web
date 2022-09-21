import axiosInstance from '../config/axiosInstance'

export const userContact = (formData) =>
   axiosInstance.post('api/contact', formData)
