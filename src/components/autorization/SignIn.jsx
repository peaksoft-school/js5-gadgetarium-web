import { useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { login } from '../../store/slices/authSlice'
import { LoginFormSchema } from '../../utils/validation/authValidationSchema'
import BasicModal from '../UI/BasicModal'
import Button from '../UI/Button'
import Input from '../UI/inputs/Input'
import InputForPassword from '../UI/inputs/InputForPassword'

const MAIN_ROUTES = {
   ADMIN: {
      path: '/admin',
   },
}

const SignIn = ({ onClose, open, openRegistationModal }) => {
   const { error } = useSelector((state) => state.auth)
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      mode: 'onChange',
      resolver: yupResolver(LoginFormSchema),
   })
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const { role } = useSelector((state) => state?.auth.user)

   useEffect(() => {
      if (MAIN_ROUTES[role]) navigate(MAIN_ROUTES[role].path)
   }, [role])

   function onSubmit({ email, password }) {
      dispatch(login({ email, password, onClose }))
      if (!error) {
         reset()
      }
   }

   return (
      <BasicModal open={open} onClose={onClose}>
         <SugnUpTitle>Войти</SugnUpTitle>
         <SignUpContainer>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
               <Input
                  type="email"
                  placeholder="Напишите email"
                  width="460px"
                  height="43px"
                  id="email"
                  name="email"
                  error={!!errors.email?.message && !!error}
                  // error={!!errors.email?.message || !!error}
                  variant="default"
                  {...register('email', {
                     required: true,
                  })}
               />
               {errors.email?.message && (
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
               )}
               <InputForPassword
                  placeholder="Напишите пароль"
                  height="43px"
                  id="password"
                  error={!!errors.password?.message}
                  name="password"
                  {...register('password', {
                     required: true,
                  })}
               />
               {errors.password?.message && (
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
               )}
               {error && (
                  <ErrorMessage>Неправильный пароль или логин</ErrorMessage>
               )}
               <Button
                  width="460px"
                  height="47px"
                  variant="contained"
                  type="submit"
               >
                  Войти
               </Button>
            </SignUpForm>
            <SignUpNavToSignIn>
               Нет аккаунта?
               <NavToSignIn onClick={openRegistationModal}>
                  Зарегистрироваться
               </NavToSignIn>
            </SignUpNavToSignIn>
         </SignUpContainer>
      </BasicModal>
   )
}

export default SignIn

const SugnUpTitle = styled.h1`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 28px;
   line-height: 110%;
   text-align: center;
   color: #292929;
`

const SignUpForm = styled.form`
   display: grid;
   grid-template-columns: 1fr;
   grid-row-gap: 24px;
`

const SignUpContainer = styled.div`
   margin-top: 24px;
   margin-bottom: 12px;
`
const SignUpNavToSignIn = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 12px;
   font-size: 14px;
   font-weight: 400;
   color: #292929;
`
const ErrorMessage = styled.div`
   margin: -10px;
   display: flex;
   color: red;
   font-size: 14px;
   justify-content: center;
   transition: all 0.5s ease-in-out;
`

const NavToSignIn = styled.button`
   border: none;
   color: #2c68f5;
   font-weight: 600;
   cursor: pointer;
   margin-left: 5px;
   background: transparent;
`
