import React from 'react'

// import Tab from '@mui/material/Tab'
import styled from 'styled-components'

// import Group from '../../assets/images/337564.png'
import Breadcrumbs from '../../components/UI/Bredcrumbs'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/inputs/Input'
import Tab from '../../components/UI/Tab'

const pathsArray = [
   {
      path: '/',
      name: 'Личный кабинет ',
   },
   {
      path: '/favourites',
      name: ' Учетная запись ',
   },
]

const tabsArray = [
   {
      id: '1',
      label: 'История заказов',
      value: '1',
   },
   {
      id: '2',
      label: 'Избранное',
      value: '2',
   },
   {
      id: '3',
      label: 'Профиль',
      value: '3',
   },
]
const PersonPage = () => {
   return (
      <div>
         <Breadcrumbs paths={pathsArray} />
         <StyledH3>Профиль</StyledH3>
         <Horizontal />
         <TabStyledComponent>
            <Tab tabsArray={tabsArray} variant="variant" />
         </TabStyledComponent>

         <LargeContainer>
            {/* <StyledGroup src={Group}>
               <p>Нажмите для добавления фотографии</p>
            </StyledGroup> */}
            <StyledUser>
               <UserH5>Азамат Азаматов</UserH5>
               <UserData>aza@gmail.com +996 (400) 88-88-88</UserData>
               <Main>Выйти</Main>
            </StyledUser>
            <ComponentForm>
               <StyledH4>Личные данные</StyledH4>

               <StyledBox>
                  <StyledContainerDiv>
                     <p>Имя *</p>
                     <Input width="338px" height="48px" borderRadius="6px" />
                     <p>Фамилия *</p>
                     <Input width="338px" height="48px" borderRadius="6px" />
                  </StyledContainerDiv>
                  <StyledDiv>
                     <p>E-mail *</p>
                     <Input width="338px" height="48px" borderRadius="6px" />
                     <p>Телефон *</p>
                     <Input width="338px" height="48px" borderRadius="6px" />
                  </StyledDiv>
               </StyledBox>

               <ContainerDiv>
                  <StyledAdress>
                     <p>Адрес доставки *</p>
                     <Input
                        width="686px"
                        height=" 48px"
                        borderRadius="6px"
                        placeholder="ул.Московская 120, кв 4, дом 9"
                     />
                  </StyledAdress>
                  <ContainerBox>
                     <Button variant="outlined" width="338px" height="47px">
                        Назад
                     </Button>
                     <Button variant="contained" width="338px" height="47px">
                        Редактировать
                     </Button>
                  </ContainerBox>
               </ContainerDiv>
            </ComponentForm>
         </LargeContainer>
      </div>
   )
}

export default PersonPage
const LargeContainer = styled.div``
const ComponentForm = styled.div`
   position: absolute;
   width: 688px;
   left: 455px;
   top: 470px;
`
const TabStyledComponent = styled.div`
   .css-1s62zzw-MuiButtonBase-root-MuiTab-root.Mui-selected {
      background: #384255;
      color: #ffffff;
   }
`
const StyledH3 = styled.h3`
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
   display: flex;
   align-items: flex-end;
   color: #292929;
   margin: 30px 0px 30px 0px;
`
const Horizontal = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border: 1px solid #cdcdcd;
   transform: rotate(180deg);
   margin-bottom: 30px;
`
// const StyledGroup = styled('img')`
//    p {
//       font-style: normal;
//       font-weight: 500;
//       font-size: 12px;
//       line-height: 130%;
//       text-align: center;
//       color: #91969e;
//    }
// `
const StyledH4 = styled.h4`
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 110%;
   color: #292929;
   gap: 26px;
`
const StyledUser = styled.div`
   position: absolute;
   width: 169px;
   height: 135px;
   left: 1500px;
`
const Main = styled.p`
   color: blue;
`
const UserH5 = styled.h5`
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 22px;
   color: #384255;
`
const UserData = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   gap: 24px;
   color: #384255;
`
const StyledBox = styled.div`
   display: flex;
   gap: 10px;
`

const StyledContainerDiv = styled.div`
   p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #384255;
   }
`
const StyledDiv = styled.div`
   p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #384255;
   }
`

const ContainerDiv = styled.div`
   display: flex;
   flex-direction: column;
`

const StyledAdress = styled.div`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #384255;
   &.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 8px, 12px, 8px, 12px;
   }
`
const ContainerBox = styled.div`
   display: flex;
   margin-top: 15px;
   gap: 10px;
`
