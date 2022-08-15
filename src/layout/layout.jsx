import React from 'react'

import { styled } from '@mui/material'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
   return (
      <PageWraper>
         <Header />
         {children}
         <Footer />
      </PageWraper>
   )
}

export default Layout

const PageWraper = styled('div')`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`
