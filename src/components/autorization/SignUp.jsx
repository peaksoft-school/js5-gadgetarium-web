import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { registration } from '../../store/slices/authSlice'
import { RegisterFormSchema } from '../../utils/validation/authValidationSchema'
import BasicModal from '../UI/BasicModal'
import Button from '../UI/Button'
import Input from '../UI/inputs/Input'
import InputForPassword from '../UI/inputs/InputForPassword'

const SignUp = ({ onClose, open, openLoginModal }) => {
   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
      reset,
   } = useForm({
      mode: 'on',
      resolver: yupResolver(RegisterFormSchema),
   })

   const dispatch = useDispatch()

   function onSubmit({
      firstName,
      lastName,
      phoneNumber,
      password,
      email,
      confirmedPassword,
   }) {
      if (password === confirmedPassword)
         dispatch(
            registration({
               firstName,
               lastName,
               phoneNumber,
               password,
               email,
               onClose,
            })
         )
      reset()
   }

   return (
      <BasicModal open={open} onClose={onClose}>
         <SugnUpTitle>Регистрация</SugnUpTitle>
         <SignUpContainer>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
               <Input
                  type="text"
                  placeholder="Напишите ваше имя"
                  width="460px"
                  height="43px"
                  id="firstName"
                  name="firstName"
                  error={!!errors.firstName?.message}
                  variant="default"
                  {...register('firstName', {
                     required: true,
                  })}
               />
               <Input
                  type="text"
                  placeholder="Напишите вашу фамилию"
                  width="460px"
                  height="43px"
                  id="lastname"
                  name="lastname"
                  error={!!errors.lastname?.message}
                  variant="default"
                  {...register('lastName', { required: true })}
               />
               <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  rules={{
                     required: true,
                  }}
                  render={({ field }) => (
                     <InputMask
                        mask="+996 (999)-99-99-99"
                        maskChar=""
                        value={field.value}
                        onChange={field.onChange}
                     >
                        {(inputProps) => (
                           <Input
                              type="tel"
                              placeholder="+996 (_ _ _) _ _  _ _  _ _"
                              width="460px"
                              height="43px"
                              error={!!errors.phoneNumber?.message}
                              id="phoneNumber"
                              variant="default"
                              {...inputProps}
                           />
                        )}
                     </InputMask>
                  )}
               />
               {errors.phoneNumber?.message && (
                  <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
               )}
               <Input
                  type="email"
                  placeholder="Напишите email"
                  width="460px"
                  height="43px"
                  id="email"
                  name="email"
                  error={!!errors.email?.message}
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
                  error={
                     !!errors.password?.message ||
                     !!errors.confirmedPassword?.message
                  }
                  name="password"
                  {...register('password')}
               />
               {errors.password?.message && (
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
               )}
               <InputForPassword
                  placeholder="Подтвердите пароль"
                  height="43px"
                  id="confirmedPassword"
                  error={!!errors.confirmedPassword?.message}
                  name="confirmedPassword"
                  {...register('confirmedPassword')}
               />
               {errors.confirmedPassword?.message && (
                  <ErrorMessage>
                     {errors.confirmedPassword?.message}
                  </ErrorMessage>
               )}
               <Button
                  width="460px"
                  height="47px"
                  variant="contained"
                  type="submit"
               >
                  Создать аккаунт
               </Button>
            </SignUpForm>
            <SignUpNavToSignIn>
               У вас уже есть аккаунт?
               <NavToSignIn onClick={openLoginModal}>Войти</NavToSignIn>
            </SignUpNavToSignIn>
         </SignUpContainer>
      </BasicModal>
   )
}

export default SignUp

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
