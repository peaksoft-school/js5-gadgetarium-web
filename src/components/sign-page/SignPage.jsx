import React from 'react'

import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import Modal from '../UI/BasicModal'
import ButtonComponent from '../UI/Button'
import InputComponent from '../UI/inputs/Input'
import InputForPassword from '../UI/inputs/InputForPassword'

const SignPage = () => {
   const a = true
   return (
      <SignContainer>
         <Logo src={logo} />
         <Container isOpen={a}>
            <ModalBox>
               <h3> Войти </h3>
               <Input placeholder="Ваша почта" />
               <InputPassword placeholder="Напишите пароль" />
               <Button> Войти </Button>
               <NavLink to="/sign-page"> Зарегистрироваться </NavLink>
            </ModalBox>
         </Container>
      </SignContainer>
   )
}

export default SignPage

const SignContainer = styled('div')`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(107.03deg, #6b0fa9 14.3%, #4d0eb8 94.87%);
`
const Logo = styled('img')`
   margin: 40px 50px;
   width: 307px;
   height: 56px;
`
const Container = styled(Modal)`
   background: transparent;
`
const ModalBox = styled('div')`
   width: 460px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   h3 {
      font-size: 28px;
   }
   a {
      text-decoration: none;
   }
`
const Input = styled(InputComponent)`
   height: 50px;
`
const InputPassword = styled(InputForPassword)`
   height: 50px;
`
const Button = styled(ButtonComponent)`
   width: 180px;
   height: 47px;
   background: #e20fbe;
   font-size: 16px;
`
