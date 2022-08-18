import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import OrdersPage from '../../containers/admin/OrdersPage'
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
            </Route>
            <Route path="orders" element={<OrdersPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
         </Routes>
      </AdminLayout>
   )
}

export default AdminRoutes
