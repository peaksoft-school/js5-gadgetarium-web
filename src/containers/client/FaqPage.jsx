import React, { useState } from 'react'

import { styled } from '@mui/material'

import VectorArrow from '../../assets/icons/VectorArrow.svg'
import Ellise1 from '../../assets/images/Ellipse1.svg'
import Ellipse2 from '../../assets/images/Ellipse2.svg'
import Ellipse3 from '../../assets/images/Ellipse3.svg'
import Ellipse4 from '../../assets/images/Ellipse4.svg'
import Ellipse5 from '../../assets/images/Ellipse5.svg'
import BreadCrumbs from '../../components/UI/Bredcrumbs'

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
                        <img src={Ellise1} alt="" />
                        <p>Как можно оплатить заказ?</p>
                     </DivBlockInner>
                     <img src={VectorArrow} alt="" />
                  </DivBlock>
                  {show.que && (
                     <AnswersTitle>
                        Urna aliquet dignissim pharetra consectetur commodo
                        pellentesque at tellus. Odio eget scelerisque faucibus
                        ut. Cras amet, diam vel, sollicitudin gravida quis
                        augue. Bibendum et nulla accumsan sollicitudin aliquet
                        velit viverra risus. Eget molestie enim quisque sodales
                        habitant nulla tincidunt. Ullamcorper tincidunt purus
                        sed facilisis. Ullamcorper aliquam gravida aliquet felis
                        iaculis urna diam dui id.
                     </AnswersTitle>
                  )}
               </Div>
               <Div onClick={showSecond}>
                  <DivBlock>
                     <DivBlockInner>
                        <img src={Ellipse2} alt="" />
                        <p>Какой мининимальный заказ?</p>
                     </DivBlockInner>
                     <img src={VectorArrow} alt="" />
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
                        <img src={Ellipse3} alt="" />
                        <p> Какие еще модели есть?</p>
                     </DivBlockInner>
                     <img src={VectorArrow} alt="" />
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
                        <img src={Ellipse4} alt="" />
                        <p>В других городах есть еще филиалы?</p>
                     </DivBlockInner>
                     <img src={VectorArrow} alt="" />
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
                        <img src={Ellipse5} alt="" />
                        <p>У вас есть доставка?</p>
                     </DivBlockInner>
                     <img src={VectorArrow} alt="" />
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
