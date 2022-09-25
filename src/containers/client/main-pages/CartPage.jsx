import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import EmptyIcon from '../../../assets/images/sammy-shopping-1 1.png'
import Bredcrumbs from '../../../components/UI/Breadcrumbs'
import Button from '../../../components/UI/Button'
import BasketCard from '../../../components/UI/card/BasketCard'
// import { Loader } from '../../../components/UI/Loader'
import {
   deleteProducts,
   getAllProducts,
   getProductsTotalSum,
} from '../../../store/actions/cartActions'

const CartPage = () => {
   const { cartProducts, cartTotalSum } = useSelector((state) => state.cart)
   const [checkedProducts, setCheckedProducts] = useState({
      productId: [],
   })
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllProducts())
   }, [])

   console.log(cartTotalSum)
   console.log(checkedProducts)

   const { productId } = checkedProducts
   const getTotalSumByIds = (productIds) => productIds.join(',')

   useEffect(() => {
      if (checkedProducts.productId.length > 0) {
         dispatch(getProductsTotalSum(getTotalSumByIds(productId)))
      }
   }, [checkedProducts])

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

   const handleDeleteById = (e, productId) => {
      console.log(productId)
      e.stopPropagation()
      dispatch(deleteProducts(productId))
   }

   const getProductId = (e) => {
      const { value, checked } = e.target
      const { productId } = checkedProducts

      if (checked) {
         setCheckedProducts({
            productId: [...productId, value],
         })
      } else {
         setCheckedProducts({
            productId: productId.filter((e) => e !== value),
         })
      }
   }

   const { amountOfProducts, discount, price, totalSum } = cartTotalSum

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
                              getProductId={getProductId}
                              id={data.id}
                              img={data.image}
                              title={data.model}
                              quantity={data.amountOfProducts}
                              rating={data.average}
                              price={data.price}
                              status={data.stock}
                              productCode={data.vendorCode}
                              handleDeleteById={(e) =>
                                 handleDeleteById(e, data.id)
                              }
                           />
                        </div>
                     )
                  })}
               </StyledCard>
               <StyledTotalSum>
                  <p>Сумма заказов</p>
                  <Horizontal />
                  {checkedProducts.productId.length > 0 ? (
                     <StyledTitleSum>
                        <StyledContainer>
                           <div>
                              <span>Количество товаров: </span>
                              {discount > 0 && <span>Ваша скидка: </span>}
                              <span>Сумма:</span>
                              <h3>Итого</h3>
                           </div>
                           <div>
                              <span>{amountOfProducts} шт</span>
                              {discount > 0 && (
                                 <RedTitle>{`-${discount}c`}</RedTitle>
                              )}
                              <span>{price}c</span>
                              <h3>{totalSum}c</h3>
                           </div>
                        </StyledContainer>
                        <Button variant="contained" width="300px" height="45px">
                           ПЕРЕЙТИ К ОФОРМЛЕНИЮ
                        </Button>
                     </StyledTitleSum>
                  ) : (
                     <EmptyMessage>👈Выберите товар</EmptyMessage>
                  )}
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
   min-height: 60vh;
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
   width: 350px;
   height: 300px;
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
   display: flex;
   flex-direction: column;
   gap: 14px;
`

const StyledContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   & span {
      margin-top: 8px;
      display: flex;
   }
   & h3 {
      margin-top: 8px;
   }
`
const RedTitle = styled.span`
   color: red;
`
const EmptyMessage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 100px;
`
