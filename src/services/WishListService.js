import axiosInstance from '../config/axiosInstance'

export const getAllWishProducts = (userId) =>
   axiosInstance.get(`api/user/wishlist/${userId}`)

export const addToWishProducts = (userId, productId) =>
   axiosInstance.post(`api/user/wishlist/${userId}/add/${productId}`)

export const removeAllProducts = (userId) =>
   axiosInstance.delete(`api/user/wishlist/${userId}/removeAll`)

export const removeProduct = (userId, productId) =>
   axiosInstance.delete(`api/user/wishlist/${userId}/remove/${productId}`)

export const getAllHoverWishProducts = () =>
   axiosInstance.get('api/user/wishlist/hover')
