import axiosInstance from '../config/axiosInstance'

// Catalogy and subcategories api services
export const getAllCategories = () => axiosInstance.get('api/categories')
export const getAllSubcategories = (id) =>
   axiosInstance.get(`api/subCategories/${id}`)
export const getAllBrands = () => axiosInstance.get('api/brands')
// ------

// Product CRUD api services
export const createProductFirstStage = (productData, id) =>
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
export const getAllProducts = (queryParams) =>
   axiosInstance.get(`api/products`, {
      params: {
         search: queryParams.search,
         page: queryParams.page,
         size: queryParams.size,
         sort: queryParams.sort,
         finishOfDate: queryParams.finishOfDate,
         startOfDate: queryParams.startOfDate,
         status: queryParams.status,
      },
   })

export const getProduct = (id) => axiosInstance.get(`api/products/${id}`)

export const deleteProduct = (id) =>
   axiosInstance.delete(`api/products/${id}/delete`)
export const deleteManyProducts = (id) =>
   axiosInstance.delete(`api/products/delete/${id}`)
// ------

export const fileUpload = (formData) =>
   axiosInstance.post('api/file/upload', formData)
export const fileRemove = (filename) =>
   axiosInstance.delete(`api/file/remove/${filename}`)

export const getNewProducts = () =>
   axiosInstance.get('api/user/mainPage?sort=RECOMMEND&page=1&size=5')

export const createDiscount = (formData) =>
   axiosInstance.post('api/discount', formData)
