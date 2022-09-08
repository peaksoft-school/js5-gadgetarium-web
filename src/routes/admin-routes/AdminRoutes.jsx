import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import OrdersPage from '../../containers/admin/OrdersPage'
import AddProductsPage from '../../containers/admin/products/AddProductsPage'
import ProductInnerPage from '../../containers/admin/products/ProductInnerPage'
import ProductsPage from '../../containers/admin/products/ProductsPage'
import ReviewsPage from '../../containers/admin/ReviewsPage'
import AdminLayout from '../../layout/AdminLayout'

const AdminRoutes = () => {
   return (
      <AdminLayout>
         <Routes>
            <Route path="" element={<Navigate to="products" />} />
            <Route path="products/*" element={<Outlet />}>
               <Route index element={<ProductsPage />} />
               <Route path="addproducts/*" element={<AddProductsPage />} />
               <Route path=":productId" element={<ProductInnerPage />} />
            </Route>
            <Route path="orders" element={<OrdersPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
         </Routes>
      </AdminLayout>
   )
}

export default AdminRoutes
