import React from 'react'

// import Tab from '@mui/material/Tab'

import styled from 'styled-components'

import Breadcrumbs from '../../components/UI/Bredcrumbs'
import Tab from '../../components/UI/Tab'

import PersonOrderHistory from './pages/PersonOrderHistory'
import PersonProfile from './pages/PersonProfile'
import PersonWishList from './pages/PersonWishList'

const pathsArray = [
   {
      path: '/',
      name: 'Личный кабинет ',
   },
   {
      path: '/favourites',
      name: ' Учетная запись ',
   },
]

const tabsArray = [
   {
      id: '1',
      label: 'История заказов',
      value: '1',
      Component: <PersonOrderHistory />,
   },
   {
      id: '2',
      label: 'Избранное',
      value: '2',
      Component: <PersonWishList />,
   },
   {
      id: '3',
      label: 'Профиль',
      value: '3',
      Component: <PersonProfile />,
   },
]
const PersonPage = () => {
   return (
      <ContainerComponent>
         <Breadcrumbs paths={pathsArray} />
         <StyledH3>Профиль</StyledH3>
         <Horizontal />
         <LargeContainer>
            <TabStyledComponent>
               <Tab tabsArray={tabsArray} variant="variant" />
            </TabStyledComponent>

            <StyledUser>
               <UserH5>Азамат Азаматов</UserH5>
               <UserData>
                  <p>aza@gmail.com</p>
                  <p>+996 (400) 88-88-88</p>
               </UserData>
               <Main>Выйти</Main>
            </StyledUser>
         </LargeContainer>
      </ContainerComponent>
   )
}

export default PersonPage

const ContainerComponent = styled.div`
   width: 100%;
`
const LargeContainer = styled.div`
   /* Auto layout */

   display: flex;
   flex-direction: row;
   align-items: flex-start;
   padding: 0px;
   gap: 12px;
   width: 100%;
   border: 1px solid red;
`

const TabStyledComponent = styled.div`
   .css-1s62zzw-MuiButtonBase-root-MuiTab-root.Mui-selected {
      background: #384255;
      color: #ffffff;
   }
`
const StyledH3 = styled.h3`
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
   display: flex;
   align-items: flex-end;
   color: #292929;
   margin: 30px 0px 30px 0px;
`
const Horizontal = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border: 1px solid #cdcdcd;
   transform: rotate(180deg);
   margin-bottom: 30px;
`

const StyledUser = styled.div`
   width: 100%;
   margin: 0px 0px 0px 550px;
   justify-self: flex-end;
`
const Main = styled.p`
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   line-height: 19px;
   color: #2c68f5;
   cursor: pointer;
`
const UserH5 = styled.h5`
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 22px;
   color: #292929;
`
const UserData = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #292929;
`
