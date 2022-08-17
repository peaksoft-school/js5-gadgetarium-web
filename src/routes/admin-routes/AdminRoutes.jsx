import { Route, Routes, Navigate } from 'react-router-dom'

import OrdersPage from '../../containers/admin/OrdersPage'
import AddProducts from '../../containers/admin/products/AddProducts'
import ProductInnerPage from '../../containers/admin/products/ProductInnerPage'
import Products from '../../containers/admin/products/Products'
import ProductsPage from '../../containers/admin/products/ProductsPage'
import ReviewsPage from '../../containers/admin/ReviewsPage'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="products" />} />
         <Route path="products/*" element={<ProductsPage />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<ProductInnerPage />} />
            <Route path="addproducts/*" element={<AddProducts />} />
         </Route>
         <Route path="orders" element={<OrdersPage />} />
         <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
   )
}

export default AdminRoutes
