import React from 'react'

import { styled } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'

import logo from '../assets/icons/logo.svg'
import profileLogo from '../assets/icons/profile-icon.svg'
import search from '../assets/icons/searchForAdmin.svg'
import Button from '../components/UI/Button'

const HeaderForAdmin = () => {
   return (
      <Header>
         <UpperRow>
            <Logo src={logo} />
            <Menu>
               <BackgroundButton>
                  <StyledNavLink to="products" style={{}} end>
                     Товары
                  </StyledNavLink>
               </BackgroundButton>
               <BackgroundButton>
                  <StyledNavLink to="orders">Заказы</StyledNavLink>
               </BackgroundButton>
               <BackgroundButton>
                  <StyledNavLink to="reviews" style={{}}>
                     Отзывы и рейтинг
                  </StyledNavLink>
               </BackgroundButton>
            </Menu>
            <AdminUI>
               <ButtonPush> Создать рассылку </ButtonPush>
               <SearchLogo src={search} />
               <VerticalLine />
               <UserProfile>
                  <NavLink to="/">
                     <ProfileLogo src={profileLogo} />
                  </NavLink>
               </UserProfile>
               <p> Адина Урматова </p>
            </AdminUI>
         </UpperRow>
         <Outlet />
      </Header>
   )
}

export default HeaderForAdmin

const Header = styled('div')`
   width: 1920px;
   height: 83px;
   padding: 18px 194px;
   background: #1a1a25;
   position: fixed;
   top: 0;
   z-index: 999;
`
const UpperRow = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const Logo = styled('img')`
   width: 221px;
   height: 39px;
`
const Menu = styled('div')`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 0;
   width: 365px;
   a {
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
      color: #ffffff;
   }
`
const AdminUI = styled('div')`
   width: 470px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: white;
`
const ButtonPush = styled(Button)`
   width: 190px;
   height: 43px;
   border-radius: 46px;
   font-size: 16px;
   background: #e20fbe;
`

const StyledNavLink = styled(NavLink)`
   transition: 0.3s;
   border-radius: ${(props) => {
      return props.style ? (isActive) => (isActive ? '4px' : 'none') : 'none'
   }};
   background: ${(props) => {
      return props.style
         ? (isActive) => (isActive ? 'rgba(133, 143, 164, 0.15)' : 'none')
         : 'none'
   }};
   text-decoration: ${(props) => {
      return props.style
         ? (isActive) => (isActive ? 'underline' : 'none')
         : 'none'
   }};
`

const BackgroundButton = styled('div')`
   padding: 13px 15px;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: center;
   :hover {
      transition: 0.3s;
      background: rgba(133, 143, 164, 0.15);
   }
`
const UserProfile = styled('div')`
   width: 44px;
   height: 44px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: #ffffff;
`
const SearchLogo = styled('img')`
   width: 24px;
   height: 24px;
`
const VerticalLine = styled('div')`
   height: 32px;
   border: 1px solid #d2d4d8;
`
const ProfileLogo = styled('img')`
   width: 24px;
   height: 24px;
`
