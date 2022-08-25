import React from 'react'

import { styled } from '@mui/material'

import VectorCard from '../../assets/icons/VectorCard.svg'
import VectorCart from '../../assets/icons/VectorCart.svg'
import VectorDeliv from '../../assets/icons/VectorDeliv.svg'
import VectorMoney from '../../assets/icons/VectorMoney.svg'
import VectorPort from '../../assets/icons/VectorPort.svg'
import BreadCrumbs from '../../components/UI/Bredcrumbs'

const pathsArray = [
   {
      path: '/',
      name: 'Главная',
   },
   {
      path: '/about',
      name: 'Доставка',
   },
]

const DeliveryPage = () => {
   return (
      <div>
         <BreadCrumbs paths={pathsArray} />
         <Container>
            <Title>
               <h2> Доставка</h2>
            </Title>
            <h3>Город доставки Бишкек</h3>
            <Delivery>
               <About>
                  <div>
                     <Icons src={VectorDeliv} alt="" />
                     <Text>Самовывоз со склада Забрать в течение 14 дней</Text>
                  </div>
                  <div>
                     <Icons src={VectorPort} alt="" />
                     <Text>Предоплата не требуется</Text>
                  </div>
               </About>
               <About>
                  <div>
                     <Icons src={VectorDeliv} alt="" />
                     <Text>Самовывоз со склада Забрать в течение 14 дней</Text>
                  </div>
                  <div>
                     <Icons src={VectorPort} alt="" />
                     <Text>Предоплата не требуется </Text>
                  </div>
               </About>
               <About>
                  <div>
                     <Icons src={VectorDeliv} alt="" />
                     <Text>
                        Доставка По городу 200сом, по регионам Бесплатная
                        доставка при покупках свыше — 10 000с.
                     </Text>
                  </div>
                  <div>
                     <Icons src={VectorPort} alt="" />
                     <Text>Предоплата не требуется </Text>
                  </div>
               </About>
            </Delivery>
            <h3> Способы оплаты</h3>
            <MinContainer>
               <Cart>
                  <div>
                     <Icons src={VectorCart} alt="" />
                     <p> Оплата картой онлайн</p>
                  </div>
               </Cart>
               <Cart>
                  <div>
                     <Icons src={VectorMoney} alt="" />
                     <p> Наличными при получении</p>
                  </div>
               </Cart>
               <Cart>
                  <div>
                     <Icons src={VectorCard} alt="" />
                     <p> Картой при получении</p>
                  </div>
               </Cart>
            </MinContainer>
         </Container>
      </div>
   )
}

export default DeliveryPage

const Title = styled('div')`
   padding: 30px 0px;
   border-bottom: 1px solid #cdcdcd;
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
`
const Delivery = styled('div')`
   width: 1300px;
   height: 203px;
   display: flex;
   justify-content: space-between;
   margin: 30px 0px;
`
const About = styled('div')`
   width: 311px;

   & div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 5px 0px;
   }
`
const Icons = styled('img')`
   width: 30px;
   height: auto;
`
const Text = styled('p')`
   width: 273px;
   padding: 10px 10px;
`

const Container = styled('div')`
   width: 1920px;
   margin: 20px auto;
   & h3 {
      padding: 30px 0px;
   }
`
const MinContainer = styled('div')`
   width: 850px;
   height: 50px;
   display: flex;
   justify-content: space-between;

   & div {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 5px 0px;
   }
`
const Cart = styled('div')`
   width: 240px;
   & p {
      width: 160px;
      padding: 10px 10px;
   }
`
