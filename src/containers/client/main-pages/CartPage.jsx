import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import EmptyIcon from '../../../assets/images/sammy-shopping-1 1.png'
import Bredcrumbs from '../../../components/UI/Breadcrumbs'
import Button from '../../../components/UI/Button'
import BasketCard from '../../../components/UI/card/BasketCard'
import {
   getAllProducts,
   getProductsTotalSum,
} from '../../../store/actions/cartActions'

const CartPage = () => {
   const { cartProducts, cartTotalSum } = useSelector((state) => state.cart)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllProducts())
      dispatch(getProductsTotalSum())
   }, [])

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
      <>
         <Container>
            <Bredcrumbs paths={pathsArray} />
            <ComparisonPageTitle>Товары в корзине</ComparisonPageTitle>
         </Container>
         <Horizontal />
         {cartProducts.length > 0 ? (
            <CartContainer>
               <StyledCard>
                  {cartProducts.map((data) => {
                     return (
                        <div key={data.id}>
                           <BasketCard
                              id={data.id}
                              img={data.img}
                              title={data.model}
                              quantity={data.quantity}
                              rating={data.average}
                              actual={data.afterDicount}
                              status={data.stock}
                              noneactualprice={data.beforeDiscount}
                           />
                        </div>
                     )
                  })}
               </StyledCard>
               <StyledTotalSum>
                  <p>Сумма заказов</p>
                  <Horizontal />
                  <StyledTitleSum>
                     <div>
                        <span>Количество товаров: </span>
                        <span>Ваша скидка: </span>
                        <span>Сумма:</span>
                        <h3>Итого</h3>
                     </div>
                     <div>
                        <span> 3 шт{cartTotalSum.amountOfProducts} </span>
                        <RedTitle> -1000с {cartTotalSum.discount} </RedTitle>
                        <span> 45300c{cartTotalSum.totalSum} </span>
                        <h3> 44300с {cartTotalSum.price} </h3>
                     </div>
                  </StyledTitleSum>
                  <Button variant="contained" width="390px" height="45px">
                     ПЕРЕЙТИ К ОФОРМЛЕНИЮ
                  </Button>
               </StyledTotalSum>
            </CartContainer>
         ) : (
            <StyledBlock>
               <StyledComponent>
                  <StyledEmptyIcon src={EmptyIcon} />
                  <StyledF2>Ваша корзина пуста</StyledF2>
                  <StyledText>Но вы всегда можете ее наполнить</StyledText>
                  <StyledLink to="/catalog">
                     <Button variant="contained" width="180px" height="41px">
                        К покупкам
                     </Button>
                  </StyledLink>
               </StyledComponent>
            </StyledBlock>
         )}
      </>
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
const CartContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 20px;
`
const StyledCard = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   div {
      padding-bottom: 10px;
   }
`
const StyledTotalSum = styled.div`
   font-family: 'Inter';
   width: 450px;
   height: 280px;
   background: #fff;
   margin-top: 20px;
   border-radius: 4px;
   padding: 20px 30px;
   p {
      font-size: 20px;
      padding-bottom: 10px;
   }
`
const StyledTitleSum = styled.div`
   width: 300px;
   display: flex;
   justify-content: space-between;
   margin-bottom: 16px;
   div {
      display: flex;
      flex-direction: column;
      gap: 8px;
   }
`
const RedTitle = styled.span`
   color: red;
`
