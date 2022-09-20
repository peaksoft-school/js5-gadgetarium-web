import axiosInstance from '../config/axiosInstance'

// export const getCategories = () => axiosInstance.get('api/categories')
// export const getSubCategories = (id) =>
//    axiosInstance.get(`api/subCategories/${id}`)
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
