import { Outlet } from 'react-router'
import styled from 'styled-components'

import HeaderForAdmin from './elements/HeaderForAdmin'

const AdminLayout = ({ children }) => {
   return (
      <>
         <HeaderForAdmin />
         <Main>
            <Container>
               {children}
               <Outlet />
            </Container>
         </Main>
      </>
   )
}

export default AdminLayout

const Main = styled.main`
   width: 100%;
`

const Container = styled.div`
   margin: 45px auto 0 auto;
   max-width: 1380px;

   @media screen and (min-width: 1537px) {
      max-width: 1620px;
   }

   @media screen and (max-width: 1240px) {
      max-width: 1150px;
   }
`
