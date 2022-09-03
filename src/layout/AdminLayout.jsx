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
   margin: 45px auto 120px auto;
   max-width: 1520px;
   @media (max-width: 1536px) {
      max-width: 1280px;
   }
   @media (max-width: 1280px) {
      max-width: 1120px;
   }
`
