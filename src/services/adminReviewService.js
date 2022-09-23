import axiosInstance from '../config/axiosInstance'

export const getAllReviews = () => axiosInstance.get('api/feedbacks')
// export const postIsRead = (id) => axiosInstance.post(`api/feedbacks/read/${id}`)
export const deleteReviews = (id) => axiosInstance.delete(`api/feedbacks/${id}`)
export const postAllReviews = (id, formData) =>
   axiosInstance.post(`api/feedbacks/admin/${id}`, JSON.stringify(formData))
