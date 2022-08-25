import React from 'react'

import styled from 'styled-components'

import Footer from './elements/Footer'
import Header from './elements/Header'

const MainLayout = ({ children }) => {
   return (
      <>
         <Header />
         <Main>
            <Container>{children}</Container>
         </Main>
         <Footer />
      </>
   )
}

export default MainLayout

const Main = styled.main`
   width: 100%;
`

const Container = styled.div`
   margin: 45px 195px 120px 195px;
   max-width: 1920px;
   margin-left: auto;
   margin-right: auto;
   /* height: 100vh; */
`
