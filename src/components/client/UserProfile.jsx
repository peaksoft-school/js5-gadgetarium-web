import { useState } from 'react'

import { Popover } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import profileLogo from '../../assets/icons/profile-icon.svg'
import { logout } from '../../store/slices/authSlice'
import SignIn from '../autorization/SignIn'
import SignUp from '../autorization/SignUp'

const UserProfile = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const [modalControl, setModalControl] = useState({
      loginOpened: false,
      signupOpened: false,
   })
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { user } = useSelector((state) => state.auth)
   const { image } = useSelector((state) => state.userProfile.userInfo)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const navigateAfterLogOut = () => {
      dispatch(logout())
      window.location.reload()
      navigate('/')
   }

   const open = Boolean(anchorEl)
   const id = open ? 'simple-popover' : undefined

   const openModal = (modalType) => () => {
      if (modalType === 'login') {
         setModalControl({
            loginOpened: true,
            signupOpened: false,
         })
      } else if (modalType === 'signup') {
         setModalControl({
            loginOpened: false,
            signupOpened: true,
         })
      }
      setAnchorEl(null)
   }
   const closeModal = (modalType) => () => {
      if (modalType === 'login') {
         setModalControl({
            loginOpened: false,
         })
      } else if (modalType === 'signup') {
         setModalControl({
            signupOpened: false,
         })
      }
   }

   return (
      <StyledDiv>
         <p onClick={handleClick}>{user?.email || 'Войти / Регистрация'}</p>
         <ProfileLogo src={image || profileLogo} />
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
            {user.email ? (
               <LinkItems>
                  <li onClick={() => navigate('/person')}>
                     Войти в личный кабинет
                  </li>
                  <li onClick={navigateAfterLogOut}>Выйти</li>
               </LinkItems>
            ) : (
               <LinkItems>
                  <li onClick={openModal('login')}>Войти</li>
                  <li onClick={openModal('signup')}>Регистрация</li>
               </LinkItems>
            )}
         </Popover>
         <SignIn
            open={modalControl.loginOpened}
            onClose={closeModal('login')}
            openRegistationModal={openModal('signup')}
         />
         <SignUp
            open={modalControl.signupOpened}
            onClose={closeModal('signup')}
            openLoginModal={openModal('login')}
         />
      </StyledDiv>
   )
}

export default UserProfile

const StyledDiv = styled('div')`
   width: 220px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   color: #ffffff;
   cursor: pointer;
`

const ProfileLogo = styled('img')`
   width: 35px;
   height: 35px;
   object-fit: cover;
   border-radius: 50%;
`

const LinkItems = styled.ul`
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
