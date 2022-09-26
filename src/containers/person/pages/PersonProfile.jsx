import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import Button from '../../../components/UI/Button'
import ImagePicker from '../../../components/UI/ImagePicker'
import Input from '../../../components/UI/inputs/Input'
import InputForPassword from '../../../components/UI/inputs/InputForPassword'
import { postProfile, putProfile } from '../../../store/actions/userListActions'

const PersonProfile = () => {
   const { firstName, lastName, phoneNumber, email, address, image } =
      useSelector((state) => state.userProfile.userInfo)
   const [user, setUser] = useState({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
   })
   const [inputForPassword, setInputForPassword] = useState({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
   })

   const [error, setError] = useState({
      newPassword: '',
      confirmNewPassword: '',
   })

   const [file, setFile] = useState(image)
   const [other, showOther] = useState(false)
   const dispatch = useDispatch()

   const validateInput = (e) => {
      const { name, value } = e.target
      setError((prev) => {
         const stateObj = { ...prev, [name]: '' }
         switch (name) {
            case 'newPassword':
               if (!value) {
                  stateObj[name] = 'Пожалуйста введите пароль.'
               } else if (
                  inputForPassword.confirmNewPassword &&
                  value !== inputForPassword.confirmNewPassword
               ) {
                  stateObj.confirmNewPassword =
                     'Пароль и подтверждение пароля не совпадают.'
               } else if (value.length < 8) {
                  stateObj.confirmNewPassword = 'Введите более 8 символов'
               } else {
                  stateObj.confirmNewPassword =
                     inputForPassword.confirmNewPassword
                        ? ''
                        : error.confirmNewPassword
               }
               break

            case 'confirmNewPassword':
               if (!value) {
                  stateObj[name] = 'Пожалуйста, введите Подтвердить пароль.'
               } else if (
                  inputForPassword.newPassword &&
                  value !== inputForPassword.newPassword
               ) {
                  stateObj[name] = 'Пароль и подтверждение пароля не совпадают.'
               }
               break
            default:
               break
         }

         return stateObj
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (user.firstName && user.lastName && user.phoneNumber && user.email) {
         dispatch(putProfile({ user, file }))
      } else {
         toast.error('Заполните пустые поля')
      }
   }

   const { newPassword, currentPassword, confirmNewPassword } = inputForPassword

   const handlePasswordSubmit = (e) => {
      e.preventDefault()
      if (newPassword === confirmNewPassword) {
         dispatch(postProfile({ currentPassword, newPassword, showOther }))
         setInputForPassword({
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
         })
         showOther(false)
      } else {
         setError()
      }
   }

   const handlePasswordChange = (e) => {
      const { value, name } = e.target
      setInputForPassword((prev) => ({
         ...prev,
         [name]: value,
      }))
      validateInput(e)
   }

   const navigate = useNavigate()
   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }

   const onChange = (newValue) => {
      setFile(newValue)
   }

   const navigateBack = () => {
      navigate(-1)
   }
   return (
      <div>
         <DivContainer>
            <StyledProgileImg>
               <ImagePicker onChange={onChange} newFile={image} />
            </StyledProgileImg>
            <ComponentContainer>
               <StyledTextH3>Личные данные</StyledTextH3>
               <StyledBox>
                  <StyledDiv>
                     <StyledText>Имя *</StyledText>
                     <Input
                        width="338px"
                        height="48px"
                        borderRadius="6px"
                        name="firstName"
                        onChange={handleChange}
                        defaultValue={firstName}
                        placeholder="Введите свое имя"
                     />
                     <StyledText>E-mail *</StyledText>
                     <Input
                        width="338px"
                        height="48px"
                        name="email"
                        onChange={handleChange}
                        borderRadius="6px"
                        placeholder="Введите свою почту"
                        value={email}
                     />
                  </StyledDiv>
                  <StyledDiv>
                     <StyledText>Фамилия *</StyledText>
                     <Input
                        width="338px"
                        height="48px"
                        name="lastName"
                        borderRadius="6px"
                        onChange={handleChange}
                        defaultValue={lastName}
                        placeholder="Введите свою фамилию"
                     />
                     <StyledText>Телефон *</StyledText>
                     <Input
                        width="338px"
                        height="48px"
                        borderRadius="6px"
                        defaultValue={phoneNumber}
                        onChange={handleChange}
                        placeholder="Введите свой телефон"
                     />
                  </StyledDiv>
               </StyledBox>
               <div>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                     }}
                  >
                     <StyledText>Адрес доставки *</StyledText>
                     <AddressDiv>
                        <Input
                           width="686px"
                           height=" 48px"
                           name="address"
                           onChange={handleChange}
                           defaultValue={address}
                           borderRadius="6px"
                           placeholder="Введите свой адресс"
                        />
                     </AddressDiv>
                  </div>
                  <ChangePasswordDiv>
                     <ChangePasswordButton
                        onClick={() => {
                           showOther(true)
                        }}
                     >
                        Сменить пароль
                     </ChangePasswordButton>
                  </ChangePasswordDiv>
                  {other ? (
                     <>
                        <ChangePasswordBox>
                           <ChangePasswordInput>
                              <div>
                                 <StyledText>Старый пароль *</StyledText>
                                 <InputForPassword
                                    width="338px"
                                    height="48px"
                                    borderRadius="6px"
                                    placeholder="Подтвердите пароль"
                                    id="currentPassword"
                                    name="currentPassword"
                                    onChange={handlePasswordChange}
                                 />
                              </div>
                              <div>
                                 <StyledText>Новый пароль *</StyledText>
                                 <InputForPassword
                                    width="338px"
                                    height="48px"
                                    borderRadius="6px"
                                    placeholder="Новый пароль"
                                    name="newPassword"
                                    onBlur={validateInput}
                                    onChange={handlePasswordChange}
                                 />
                                 {error.newPassword && (
                                    <StyledError>
                                       {error.newPassword}
                                    </StyledError>
                                 )}
                              </div>
                           </ChangePasswordInput>
                           <StyledText>Подтвердите новый пароль *</StyledText>
                           <InputForPassword
                              width="338px"
                              height="48px"
                              borderRadius="6px"
                              placeholder="Подтвердите новый пароль"
                              name="confirmNewPassword"
                              onBlur={validateInput}
                              onChange={handlePasswordChange}
                           />
                           {error.confirmNewPassword && (
                              <StyledError>
                                 {error.confirmNewPassword}
                              </StyledError>
                           )}
                        </ChangePasswordBox>
                        <StyledTextButton>
                           <Button
                              variant="outlined"
                              width="338px"
                              height="47px"
                              onClick={() => {
                                 showOther(false)
                              }}
                           >
                              Отменить
                           </Button>
                           <Button
                              variant="contained"
                              width="338px"
                              height="47px"
                              onClick={handlePasswordSubmit}
                           >
                              Сохранить
                           </Button>
                        </StyledTextButton>
                     </>
                  ) : (
                     <StyledTextButton>
                        <Button
                           variant="outlined"
                           width="338px"
                           height="47px"
                           onClick={navigateBack}
                        >
                           Назад
                        </Button>
                        <Button
                           onClick={handleSubmit}
                           variant="contained"
                           width="338px"
                           height="47px"
                        >
                           Редактировать
                        </Button>
                     </StyledTextButton>
                  )}
               </div>
            </ComponentContainer>
         </DivContainer>
      </div>
   )
}

export default PersonProfile

const DivContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 70px;
`
const StyledTextH3 = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 110%;
   color: #292929;
`
const StyledProgileImg = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 148px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 130%;
   text-align: center;
   color: #91969e;
   border-color: red 1px solid;
`

const ComponentContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-content: space-around;
   justify-content: center;
   margin-left: 200px;
`
const StyledBox = styled.div`
   display: flex;
`
const StyledDiv = styled.div`
   margin: 5px;
`
const StyledText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #384255;
   margin: 15px 0px;
   .span {
      margin-left: 5px;
   }
`
const AddressDiv = styled.div`
   margin-left: 5px;
`
const StyledTextButton = styled('div')`
   margin: 20px 5px;
   display: flex;
   justify-content: space-between;
`
const ChangePasswordDiv = styled('div')`
   display: flex;
   justify-content: flex-end;
   margin-top: 15px;
`
const ChangePasswordButton = styled('button')`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #cb11ab;
   border: none;
   cursor: pointer;
`
const ChangePasswordBox = styled.div`
   margin: 5px;
`
const ChangePasswordInput = styled.div`
   display: flex;
   justify-content: space-between;
`
const StyledError = styled.span`
   display: flex;
   margin: 4px 0 0 0;
   font-size: 13px;
   color: #e64646;
`
