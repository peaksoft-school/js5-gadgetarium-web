import React from 'react'

import { Route, Routes } from 'react-router-dom'

import AdminPage from '../containers/admin/AdminPage'
import PersonPage from '../containers/user/PersonPage'
import MainPage from '../containers/user/UserPage'

import ProtectedRoute from './ProtectedRoute'

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
      </Routes>
   )
}

/**
 * все element'ы буду менять на Layout'ы
 */

export default AppRoutes
