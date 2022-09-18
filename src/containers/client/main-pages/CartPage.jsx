import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import EmptyIcon from '../../../assets/images/sammy-shopping-1 1.png'
import Bredcrumbs from '../../../components/UI/Breadcrumbs'
import Button from '../../../components/UI/Button'

const CartPage = () => {
   const pathsArray = [
      {
         path: '/',
         name: 'Главная',
      },
      {
         path: '/cart',
         name: 'Корзина',
      },
   ]
   return (
      <div>
         <Container>
            <Bredcrumbs paths={pathsArray} />
            <ComparisonPageTitle>Товары в корзине</ComparisonPageTitle>
         </Container>
         <Horizontal />
         <StyledBlock>
            <StyledComponent>
               <StyledEmptyIcon src={EmptyIcon} />
               <StyledF2>Ваша корзина пуста</StyledF2>
               <StyledText>Но вы всегда можете ее наполнить</StyledText>
               <StyledLink to="/catalog">
                  <Button variant="outlined" width="180px" height="41px">
                     К покупкам
                  </Button>
               </StyledLink>
            </StyledComponent>
         </StyledBlock>
      </div>
   )
}

export default CartPage

const StyledBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 120px 0px 120px 0px;
`
const StyledComponent = styled.div`
   width: 466px;
   height: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`
const StyledEmptyIcon = styled('img')`
   width: 300px;
`
const StyledF2 = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 110%;
   display: flex;
   align-items: flex-end;
   color: #292929;
`
const StyledText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   display: flex;
   align-items: flex-end;
   text-align: center;
   color: #292929;
`
const StyledLink = styled(Link)`
   text-decoration: none;
`
const Container = styled.div`
   margin-bottom: 20px;
`

const ComparisonPageTitle = styled.h1`
   margin-top: 30px;
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   color: #292929;
`
const Horizontal = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border: 1px solid #cdcdcd;
   transform: rotate(180deg);
   margin-bottom: 30px;
`
