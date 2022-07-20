import styled from 'styled-components'

import BasicModal from '../UI/BasicModal'
import Button from '../UI/Button'
import Input from '../UI/inputs/Input'
import InputForPassword from '../UI/inputs/InputForPassword'

const SignUp = ({ onClose, open }) => {
   return (
      <BasicModal open={open} onClose={onClose}>
         <SugnUpTitle>Регистрация</SugnUpTitle>
         <SignUpContainer>
            <SignUpForm>
               <Input
                  type="text"
                  placeholder="Напишите ваше имя"
                  width="460px"
                  height="43px"
                  borderRadius="6px"
                  variant="default"
               />
               <Input
                  type="text"
                  placeholder="Напишите вашу фамилию"
                  width="460px"
                  height="43px"
                  borderRadius="6px"
                  variant="default"
               />
               <Input
                  type="tel"
                  placeholder="+996 (_ _ _) _ _  _ _  _ _"
                  width="460px"
                  height="43px"
                  borderRadius="6px"
                  variant="default"
               />
               <Input
                  type="email"
                  placeholder="Напишите email"
                  width="460px"
                  height="43px"
                  borderRadius="6px"
                  variant="default"
               />
               <InputForPassword placeholder="Напишите пароль" height="43px" />
               <InputForPassword
                  placeholder="Подтвердите пароль"
                  height="43px"
               />
               <Button width="460px" height="47px" variant="contained">
                  Создать аккаунт
               </Button>
            </SignUpForm>
            <SignUpNavToSignIn>
               У вас уже есть аккаунт?
               <NavToSignIn to="/home">Войти</NavToSignIn>
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

const NavToSignIn = styled.a`
   color: #2c68f5;
   font-weight: 600;
   cursor: pointer;
   margin-left: 5px;
`
