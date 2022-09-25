import axiosInstance from '../config/axiosInstance'

export const getFeedbacks = (productId) =>
   axiosInstance.get(`api/feedbacks/${productId}?page=1&size=6`)

export const postFeedback = (formData, id) =>
   axiosInstance.post(`api/feedbacks/${id}`, formData)

export const getFeedbackStars = (productId) =>
   axiosInstance.get(`api/feedbacks/stars/${productId}`)
