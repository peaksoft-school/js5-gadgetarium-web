import { useState } from 'react'

// import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Group from '../../../assets/images/337564.png'
import Button from '../../../components/UI/Button'
import Input from '../../../components/UI/inputs/Input'
import InputForPassword from '../../../components/UI/inputs/InputForPassword'

const PersonProfile = () => {
   const [change, setChange] = useState(false)
   // const { changes } = useSelector((state) => state)
   // console.log(changes)

   return (
      <div>
         <div>
            {/* <div> */}
            <StyledProgileImg>
               <img src={Group} alt="" />
               <p>Нажмите для добавления фотографии</p>
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
                        value="Azamat"
                     />
                     <StyledText>E-mail *</StyledText>
                     <Input
                        width="338px"
                        height="48px"
                        borderRadius="6px"
                        value="aza@gmail.com"
                     />
                  </StyledDiv>
                  <StyledDiv>
                     <StyledText>Фамилия *</StyledText>
                     <Input
                        width="338px"
                        height="48px"
                        borderRadius="6px"
                        value="Azamatov"
                     />
                     <StyledText>Телефон *</StyledText>
                     <Input
                        width="338px"
                        height="48px"
                        borderRadius="6px"
                        value="+996555123456"
                     />
                  </StyledDiv>
               </StyledBox>
               {/* </div> */}

               <div>
                  <div>
                     <StyledText>Адрес доставки *</StyledText>
                     <Input
                        width="686px"
                        height=" 48px"
                        borderRadius="6px"
                        placeholder="ул.Московская 120, кв 4, дом 9"
                     />
                  </div>
                  {change ? (
                     <>
                        <ChangePasswordDiv>
                           <ChangePasswordButton>
                              Сменить пароль
                           </ChangePasswordButton>
                        </ChangePasswordDiv>

                        <ChangePasswordBox>
                           <ChangePasswordInput>
                              <StyledText>Старый пароль *</StyledText>
                              <InputForPassword
                                 width="338px"
                                 height="48px"
                                 borderRadius="6px"
                                 placeholder="Подтвердите пароль"
                                 id="confirmedPassword"
                                 // error={!!errors.confirmedPassword?.message}
                                 // name="confirmedPassword"
                                 // {...register('confirmedPassword')}
                              />
                              <StyledText>Новый пароль *</StyledText>
                              <Input
                                 width="338px"
                                 height="48px"
                                 borderRadius="6px"
                              />
                           </ChangePasswordInput>

                           <StyledText>Подтвердите новый пароль *</StyledText>
                           <Input
                              width="338px"
                              height="48px"
                              borderRadius="6px"
                           />
                        </ChangePasswordBox>

                        <StyledTextButton>
                           <Button
                              variant="outlined"
                              width="338px"
                              height="47px"
                           >
                              Отменить
                           </Button>
                           <Button
                              variant="contained"
                              width="338px"
                              height="47px"
                           >
                              Сохранить
                           </Button>
                        </StyledTextButton>
                     </>
                  ) : (
                     <StyledTextButton>
                        <Button variant="outlined" width="338px" height="47px">
                           Назад
                        </Button>
                        <Button
                           onClick={() => setChange(true)}
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
         </div>
      </div>
   )
}

export default PersonProfile
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
   justify-content: center;
   width: 148px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 130%;
   text-align: center;
   color: #91969e;
   border: 1px solid red;
`

const ComponentContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-content: space-around;
   justify-content: center;
   /* width: 688px; */
   margin-left: 500px;
   margin-top: -150px;
   /* padding: 30px; */
`
const StyledBox = styled.div`
   display: flex;
   /* margin: 10px;  */
`
const StyledDiv = styled.div`
   /* padding: 10px; */
   margin: 5px;
`
const StyledText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #384255;
   margin: 15px;
`
const StyledTextButton = styled('div')`
   /* margin: 5px; */
   display: flex;
   justify-content: space-between;
`
const ChangePasswordDiv = styled('div')`
   display: flex;
   justify-content: flex-end;
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
const ChangePasswordBox = styled.div``
const ChangePasswordInput = styled.div`
   display: flex;
`
// const StyledGroup = styled('div')`
//    width: 148px;
//    height: 130px;
//    left: 195px;
//    top: 470px;
//    p {
//       font-style: normal;
//       font-weight: 500;
//       font-size: 12px;
//       line-height: 130%;
//       text-align: center;
//       color: #91969e;
//    }
// `

// const ComponentForm = styled.div`
//    width: 100%;
//    display: flex;
//    justify-content: center;
//    /* display: grid;
//    grid-template-columns: 1fr;
//    grid-row-gap: 24px; */
//    /* margin: 0 auto; */
// `

// const StyledH4 = styled.h4`
//    font-style: normal;
//    font-weight: 700;
//    font-size: 24px;
//    line-height: 110%;
//    color: #292929;
// `
// const StyledBox = styled.div`
//    display: flex;
//    gap: 10px;
// `
// const StyledContainerDiv = styled.div`
//    display: flex;
//    /* flex-direction: column; */
//    /* margin-top: 24px; */
//    margin-bottom: 12px;
//    gap: 10px;
//    /* width: 1532px; */
//    height: 632px;
//    /* margin-top: 40px; */
//    /* display: grid;
//    grid-template-columns: repeat(5, 1fr);
//    grid-template-rows: repeat(3, 1fr); */
//    /* grid-column-gap: 10px; */
//    /* grid-row-gap: 10px; */
//    p {
//       font-style: normal;
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 150%;
//       color: #384255;
//    }
// `

// // const StyledDiv = styled.div`
// //    p {
// //       font-style: normal;
// //       font-weight: 400;
// //       font-size: 16px;
// //       line-height: 150%;
// //       color: #384255;
// //    }
// // `
// // const ContainerDiv = styled.div`
// //    display: flex;
// //    flex-direction: column;
// // `

// const StyledAdress = styled.div`
//    font-style: normal;
//    font-weight: 400;
//    font-size: 16px;
//    line-height: 150%;
//    color: #384255;
//    &.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
//       padding: 8px, 12px, 8px, 12px;
//    }
// `
// const ContainerBox = styled.div`
//    display: flex;
//    margin-top: 15px;
//    gap: 10px;
// `
