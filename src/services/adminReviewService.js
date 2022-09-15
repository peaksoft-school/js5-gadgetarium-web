import axiosInstance from '../config/axiosInstance'

export const getAllReviews = () => {
   axiosInstance.get('api/feedbacks')
}
