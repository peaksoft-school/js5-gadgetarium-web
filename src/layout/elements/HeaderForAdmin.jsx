import React, { useState } from 'react'

import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link, NavLink, Outlet } from 'react-router-dom'

import { ReactComponent as VectorIcon } from '../../assets/icons/adminDropDown.svg'
import logo from '../../assets/icons/logo.svg'
// import profileLogo from '../../assets/icons/profile-icon.svg'
import BasicModal from '../../components/UI/BasicModal'
import Button from '../../components/UI/Button'
import { logout } from '../../store/slices/authSlice'

const HeaderForAdmin = () => {
   const [openModal, setOpenModal] = useState(false)
   const handleClick = () => {
      setOpenModal(true)
   }

   const handleClose = () => {
      setOpenModal(false)
   }
   const dispatch = useDispatch()
   // const navigate = useNavigate()

   const navigateAfterLogOut = () => {
      dispatch(logout())
      window.location.reload()
   }
   return (
      <Header>
         <HeaderContainer>
            <UpperRow>
               <Link to="/admin/products">
                  <Logo src={logo} />
               </Link>
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
                  <VerticalLine />
                  <AdminProfile>
                     <ProfileLogo>G</ProfileLogo>
                     <p onClick={handleClick}>Администратор </p>
                     <VectorIcon />
                  </AdminProfile>
                  <BasicModal open={openModal} onClose={handleClose}>
                     <Container>
                        <ConfirmTitle>
                           Вы уверены, что хотите выйти?
                        </ConfirmTitle>
                        <ButtonContainer>
                           <Button
                              variant="outlined"
                              width="128px"
                              height="40px"
                              onClick={handleClose}
                           >
                              Отменить
                           </Button>
                           <Button
                              variant="contained"
                              width="128px"
                              height="40px"
                              onClick={navigateAfterLogOut}
                           >
                              Выйти
                           </Button>
                        </ButtonContainer>
                     </Container>
                  </BasicModal>
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
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 24px;
`

const ButtonContainer = styled('div')`
   display: flex;
   flex-direction: row;
   gap: 26px;
`

const ConfirmTitle = styled('p')`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 140%;
   text-align: center;
   color: #292929;
`

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
const AdminProfile = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: #ffffff;
   gap: 12px;
   cursor: pointer;
`
const VerticalLine = styled('div')`
   height: 32px;
   border: 1px solid #d2d4d8;
`
const ProfileLogo = styled('div')`
   width: 44px;
   height: 44px;
   border-radius: 50%;
   background-color: #fff;
   font-style: normal;
   font-weight: 600;
   font-size: 26px;
   line-height: 31px;
   color: #cb11ab;
   text-align: center;
   padding: 7px;
   cursor: pointer;
`
