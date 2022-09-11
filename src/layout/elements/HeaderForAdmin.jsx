import React, { useState } from 'react'

import { Popover, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import profileLogo from '../../assets/icons/profile-icon.svg'
import search from '../../assets/icons/searchForAdmin.svg'
import Button from '../../components/UI/Button'
import { logout } from '../../store/slices/authSlice'

const HeaderForAdmin = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }
   const open = Boolean(anchorEl)
   const id = open ? 'simple-popover' : undefined
   const dispatch = useDispatch()
   // const navigate = useNavigate()
   const navigateAfterLogOut = () => {
      dispatch(logout())
      window.location.reload()
      // navigate('/')
   }
   return (
      <Header>
         <HeaderContainer>
            <UpperRow>
               <Logo src={logo} />
               <MenuNavBar>
                  <li>
                     <StyledNavLink
                        to="products"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        end
                     >
                        Товары
                     </StyledNavLink>
                  </li>
                  <li>
                     <StyledNavLink to="orders"> Заказы </StyledNavLink>
                  </li>
                  <li>
                     <StyledNavLink to="reviews">
                        Отзывы и рейтинг
                     </StyledNavLink>
                  </li>
               </MenuNavBar>
               <AdminUI>
                  <ButtonPush> Создать рассылку </ButtonPush>
                  <SearchLogo src={search} />
                  <VerticalLine />
                  <UserProfile>
                     <ProfileLogo src={profileLogo} onClick={handleClick} />
                     <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'left',
                        }}
                     >
                        <LinkItems>
                           <li onClick={navigateAfterLogOut}>Выйти</li>
                        </LinkItems>
                     </Popover>
                  </UserProfile>
                  <p>Администратор </p>
               </AdminUI>
            </UpperRow>
            <Outlet />
         </HeaderContainer>
      </Header>
   )
}

export default HeaderForAdmin

const Header = styled('div')`
   width: 100%;
   background: #1a1a25;
`
const HeaderContainer = styled('header')`
   max-width: 1520px;
   margin-left: auto;
   margin-right: auto;
   height: 83px;
   padding: 18px 0;
   background: #1a1a25;
   position: sticky;
   top: 0;
   z-index: 999;
   @media (max-width: 1536px) {
      max-width: 1280px;
   }
   @media (max-width: 1280px) {
      max-width: 1120px;
   }

   /* @media (max-width: 1240px) {
      max-width: 1200px;
      padding: 18px 30px;
   } */
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

const LinkItems = styled('ul')`
   padding: 20px;
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 16px;

   & li {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #292929;
      cursor: pointer;

      :hover {
         color: #cb11ab;
      }
   }
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
   @media (max-width: 1536px) {
      font-size: 14px;
      padding: 12px 10px;
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
   cursor: pointer;
`
