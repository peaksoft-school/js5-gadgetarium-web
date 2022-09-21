import axiosInstance from '../config/axiosInstance'

export const getAllCartProducts = () => axiosInstance.get(`api/carts`)
export const postToCart = (productId) =>
   axiosInstance.post(`api/carts/${productId}`)
export const getAllHoverCartProducts = () =>
   axiosInstance.get(`api/carts/hover`)
export const deleteCartItemById = (productId) =>
   axiosInstance.delete(`api/carts/${productId}`)
export const getTotalSum = (productId) =>
   axiosInstance.get(`api/carts/total/sum/${productId}`)
