import axiosInstance from '../config/axiosInstance'

export const getAllCompareProducts = () => axiosInstance.get(`api/comparison`)

export const getAllHoverCompareProducts = () =>
   axiosInstance.get('api/comparison/hover')

export const deleteCompareProductById = (id) => {
   axiosInstance.delete(`api/comparison/${id}`)
}

export const deleteAllCompareProducts = () => {
   axiosInstance.delete('api/comparison/all')
}

export const postToComparison = (id) => {
   axiosInstance.post(`api/comparison/${id}`)
}
