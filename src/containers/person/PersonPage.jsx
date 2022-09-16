import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Breadcrumbs from '../../components/UI/Bredcrumbs'
import Tab from '../../components/UI/Tab'
import { getProfile } from '../../store/actions/userListActions'

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
   const { firstName, lastName, phoneNumber, email } = useSelector(
      (state) => state.userProfile.userInfo
   )
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getProfile())
   }, [])
   const navigate = useNavigate()
   const navigateGoout = () => {
      navigate('/')
   }
   return (
      <ContainerComponent>
         <>
            <Breadcrumbs paths={pathsArray} />
            <StyledH3>История заказов</StyledH3>
         </>
         <Horizontal />
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
               <TabStyledComponent>
                  <Tab tabsArray={tabsArray} variant="variant" />
               </TabStyledComponent>
            </div>
            <div>
               <StyledUser>
                  <UserH5>
                     {firstName} {lastName}
                  </UserH5>
                  <UserData>
                     <UserStyledTitle>{email}</UserStyledTitle>
                     <UserStyledTitle>{phoneNumber}</UserStyledTitle>
                  </UserData>
                  <LogoutButton onClick={navigateGoout}>Выйти</LogoutButton>
               </StyledUser>
            </div>
         </div>
      </ContainerComponent>
   )
}

export default PersonPage

const ContainerComponent = styled.div`
   width: 1530px;
`
// const LargeContainer = styled.div``
// const LargeContainerDiv = styled.div``
const TabStyledComponent = styled.div`
   .css-13xfq8m-MuiTabPanel-root {
      padding: 0px;
   }

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
   justify-self: flex-end;
`
const UserStyledTitle = styled('span')`
   display: flex;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #384255;
   cursor: pointer;
`
const LogoutButton = styled.p`
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
