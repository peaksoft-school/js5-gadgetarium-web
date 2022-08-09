import { Route, Routes, Navigate } from 'react-router-dom'

import OrdersPage from '../../containers/admin/OrdersPage'
import ReviewsPage from '../../containers/admin/ReviewsPage'

import ProductRoutes from './ProductRoutes'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route to="" element={<Navigate to="/products" replace />} />
         <Route to="/products/*" element={<ProductRoutes />} />
         <Route to="/orders/*" element={<OrdersPage />} />
         <Route to="/reviews/*" element={<ReviewsPage />} />
      </Routes>
   )
}

export default AdminRoutes
