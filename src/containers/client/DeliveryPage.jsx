import React from 'react'

import { styled } from '@mui/material'

import VectorCard from '../../assets/icons/VectorCard.svg'
import VectorCart from '../../assets/icons/VectorCart.svg'
import VectorDeliv from '../../assets/icons/VectorDeliv.svg'
import VectorMoney from '../../assets/icons/VectorMoney.svg'
import VectorPort from '../../assets/icons/VectorPort.svg'
import BreadCrumbs from '../../components/UI/Breadcrumbs'

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
            <DeliveryCity>
               Город доставки <b>Бишкек</b>
            </DeliveryCity>
            <Delivery>
               <About>
                  <div className="block">
                     <Icons src={VectorDeliv} alt="delivery" />
                     <b>Самовывоз со склада </b>
                  </div>
                  <div className="description">
                     <Text>Забрать в течение 14 дней</Text>
                  </div>
                  <AfterBlock>
                     <Icons src={VectorPort} alt="port" />
                     <Text>Предоплата не требуется</Text>
                  </AfterBlock>
               </About>
               <About>
                  <div className="block">
                     <Icons src={VectorDeliv} alt="delivery" />
                     <b>Самовывоз со склада</b>
                  </div>
                  <div className="description">
                     <Text> Забрать в течение 14 дней</Text>
                  </div>
                  <AfterBlock>
                     <Icons src={VectorPort} alt="port" />
                     <Text>Предоплата не требуется </Text>
                  </AfterBlock>
               </About>
               <About>
                  <div className="block">
                     <Icons src={VectorDeliv} alt="delivery" />
                     <b> Доставка</b>
                     <div className="description">
                        <Text>
                           По городу 200сом, по регионам Бесплатная доставка при
                           покупках свыше — 10 000с.
                        </Text>
                     </div>
                  </div>
                  <AfterBlock>
                     <Icons src={VectorPort} alt="" />
                     <Text>Предоплата не требуется </Text>
                  </AfterBlock>
               </About>
            </Delivery>
            <h3> Способы оплаты</h3>
            <MinContainer>
               <Cart>
                  <AfterBlock>
                     <WhiteBackground>
                        <img src={VectorCart} alt="" />
                     </WhiteBackground>
                     <p> Оплата картой онлайн</p>
                  </AfterBlock>
               </Cart>
               <Cart>
                  <div>
                     <WhiteBackground>
                        <img src={VectorMoney} alt="" />
                     </WhiteBackground>
                     <p> Наличными при получении</p>
                  </div>
               </Cart>
               <Cart>
                  <div>
                     <WhiteBackground>
                        <img src={VectorCard} alt="" />
                     </WhiteBackground>
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
   height: 203px;
   display: flex;
   justify-content: flex-start;
   gap: 70px;
   margin-bottom: 40px;
`
const About = styled('div')`
   width: 311px;
   display: flex;
   flex-direction: column;
   align-items: center;

   .block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 5px 0px;
      align-items: center;
   }

   .description {
      justify-content: center;
      display: flex;
   }
`
const Icons = styled('img')`
   width: 30px;
   height: auto;
`
const Text = styled('p')`
   width: 273px;
   padding: 10px 10px;
   display: flex;
   justify-content: center;
`

const Container = styled('div')`
   margin: 20px auto;
`
const DeliveryCity = styled('p')`
   padding: 30px 0px;
   font-size: 18px;
   font-weight: 400px;
`
const MinContainer = styled('div')`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   margin-top: 30px;
   margin-left: 50px;

   & div {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 5px 0px;
      align-items: center;
      flex-direction: row;
   }
`
const Cart = styled('div')`
   width: 240px;
   & p {
      width: 160px;
      padding: 10px 10px;
   }
`

const WhiteBackground = styled('div')`
   background: white;
   width: 50px;
   height: 50px;
   padding: 12px;
   border-radius: 50%;
   margin: 0;
`
const AfterBlock = styled('div')`
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-top: 20px;
`
