import { useEffect, useState } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import FirstStage from '../../../components/admin/stages/FirstStage'
import SecondStage from '../../../components/admin/stages/SecondStage'
import ThirdStage from '../../../components/admin/stages/ThirdStage'
import Breadcrumbs from '../../../components/UI/Bredcrumbs'
import Stepper from '../../../components/UI/Stepper'

const paths = [
   {
      path: '/admin',
      name: 'Товары',
   },
   {
      path: '/admin/add-product',
      name: 'Добавление товара',
   },
]

const steps = [
   'Добавление товара',
   'Установка цены и колчичества товара',
   'Описание и обзор',
]

const AddProductsPage = () => {
   const location = useLocation()
   const stage = location.pathname.split('/').at(-1)
   const [step, setStep] = useState(0)

   // eslint-disable-next-line consistent-return
   useEffect(() => {
      switch (stage) {
         case 'addproducts':
            return setStep(0)
         case 'stage2':
            return setStep(1)
         case 'stage3':
            return setStep(2)
         default:
            break
      }
   }, [stage])

   return (
      <>
         <Breadcrumbs paths={paths} />
         <AddProductsTitle>Добавление товара</AddProductsTitle>
         <StyledHr />
         <StepperContainer>
            <Stepper currentStep={step} steps={steps} />
         </StepperContainer>
         <Routes>
            <Route index element={<FirstStage />} />
            <Route path="stage2" element={<SecondStage />} />
            <Route path="stage3" element={<ThirdStage />} />
         </Routes>
      </>
   )
}

export default AddProductsPage

const AddProductsTitle = styled.h1`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
   display: flex;
   align-items: flex-end;
   color: #292929;
   margin-top: 30px;
   margin-bottom: 20px;
`
const StyledHr = styled.hr`
   border: 1px solid #cdcdcd;
   margin-bottom: 40px;
`
const StepperContainer = styled.div`
   width: 1023px;
   margin-bottom: 60px;
`
