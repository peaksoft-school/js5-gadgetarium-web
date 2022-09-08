import axiosFileInstance from '../config/axiosFileInstance'

// Authorization api services
export const fileUpload = (formData) =>
   axiosFileInstance.post('api/file/upload', formData)
export const fileRemove = (fileName) =>
   axiosFileInstance.post(`api/public/remove/${fileName}`)
