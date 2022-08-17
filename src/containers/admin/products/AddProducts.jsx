import React from 'react'

import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
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

const AddProducts = () => {
   const { activeStep } = useSelector((state) => state.form)
   return (
      <>
         <Breadcrumbs paths={paths} />
         <AddProductsTitle>Добавление товара</AddProductsTitle>
         <StyledHr />
         <StepperContainer>
            <Stepper currentStep={activeStep} steps={steps} />
         </StepperContainer>
         <Routes>
            <Route index element={<FirstStage />} />
            <Route path="/stage2" element={<SecondStage />} />
            <Route path="/stage3" element={<ThirdStage />} />
         </Routes>
      </>
   )
}

export default AddProducts

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
