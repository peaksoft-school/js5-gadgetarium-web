import axiosInstance from '../config/axiosInstance'

export const getAllWishProducts = (userId) =>
   axiosInstance.get(`api/user/wishlist/${userId}`)
