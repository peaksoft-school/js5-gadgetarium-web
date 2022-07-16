import React from 'react'

import { styled } from '@mui/material'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = () => {
   return (
      <PageWraper>
         <Header />
         <Main />
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
