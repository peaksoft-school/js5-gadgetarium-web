import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import NotFound from '../../components/UI/NotFound'
import OrderInfoPage from '../../containers/admin/orders/OrderInfoPage'
import OrdersPage from '../../containers/admin/orders/OrdersPage'
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
            <Route path="orders/*" element={<Outlet />}>
               <Route index element={<OrdersPage />} />
               <Route path=":orderId" element={<OrderInfoPage />} />
            </Route>
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </AdminLayout>
   )
}

export default AdminRoutes
