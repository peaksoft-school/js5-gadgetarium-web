import styled from 'styled-components'

import delievry from '../../../assets/icons/delievry.svg'
import online from '../../../assets/icons/online.svg'
import purse from '../../../assets/icons/Purse.svg'
import cash from '../../../assets/icons/наличным.svg'
import get from '../../../assets/icons/приполучении.svg'

const Delivery = () => {
   return (
      <Container>
         <Title>Доставка</Title>
         <P>Город доставки Бишкек</P>
         <Content>
            <div>
               <Div>
                  <img src={delievry} alt="#" />
                  <div>
                     <strong>Самовывоз со склада</strong>
                     <p>Забрать в течение 14 дней</p>
                  </div>
               </Div>
               <Div>
                  <img src={purse} alt="# " />
                  <p>Предоплата не требуется</p>
               </Div>
            </div>
            <Zero>0 с</Zero>
            <div>
               <Div>
                  <img src={delievry} alt="#" />
                  <div>
                     <strong>Самовывоз из магазина</strong>
                     <p>Забрать в течение 14 дней</p>
                  </div>
               </Div>
               <Div>
                  <img src={purse} alt="# " />
                  <p>Предоплата не требуется</p>
               </Div>
            </div>
            <Zero>0 c</Zero>
            <div>
               <Div>
                  <img src={delievry} alt="#" />
                  <div>
                     <strong>Доставка</strong>
                     <p>Бесплатная доставка при покупках свыше — 10 000с.</p>
                  </div>
               </Div>
               <Div>
                  <img src={purse} alt="# " />
                  <p>Предоплата не требуется</p>
               </Div>
            </div>
            <Zero>от 200 с</Zero>
         </Content>
         <h3>Способы оплаты</h3>
         <Content2>
            <Div2>
               <img src={online} alt=";" />
               <div>
                  <p>Оплата картой онлайн</p>
               </div>
            </Div2>
            <Div2>
               <img src={cash} alt=";" />
               <div>
                  <p>Наличными при получении</p>
               </div>
            </Div2>
            <Div2>
               <img src={get} alt=";" />
               <div>
                  <p>Картой при получении</p>
               </div>
            </Div2>
         </Content2>
      </Container>
   )
}
export default Delivery
const Div2 = styled.div`
   display: flex;
   width: 240px;
   align-items: flex-start;
   margin: 10px 0px;
   & strong {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
   }
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   & img {
      width: 26px;
      height: auto;
      margin-right: 10px;
   }
   & div {
      width: 273px;
   }
`
const Content2 = styled.div`
   display: flex;
   margin: 30px 0px;
   &h3 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 120%;
   }
`
const Zero = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 24px;
   /* text-align: right; */
`
const Content = styled.div`
   display: flex;
   margin: 30px 0px;
   justify-content: space-between;
`
const Div = styled.div`
   display: flex;
   align-items: flex-start;
   margin: 10px 0px;
   & strong {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
   }
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   & img {
      width: 26px;
      height: auto;
      margin-right: 10px;
   }
   & div {
      width: 273px;
   }
`
const Container = styled.div``
const Title = styled.h1`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
   color: #292929;
   margin: 30px 0px;
`
const P = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 150%;
   color: #292929;
`
