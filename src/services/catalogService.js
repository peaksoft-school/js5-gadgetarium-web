import axiosInstance from '../config/axiosInstance'

export const getCatalogProducts = (queryParams) => {
   return axiosInstance.get('api/user/products', {
      params: {
         search: queryParams.search,
         page: queryParams.page,
         size: queryParams.size,
         subCategoryId: queryParams.subCategoryId,
         filter: JSON.stringify(queryParams.filter),
         sort: queryParams.sort,
      },
   })
}
export const getSingle = (id) => {
   return axiosInstance.get(`api/products/${id}`)
}
