import React from 'react'

import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import profileLogo from '../../assets/icons/profile-icon.svg'
import search from '../../assets/icons/searchForAdmin.svg'
import Button from '../../components/UI/Button'

const HeaderForAdmin = () => {
   return (
      <div>
         <Header>
            <UpperRow>
               <Logo src={logo} />
               <MenuNavBar>
                  <li>
                     <StyledNavLink
                        to="/products"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        end
                     >
                        Товары
                     </StyledNavLink>
                  </li>
                  <li>
                     <StyledNavLink to="/orders"> Заказы </StyledNavLink>
                  </li>
                  <li>
                     <StyledNavLink to="/reviews-rating">
                        Отзывы и рейтинг
                     </StyledNavLink>
                  </li>
               </MenuNavBar>
               <AdminUI>
                  <ButtonPush> Создать рассылку </ButtonPush>
                  <SearchLogo src={search} />
                  <VerticalLine />
                  <UserProfile>
                     <NavLink to="/login">
                        <ProfileLogo src={profileLogo} />
                     </NavLink>
                  </UserProfile>
                  <p> Адина Урматова </p>
               </AdminUI>
            </UpperRow>
         </Header>
      </div>
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
// const Menu = styled('div')`
//    display: flex;
//    justify-content: space-around;
//    align-items: center;
//    padding: 0;
//    width: 365px;
//    a {
//       font-size: 16px;
//       font-weight: 500;
//       text-decoration: none;
//       color: #ffffff;
//    }
// `

const StyledNavLink = styled(NavLink)`
   width: 100%;
   display: flex;
   align-items: center;
   color: #fff;
   font-size: 16px;
   text-decoration: none;
   padding: 14px 12px;
   &:hover {
      transition: 0.3s;
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
   }
`
const MenuNavBar = styled('ul')`
   list-style: none;
   display: flex;
   align-items: center;
   flex-direction: row;
   white-space: nowrap;
   gap: 8px;
   & li {
      width: 100%;
      color: #fff;
      font-size: 16px;
      border-radius: 4px;
   }

   .active {
      transition: 0.3s;
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
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
