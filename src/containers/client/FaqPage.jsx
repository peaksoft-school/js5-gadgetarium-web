import React, { useState } from 'react'

import { styled } from '@mui/material'

import VectorArrow2 from '../../assets/icons/Vector 2 (1).svg'
import VectorArrow from '../../assets/icons/VectorArrow.svg'
import BreadCrumbs from '../../components/UI/Breadcrumbs'

const pathsArray = [
   {
      path: '/',
      name: 'Главная',
   },
   {
      path: '/about',
      name: 'FAQ',
   },
]
const FaqPage = () => {
   const [show, setShow] = useState({
      que: null,
      min: null,
      model: null,
      city: null,
      delivery: null,
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
   return (
      <div>
         <BreadCrumbs paths={pathsArray} />
         <div>
            <Title>
               <h2> FAQ</h2>
            </Title>
            <Container>
               <h3> Часто задаваемые вопросы</h3>
               <Div onClick={showFirst}>
                  <DivBlock>
                     <DivBlockInner>
                        <Numbers>
                           <p> 1</p>
                        </Numbers>
                        <p>Как можно оплатить заказ?</p>
                     </DivBlockInner>
                     {show.que && <img src={VectorArrow2} alt="" />}
                     {!show.que && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.que && (
                     <AnswersTitle>
                        Ответ: Оплату можно совершить: Оплата картой онлайн,
                        наличными при получении,картой при получении
                     </AnswersTitle>
                  )}
               </Div>
               <Div onClick={showSecond}>
                  <DivBlock>
                     <DivBlockInner>
                        <Numbers>
                           <p> 2</p>
                        </Numbers>
                        <p>Какой мининимальный заказ?</p>
                     </DivBlockInner>
                     {show.min && <img src={VectorArrow2} alt="" />}
                     {!show.min && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.min && (
                     <AnswersTitle>
                        Urna aliquet dignissim pharetra consectetur commodo
                        pellentesque at tellus. Odio eget scelerisque faucibus
                        ut. Cras amet, diam vel, sollicitudin gravida quis
                        augue. Bibendum et nulla accumsan sollicitudin aliquet
                        velit viverra risus. Eget molestie enim quisque sodales
                        habitant nulla tincidunt. Ullamcorper tincidunt purus
                        sed facilisis.
                     </AnswersTitle>
                  )}
               </Div>
               <Div onClick={showThird}>
                  <DivBlock>
                     <DivBlockInner>
                        <Numbers>
                           <p> 3</p>
                        </Numbers>
                        <p> Какие еще модели есть?</p>
                     </DivBlockInner>
                     {show.model && <img src={VectorArrow2} alt="" />}
                     {!show.model && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.model && (
                     <AnswersTitle>
                        Urna aliquet dignissim pharetra consectetur commodo
                        pellentesque at tellus. Odio eget scelerisque faucibus
                        ut. Cras amet, diam vel, sollicitudin gravida quis
                        augue. Bibendum et nulla accumsan sollicitudin aliquet
                        velit viverra risus. Eget molestie enim quisque sodales
                        habitant nulla tincidunt. Ullamcorper tincidunt purus
                        sed facilisis. Ullamcorper aliquam gravida aliquet felis
                        iaculis urna diam dui id. Consectetur in sagittis,
                        sagittis, diam fames ac morbi convallis. Convallis vitae
                        vel luctus erat tempus.
                     </AnswersTitle>
                  )}
               </Div>
               <Div onClick={showFourth}>
                  <DivBlock>
                     <DivBlockInner>
                        <Numbers>
                           <p> 4</p>
                        </Numbers>
                        <p>В других городах есть еще филиалы?</p>
                     </DivBlockInner>
                     {show.city && <img src={VectorArrow2} alt="" />}
                     {!show.city && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.city && (
                     <AnswersTitle>
                        Urna aliquet dignissim pharetra consectetur commodo
                        pellentesque at tellus. Odio eget scelerisque faucibus
                        ut. Cras amet, diam vel, sollicitudin gravida quis
                        augue.
                     </AnswersTitle>
                  )}
               </Div>
               <Div onClick={showFifth}>
                  <DivBlock>
                     <DivBlockInner>
                        <Numbers>
                           <p> 5</p>
                        </Numbers>
                        <p>У вас есть доставка?</p>
                     </DivBlockInner>
                     {show.delivery && <img src={VectorArrow2} alt="" />}
                     {!show.delivery && <img src={VectorArrow} alt="" />}
                  </DivBlock>
                  {show.delivery && (
                     <AnswersTitle>
                        Urna aliquet dignissim pharetra consectetur commodo
                        pellentesque at tellus. Odio eget scelerisque faucibus
                        ut.
                     </AnswersTitle>
                  )}
               </Div>
            </Container>
         </div>
      </div>
   )
}
export default FaqPage
const DivBlockInner = styled('div')`
   display: flex;
   align-items: center;
   align-self: flex-start;
   p {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin-left: 20px;
   }
`
const DivBlock = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 1100px;
`
const Title = styled('div')`
   padding: 30px 0px;
   border-bottom: 1px solid #cdcdcd;
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
`
const Container = styled('div')`
   margin: auto;
   margin-top: 120px;
   width: 1010px;
   & h3 {
      width: 400px;
      margin: auto;
      padding: 30px;
   }
`
const Div = styled('div')`
   width: 1000px;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   width: 1010px;
   border: 1px solid #cdcdcd;
   margin-top: 15px;
   padding: 20px 20px 20px 20px;
   cursor: pointer;
   & p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }
`
const AnswersTitle = styled('p')`
   padding: 20px 0 20px 80px;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
`
const Numbers = styled('div')`
   width: 40px;
   height: 40px;
   border-radius: 50px;
   background-color: #f0d9ec;
   color: #cb11ab;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   :hover {
      background-color: #cb11ab;
      color: #ffffff;
   }
   p {
      font-weight: 700px;
      font-style: normal;
      font-size: 20px;
      line-height: 30px;
      margin-right: 18px;
   }
`
