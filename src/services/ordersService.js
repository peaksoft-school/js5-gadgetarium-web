import axiosInstance from '../config/axiosInstance'

export const getAllOrders = (queryParams) =>
   axiosInstance.get(`api/orders`, {
      params: {
         search: queryParams.search,
         page: queryParams.page,
         size: queryParams.size,
         dateOfStart: queryParams.dateOfStart,
         dateOfFinish: queryParams.dateOfFinish,
         status: queryParams.status,
      },
   })

export const getOrderInfo = () => axiosInstance.get(`api/orders/info`)

export const deleteOrders = (orderId) =>
   axiosInstance.delete(`api/orders/${orderId}`)

export const updateOrdersStatus = (orderId) =>
   axiosInstance.put(`api/orders/${orderId}`)
