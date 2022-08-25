import axiosInstance from '../config/axiosInstance'
// import axios from '../config/axiosInstance'

export const getAllWishProducts = (userId) =>
   axiosInstance.get(`api/public/register`)
