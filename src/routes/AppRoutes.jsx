import React from 'react'

import { Route, Routes } from 'react-router-dom'

import NotFound from '../components/UI/NotFound'
import AdminPage from '../containers/admin/AdminPage'
import MainPage from '../containers/MainPage'
import PersonPage from '../containers/user/PersonPage'

// import AdminRoutes from './admin-routes/AdminRoutes'
import ProtectedRoute from './private/ProtectedRoute'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route
            path="/admin/*"
            element={<ProtectedRoute roles="ADMIN" element={<AdminPage />} />}
         />
         <Route
            path="/person/*"
            element={<ProtectedRoute roles="USER" element={<PersonPage />} />}
         />
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}

/**
 * все element'ы буду менять на Layout'ы
 * PersonPage > Личный кабинет
 */

export default AppRoutes
