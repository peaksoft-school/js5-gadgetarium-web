import React from 'react'

import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

import Modal from '../UI/BasicModal'
import ButtonComponent from '../UI/Button'
import InputComponent from '../UI/inputs/Input'
import InputForPassword from '../UI/inputs/InputForPassword'

const SignIn = ({ onClose, open }) => {
   return (
      <Modal open={open} onClose={onClose}>
         <ModalBox>
            <h3> Войти </h3>
            <Input placeholder="Ваша почта" />
            <InputPassword placeholder="Напишите пароль" />
            <Button> Войти </Button>
            <NavLink to="/sign-up"> Зарегистрироваться </NavLink>
         </ModalBox>
      </Modal>
   )
}

export default SignIn

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
