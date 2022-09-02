import React from 'react'

import styled from 'styled-components'

import BreadCrumbs from '../../../components/UI/Bredcrumbs'
import Button from '../../../components/UI/Button'
import CardRating from '../../../components/UI/card/CardRating'
import Counter from '../../../components/UI/Counter'
import PreviewSlider from '../../../components/UI/PreviewSlider'
import Sale from '../../../components/UI/SALE'

const Product = (props) => {
   const count = (val) => {
      console.log(val)
   }
   return (
      <Container>
         <BreadCrumbs paths={props.paths} />
         <Samsung>
            <img src={props.brandIcon} alt="samsung" />
         </Samsung>
         <Content>
            <Slide>
               <PreviewSlider images={props.productImages} />
            </Slide>
            <Info>
               <h1>{props.ProductName}</h1>
               <section>
                  <p>В наличии {props.available}</p>
                  <span>Артикул: 030696</span>
                  <div>
                     <CardRating />
                  </div>
               </section>
               <Infos>
                  <Color>
                     <p>Цвет товара:</p>
                     <p>{props.color}</p>
                  </Color>
                  <Counter count={count} />
                  <Prices>
                     <Price>
                        <Sale salePrice="-10%" />
                        <h1>{props.price}</h1>
                        <p>54 770 c</p>
                     </Price>
                     <Buttons>
                        <Button
                           style={{
                              width: '24px',
                              border: '1px solid grey',
                           }}
                           variant="outlined"
                        >
                           <p>&#10084;</p>
                        </Button>
                        <Button style={{ width: '196px' }} variant="contained">
                           Корзина
                        </Button>
                     </Buttons>
                  </Prices>
               </Infos>
               <div>
                  <span>Коротко о товаре:</span>
                  <Short>
                     Экран............................................
                     <p>{props.screen}</p>
                  </Short>
                  <Short>
                     Цвет..............................................{' '}
                     <p>{props.color}</p>
                  </Short>
                  <Short>
                     Дата выпуска..............................
                     <p>{props.date}</p>
                  </Short>
                  <Short>
                     Операционная система............
                     <p>{props.os}</p>
                  </Short>
                  <Short>
                     Память.........................................
                     <p>{props.memory}</p>
                  </Short>
                  <Short>
                     Гарантия (месяцев)...................
                     <p>{props.guarantee}</p>
                  </Short>
                  <Short>
                     Процессор..................................
                     <p>{props.proccessor}</p>
                  </Short>
               </div>
            </Info>
         </Content>
      </Container>
   )
}

export default Product
const Short = styled.span`
   display: flex;
   margin: 10px 0px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   color: #91969e;
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #292929;
   }
`
const Prices = styled.div`
   width: 273px;
`
const Buttons = styled.div`
   width: inherit;
   display: flex;
   margin: 20px 0px;
   justify-content: space-around;
   & button p {
      font-size: 27px;
      color: #e20fbe;
   }
`
const Infos = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const Price = styled.div`
   display: flex;
   align-items: center;
   width: 250px;
   justify-content: space-between;
   padding-bottom: 15px;
   border-bottom: 1px solid rgba(133, 143, 164, 0.2);
   & h1 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
   }
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 135.94%;
      text-decoration-line: line-through;
      color: #909cb5;
   }
`
const Color = styled.div`
   & p {
      margin: 10px 0px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
   }
`
const Info = styled.div`
   width: 780px;
   & span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
   }
   & section {
      display: flex;
      border-bottom: 1px solid #cdcdcd;
      justify-content: space-between;
      margin: 20px 0px;
      padding-bottom: 20px;
      & p {
         font-family: 'Inter';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 19px;
         color: #2fc509;
      }
   }
`
const Slide = styled.div`
   & div {
      width: 530px;
      height: auto;
   }
`
const Container = styled.div`
   width: 1530px;
   height: auto;
   margin: 30px auto;
`
const Samsung = styled.div`
   border-bottom: 1px solid #cdcdcd;
   margin: 30px 0px;
   & img {
      width: 141px;
      height: 28px;
      margin: 20px 0px;
   }
`
const Content = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`
