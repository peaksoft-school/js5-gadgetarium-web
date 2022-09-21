import axiosInstance from '../config/axiosInstance'

export const getNewProducts = (size = 5) =>
   axiosInstance.get(`api/user/mainPage?sort=NEW&page=1&size=${size}`)

export const getDiscountProducts = (size = 5) =>
   axiosInstance.get(`api/user/mainPage?sort=DISCOUNT&page=1&size=${size}`)

export const getRecommendProducts = (size = 5) =>
   axiosInstance.get(`api/user/mainPage?sort=RECOMMEND&page=1&size=${size}`)
