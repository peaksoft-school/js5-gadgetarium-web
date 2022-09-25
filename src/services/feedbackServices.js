import axiosInstance from '../config/axiosInstance'

export const getFeedbacks = (productId) =>
   axiosInstance.get(`api/feedbacks/${productId}`)

export const postFeedback = (formData, productId = 2) =>
   axiosInstance.post(`api/feedbacks/${productId}`, formData)

export const getFeedbackStars = (productId = 2) =>
   axiosInstance.get(`api/feedbacks/stars/${productId}`)
