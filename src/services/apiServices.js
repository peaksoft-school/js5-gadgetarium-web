import axiosInstance from '../config/axiosInstance'

// Authorization api services
export const signIn = (formData) =>
   axiosInstance.post('api/public/login', formData)
export const signUp = (formData) =>
   axiosInstance.post('api/public/register', formData)
// ------

// Catalogy and subcategories api services
export const getAllCategories = () => axiosInstance.get('api/categories')
export const getAllSubcategories = (id) =>
   axiosInstance.get(`api/subCategories/${id}`)
export const getAllBrands = () => axiosInstance.get('api/brands')
// ------

// Product CRUD api services
export const createProductFirstStage = (id, productData) =>
   axiosInstance.post(`api/products/${id}/firstStage`, productData)
export const updateProductFirstStage = (id, updatedProductData) =>
   axiosInstance.put(`api/products/${id}/firstStage`, updatedProductData)

export const createProductSecondStage = (id, productData) =>
   axiosInstance.post(`api/products/${id}/secondStage`, productData)
export const updateProductSecondStage = (id, updatedProductData) =>
   axiosInstance.put(`api/products/${id}/secondStage`, updatedProductData)

export const createProductThirdStage = (id, productData) =>
   axiosInstance.post(`api/products/${id}/thirdStage`, productData)
export const updateProductThirdStage = (id, updatedProductData) =>
   axiosInstance.put(`api/products/${id}/thirdStage`, updatedProductData)
// api/products?search=all&page=1&size=10&startOfDate=12022012&finishOfDate=12052012&status=ON_SALE'
export const getAllProducts = (
   search,
   size,
   startOfDate,
   finishOfDate,
   status
) =>
   axiosInstance.get(
      `api/products?search=${search}&page=${size}&startOfDate=${startOfDate}&finishOfDate=${finishOfDate}&status=${status}`
   )
export const getProduct = (id) => axiosInstance.get(`api/products/${id}`)

export const deleteProduct = (id) => axiosInstance.delete(`api/products/${id}`)
export const deleteManyProducts = (id) =>
   axiosInstance.delete(`api/products/${id}`)
// ------
