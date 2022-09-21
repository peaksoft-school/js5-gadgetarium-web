import axiosInstance from '../config/axiosInstance'

export const getorderHistoryOrders = (userId) =>
   axiosInstance.get(`api/user/${userId}/user_orders`)
export const getorderHistoryProducts = (orderId) =>
   axiosInstance.get(`api/user/${orderId}/user_products`)
