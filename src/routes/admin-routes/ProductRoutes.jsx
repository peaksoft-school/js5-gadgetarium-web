import { Routes, Route } from 'react-router-dom'

import AddProducts from '../../containers/admin/products/AddProducts'
import ProductInnerPage from '../../containers/admin/products/ProductInnerPage'
import ProductsPage from '../../containers/admin/products/ProductsPage'

const ProductRoutes = () => {
   return (
      <Routes>
         <Route to="" element={<ProductsPage />} />
         <Route to=":productId" element={<ProductInnerPage />} />
         <Route to="addprodcuts" element={<AddProducts />} />
      </Routes>
   )
}

export default ProductRoutes
