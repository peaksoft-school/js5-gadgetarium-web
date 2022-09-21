import React from 'react'

import { Route, Routes } from 'react-router-dom'

import NotFound from '../components/UI/NotFound'

import AdminRoutes from './admin-routes/AdminRoutes'
import MainRoutes from './MainRoutes'
import ProtectedRoute from './private/ProtectedRoute'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/*" element={<MainRoutes />} />
         <Route
            path="/admin/*"
            element={<ProtectedRoute roles="ADMIN" element={<AdminRoutes />} />}
         />
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}

export default AppRoutes
