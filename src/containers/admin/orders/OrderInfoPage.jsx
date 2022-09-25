import styled from 'styled-components'

import BreadCrumbs from '../../../components/UI/Breadcrumbs'

const paths = [
   {
      name: 'Заказы',
      path: '/orders',
   },
   {
      name: 'Айзат Жумагулова',
      path: '/:orderId',
   },
]

const OrderInfoPage = () => {
   return (
      <Container>
         <BreadCrumbs paths={paths} />
         <HeaderBrand>
            <h1>Оплата заказа 000000-455247</h1>
         </HeaderBrand>
         <Contents>
            <LeftContent>
               <LeftContentInfoCards>
                  <InsideRight>
                     <p>Наименование:</p>
                     <p>Кол-во товара:</p>
                     <p>Общая сумма заказа:</p>
                     <p>Скидка:</p>
                     <p>Сумма скидки:</p>
                  </InsideRight>
                  <InsideLeft>
                     <p>Samsung Galaxy S21 128gb синий 9(MLP3RU)</p>
                     <p>1шт</p>
                     <p>60 000 с</p>
                     <p>15%</p>
                     <p>9 000 с</p>
                  </InsideLeft>
               </LeftContentInfoCards>
               <hr />
               <TotalPrice>
                  <p>
                     Итого: <span>51 000 c</span>
                  </p>
               </TotalPrice>
            </LeftContent>
            <RightContent>
               <HeadTitle>Информация о заказе</HeadTitle>
               <hr />
               <RightContentInfoCards>
                  <InsideRight>
                     <p>Заказ №:</p>
                     <p>Состояние:</p>
                     <p>Контактный телефон:</p>
                     <p>Адрес доставки:</p>
                  </InsideRight>
                  <InsideLeft>
                     <p>000000-455247</p>
                     <p>Завершено</p>
                     <p>+996 (400) 00-00-00</p>
                     <p>г.Бишкек, Токтоналиева, 145/7 кв 24, дом 5</p>
                  </InsideLeft>
               </RightContentInfoCards>
            </RightContent>
         </Contents>
      </Container>
   )
}

export default OrderInfoPage

const Container = styled.div`
   height: auto;
   margin: 30px auto;
`
const HeaderBrand = styled.div`
   border-bottom: 1px solid #cdcdcd;
   margin: 30px 0px;
   & h1 {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 110%;
      color: #292929;
      margin-bottom: 20px;
   }
`
const LeftContent = styled.div`
   & hr {
      border: 1px solid #cdcdcd;
   }
`

const RightContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px;
   width: 450px;
   height: 290px;
   border: 1px solid #cdcdcd;
   border-radius: 4px;
   padding: 30px;
   & hr {
      border: 1px solid #cdcdcd;
   }
`

const Contents = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   gap: 350px;
`
const TotalPrice = styled.div`
   justify-content: flex-end;
   display: flex;
   margin-top: 10px;
   color: #292929;
   font-size: 16px;
   & p {
      font-weight: 600;
      line-height: 19px;
   }
   & span {
      font-weight: 400;
      margin-left: 10px;
   }
`

const LeftContentInfoCards = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   margin-bottom: 20px;
`
const RightContentInfoCards = styled(LeftContentInfoCards)`
   margin-bottom: 0;
`
const InsideRight = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 50px;
   gap: 13px;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   color: #292929;
`

const InsideLeft = styled.div`
   display: flex;
   flex-direction: column;
   gap: 13px;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #292929;
`

const HeadTitle = styled.p`
   font-weight: 500;
   font-size: 20px;
   line-height: 120%;
   color: #292929;
`

/* <ul>
                     <li>Наименование:</li>
                     <li>Кол-во товара:</li>
                     <li>Общая сумма заказа:</li>
                     <li>Скидка:</li>
                     <li>Сумма скидки</li>
                  </ul> */
