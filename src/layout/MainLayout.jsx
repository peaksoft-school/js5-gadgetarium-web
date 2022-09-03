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
   margin: 45px auto;
   width: 1380px;

   @media screen and (min-width: 1537px) {
      max-width: 1620px;
   }

   @media screen and (max-width: 1240px) {
      max-width: 1150px;
   }
`
