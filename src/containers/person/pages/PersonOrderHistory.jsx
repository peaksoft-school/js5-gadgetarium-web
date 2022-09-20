import React, { useState, useEffect } from 'react'

import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import Vector2Arrow from '../../../assets/icons/Vector 2.png'
import VectorArrow from '../../../assets/icons/VectorArrow.svg'
import EmptyIcon from '../../../assets/images/document.png'
import Rectangle from '../../../assets/images/Rectangle.png'
import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'
import { getOrders } from '../../../store/actions/orderHistoryListActions'

const userOrdersData = [
   {
      orderId: 1,
      orderDate: '2022-09-20',
      orderNumber: '№ 1521751218',
      action: -10,
      img: Rectangle,
      title: 'Bluetooth Наушники Yison Е6',
      rating: 5,
      orderTotalSum: 78000,
   },
]

const PersonOrderHistory = () => {
   const { userOrders, userProducts } = useSelector((state) => state.userOrders)
   console.log(userOrders, userProducts, 'store')
   const userId = useSelector((state) => state.auth?.user?.id)
   console.log(userId, 'id')
   const dispatch = useDispatch()

   useEffect(() => {
      if (userId) {
         dispatch(getOrders(userId))
      }
   }, [userId])

   const [show, setShow] = useState(false)

   const showFirst = () => {
      setShow({ ...show, que: !show.que })
   }

   const showSecond = () => {
      setShow({ ...show, min: !show.min })
   }
   const showThird = () => {
      setShow({ ...show, model: !show.model })
   }
   const showFourth = () => {
      setShow({ ...show, city: !show.city })
   }
   const showFifth = () => {
      setShow({ ...show, delivery: !show.delivery })
   }

   return (
      <Container>
         {userOrdersData.length > 0 ? (
            userOrdersData.map((data) => {
               return (
                  <div key={data.id}>
                     <Div onClick={showFirst}>
                        <DivBlock>
                           <DivBlockInner>
                              <h1>{data.orderDate}</h1>
                              <h2> {data.orderNumber}</h2>
                              <StyledTitle> Доставлены</StyledTitle>
                              <span>{data.orderTotalSum}</span>
                           </DivBlockInner>
                           {show && <img src={Vector2Arrow} alt="" />}
                           {!show && <img src={VectorArrow} alt="" />}
                        </DivBlock>
                        {show.que && (
                           <CardStyled>
                              {userOrdersData.map((product) => {
                                 return (
                                    <div key={product.id}>
                                       <Card
                                          id={product.id}
                                          action={product.discount}
                                          img={product.image}
                                          status={product.stock}
                                          title={product.model}
                                          rating={product.average}
                                          actualprice={product.afterDiscount}
                                          noneactualprice={
                                             product.beforeDiscount
                                          }
                                       />
                                    </div>
                                 )
                              })}
                           </CardStyled>
                        )}
                     </Div>

                     <Div onClick={showSecond}>
                        <DivBlock>
                           <DivBlockInner>
                              <h1>{data.orderDate}</h1>
                              <h2> {data.orderNumber}</h2>
                              <StyledTitle>Доставлены</StyledTitle>
                              <span>{data.orderTotalSum}</span>
                           </DivBlockInner>
                           {show.min && <img src={Vector2Arrow} alt="" />}
                           {!show.min && <img src={VectorArrow} alt="" />}
                        </DivBlock>
                        {show.min && (
                           <AnswersTitle>
                              {userProducts &&
                                 userOrdersData.map((product) => {
                                    return (
                                       <div key={product.id}>
                                          <Card
                                             id={product.id}
                                             action={product.discount}
                                             img={product.image}
                                             status={product.stock}
                                             title={product.model}
                                             rating={product.average}
                                             actualprice={product.afterDiscount}
                                             noneactualprice={
                                                product.beforeDiscount
                                             }
                                          />
                                       </div>
                                    )
                                 })}
                           </AnswersTitle>
                        )}
                     </Div>
                     <Div onClick={showThird}>
                        <DivBlock>
                           <DivBlockInner>
                              <h1>{data.orderDate}</h1>
                              <h2>{data.orderNumber}</h2>
                              <H3> Ожидает оплаты</H3>
                              <span>{data.orderTotalSum}</span>
                           </DivBlockInner>
                           {show.model && <img src={Vector2Arrow} alt="" />}
                           {!show.model && <img src={VectorArrow} alt="" />}
                        </DivBlock>
                        {show.model && (
                           <AnswersTitle>
                              {userProducts.map((orderhistory) => {
                                 return (
                                    <div key={orderhistory.id}>
                                       <Card
                                          id={orderhistory.id}
                                          action={orderhistory.discount}
                                          img={orderhistory.image}
                                          status={orderhistory.stock}
                                          title={orderhistory.model}
                                          rating={orderhistory.average}
                                          actualprice={
                                             orderhistory.afterDiscount
                                          }
                                          noneactualprice={
                                             orderhistory.beforeDiscount
                                          }
                                       />
                                    </div>
                                 )
                              })}
                           </AnswersTitle>
                        )}
                     </Div>
                     <Div onClick={showFourth}>
                        <DivBlock>
                           <DivBlockInner>
                              <h1>{data.orderDate}</h1>
                              <h2>{data.orderNumber}</h2>
                              <StyledH5>В обработке</StyledH5>
                              <span>{data.orderTotalSum}</span>
                           </DivBlockInner>
                           {show.city && <img src={Vector2Arrow} alt="" />}
                           {!show.city && <img src={VectorArrow} alt="" />}
                        </DivBlock>
                        {show.city && (
                           <AnswersTitle>
                              {userProducts.map((orderhistory) => {
                                 return (
                                    <div key={orderhistory.id}>
                                       <Card
                                          id={orderhistory.id}
                                          action={orderhistory.discount}
                                          img={orderhistory.image}
                                          status={orderhistory.stock}
                                          title={orderhistory.model}
                                          rating={orderhistory.average}
                                          actualprice={
                                             orderhistory.afterDiscount
                                          }
                                          noneactualprice={
                                             orderhistory.beforeDiscount
                                          }
                                       />
                                    </div>
                                 )
                              })}
                           </AnswersTitle>
                        )}
                     </Div>
                     <Div onClick={showFifth}>
                        <DivBlock>
                           <DivBlockInner>
                              <h1>{data.orderDate}</h1>
                              <h2> {data.orderNumber}</h2>
                              <StyledH4>Курьер в пути</StyledH4>
                              <span>{data.orderTotalSum}</span>
                           </DivBlockInner>
                           {show.delivery && <img src={Vector2Arrow} alt="" />}
                           {!show.delivery && <img src={VectorArrow} alt="" />}
                        </DivBlock>
                        {show.delivery && (
                           <AnswersTitle>
                              {userProducts.map((orderhistory) => {
                                 return (
                                    <div key={orderhistory.id}>
                                       <Card
                                          id={orderhistory.id}
                                          action={orderhistory.discount}
                                          img={orderhistory.image}
                                          status={orderhistory.stock}
                                          title={orderhistory.model}
                                          rating={orderhistory.average}
                                          actualprice={
                                             orderhistory.afterDiscount
                                          }
                                          noneactualprice={
                                             orderhistory.beforeDiscount
                                          }
                                       />
                                    </div>
                                 )
                              })}
                           </AnswersTitle>
                        )}
                     </Div>
                  </div>
               )
            })
         ) : (
            <StyledBlock>
               <StyledComponent>
                  <StyledEmptyIcon src={EmptyIcon} />
                  <StyledF2>Здесь пока пусто</StyledF2>
                  <StyledText>
                     Здесь будет храниться история ваших заказов.
                  </StyledText>
                  <Button variant="outlined" width="180px" height="41px">
                     К покупкам
                  </Button>
               </StyledComponent>
            </StyledBlock>
         )}
      </Container>
   )
}

export default PersonOrderHistory
const CardStyled = styled('div')`
   display: flex;
   flex-direction: row;
   gap: 15px;
   padding: 30px 0px 0px 0px;
`

const DivBlockInner = styled('div')`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   padding: 0px;
   h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #292929;
   }
   h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #292929;
   }

   span {
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 135.94%;
      text-align: right;
      color: #292929;
      display: flex;
      margin-left: 250px;
      margin-right: 30px;
   }
`
const DivBlock = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 1100px;
`

const Container = styled('div')`
   & .css-gm4yzc {
   }

   margin: 120px 0px 0px 0px;
   width: 1010px;
`
const Div = styled('div')`
   width: 1000px;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   width: 1010px;
   margin-top: 15px;
   padding: 20px 20px 20px 20px;
   cursor: pointer;
   border-bottom: 1px solid #cdcdcd;
   & p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }
`

const AnswersTitle = styled('p')`
   display: flex;
   flex-direction: row;
   gap: 15px;
   padding: 30px 0px 0px 0px;
`
const StyledTitle = styled('h3')`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #299a0d;
`
const H3 = styled('h3')`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #2c68f5;
`
const StyledH5 = styled('h3')`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #f99808;
`
const StyledH4 = styled('h3')`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #08a592;
`
const StyledBlock = styled('div')`
   width: 1300px;
   text-align: center;
   margin: 10px auto;
   display: flex;
   justify-content: center;
   padding: 120px 0px;
`
const StyledComponent = styled('div')`
   width: 466px;
   height: 500px;
   margin-left: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`
const StyledEmptyIcon = styled('img')`
   width: 300px;
`
const StyledF2 = styled('h2')`
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 110%;
   display: flex;
   align-items: flex-end;
   text-transform: normal;
   color: #292929;
`
const StyledText = styled('p')`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   display: flex;
   align-items: flex-end;
   text-align: center;
   color: #292929;
`
