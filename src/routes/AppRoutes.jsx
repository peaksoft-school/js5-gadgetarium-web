import React from 'react'

import { Route, Routes } from 'react-router'

import ComparisonPage from '../containers/Client/ComparisonPage'
import MainPage from '../containers/MainPage/MainPage'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/comparison" element={<ComparisonPage />} />
         <Route />
      </Routes>
   )
}

export default AppRoutes
