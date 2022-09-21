import React, { useState } from 'react'

import { styled } from '@mui/material'

import Vector2Arrow from '../../../assets/icons/Vector 2.png'
import VectorArrow from '../../../assets/icons/VectorArrow.svg'
import EmptyIcon from '../../../assets/images/document.png'
import Rectangle from '../../../assets/images/Rectangle.png'
import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'

const data = [
   {
      id: 1,
      action: -10,
      img: Rectangle,
      status: 'В наличии',
      title: 'Bluetooth Наушники Yison Е6',
      rating: 5,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 2,
      action: -20,
      img: Rectangle,
      status: 'В наличии',
      title: 'Bluetooth Наушники Yison Е6',
      rating: 2,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 3,
      action: -10,
      img: Rectangle,
      status: 'В наличии',
      title: 'Bluetooth Наушники Yison Е6',
      rating: 3,
      actualprice: 78000,
      noneactualprice: 80000,
   },
   {
      id: 4,
      action: -10,
      img: Rectangle,
      status: 'В наличии',
      title: 'Bluetooth Наушники Yison Е6',
      rating: 4,
      actualprice: 78000,
      noneactualprice: 80000,
   },
]
const PersonOrderHistory = () => {
   const [show, setShow] = useState({
      que: false,
      min: false,
      model: false,
      city: false,
      delivery: false,
   })

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
   // console.log(show)
   return (
      <Container>
         {show.que !== null ? (
            <>
               <Div onClick={showFirst}>
                  <DivBlock>
                     <DivBlockInner>
                        <h1>26.03.2021</h1>
                        <h2> № 1521751218</h2>
                        <StyledTitle> Доставлены</StyledTitle>
                        <span>54 000 с</span>
                     </DivBlockInner>
                     {show.que && <img src={Vector2Arrow} alt="" />}
                     {!show.que && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.que && (
                     <CardStyled>
                        {data.map((data) => {
                           return (
                              <div key={data.id}>
                                 <Card
                                    id={data.id}
                                    action={data.discount}
                                    img={data.image}
                                    status={data.stock}
                                    title={data.model}
                                    rating={data.average}
                                    actualprice={data.afterDiscount}
                                    noneactualprice={data.beforeDiscount}
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
                        <h1>26.03.2021</h1>
                        <h2> № 1521751218</h2>
                        <StyledTitle> Доставлены</StyledTitle>
                        <span>54 000 с</span>
                     </DivBlockInner>
                     {show.min && <img src={Vector2Arrow} alt="" />}
                     {!show.min && <img src={VectorArrow} alt="" />}
                  </DivBlock>

                  {show.min && (
                     <AnswersTitle>
                        {data.map((data) => {
                           return (
                              <div key={data.id}>
                                 <Card
                                    id={data.id}
                                    action={data.discount}
                                    img={data.image}
                                    status={data.stock}
                                    title={data.model}
                                    rating={data.average}
                                    actualprice={data.afterDiscount}
                                    noneactualprice={data.beforeDiscount}
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
                        <h1>26.03.2021</h1>
                        <h2> № 1521751218</h2>
                        <H3> Ожидает оплаты</H3>
                        <span>54 000 с</span>
                     </DivBlockInner>
                     {show.model && <img src={Vector2Arrow} alt="" />}
                     {!show.model && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.model && (
                     <AnswersTitle>
                        {data.map((data) => {
                           return (
                              <div key={data.id}>
                                 <Card
                                    id={data.id}
                                    action={data.discount}
                                    img={data.image}
                                    status={data.stock}
                                    title={data.model}
                                    rating={data.average}
                                    actualprice={data.afterDiscount}
                                    noneactualprice={data.beforeDiscount}
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
                        <h1>26.03.2021</h1>
                        <h2> № 1521751218</h2>
                        <StyledH5> В обработке</StyledH5>
                        <span>54 000 с</span>
                     </DivBlockInner>
                     {show.city && <img src={Vector2Arrow} alt="" />}
                     {!show.city && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.city && (
                     <AnswersTitle>
                        {data.map((data) => {
                           return (
                              <div key={data.id}>
                                 <Card
                                    id={data.id}
                                    action={data.discount}
                                    img={data.image}
                                    status={data.stock}
                                    title={data.model}
                                    rating={data.average}
                                    actualprice={data.afterDiscount}
                                    noneactualprice={data.beforeDiscount}
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
                        <h1>26.03.2021</h1>
                        <h2> № 1521751218</h2>
                        <StyledH4> Курьер в пути</StyledH4>
                        <span>54 000 с</span>
                     </DivBlockInner>
                     {show.delivery && <img src={Vector2Arrow} alt="" />}
                     {!show.delivery && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.delivery && (
                     <AnswersTitle>
                        {data.map((data) => {
                           return (
                              <div key={data.id}>
                                 <Card
                                    id={data.id}
                                    action={data.discount}
                                    img={data.image}
                                    status={data.stock}
                                    title={data.model}
                                    rating={data.average}
                                    actualprice={data.afterDiscount}
                                    noneactualprice={data.beforeDiscount}
                                 />
                              </div>
                           )
                        })}
                     </AnswersTitle>
                  )}
               </Div>
            </>
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
   /* margin: 120px 0px 0px 0px; */
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
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 120px 0px 120px 0px;
`
const StyledComponent = styled('div')`
   width: 466px;
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
   text-transform: capitalize;
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
