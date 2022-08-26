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
   margin: 50px 100px;
   max-width: 1920px;
   margin-left: auto;
   margin-right: auto;
`
