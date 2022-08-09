import React from 'react'

import styled from 'styled-components'

import Breadcrumbs from '../../../components/UI/Bredcrumbs'

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

const AddProducts = () => {
   return (
      <Container>
         <Breadcrumbs paths={paths} />
         <AddProductsTitle> Добавление товара</AddProductsTitle>
         <StyledHr />
      </Container>
   )
}

export default AddProducts

const Container = styled.div`
   margin: 146px 100px;
`
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
