import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Infographic from '../../../components/admin/Infographic'
import Button from '../../../components/UI/Button'

const ProductsPage = () => {
   return (
      <Container>
         <FirsContentContainer>
            <TopContentContainer>
               <SearchInput placeholder="Поиск по артикулу или ..." />
               <StyledButtonContainer>
                  <Link to="addproducts">
                     <Button variant="outlined" width="184px" height="43px">
                        Добавить товар
                     </Button>
                  </Link>
                  <Button variant="outlined" width="184px" height="43px">
                     Создать скидку
                  </Button>
               </StyledButtonContainer>
            </TopContentContainer>
            <TabContainer>
               <nav>
                  <Link to="all-products">Все товары</Link>
                  <Link to="on-sale">В продаже</Link>
               </nav>
            </TabContainer>
         </FirsContentContainer>
         <SecondContentContainer>
            <Infographic />
         </SecondContentContainer>
      </Container>
   )
}

export default ProductsPage

const SearchInput = styled.input`
   width: 450px;
   height: 40px;
   background: transparent;
   padding: 10px 18px;
   color: #91969e;
   font-size: 16px;
   border: 1px solid #cdcdcd;
   border-radius: 10px;
   :focus {
      border: 1x solid white;
      outline: none;
   }
   ::placeholder {
      color: #91969e;
   }
`
const Container = styled.div`
   display: flex;
   justify-content: space-between;
`
const StyledButtonContainer = styled.div`
   display: flex;
   gap: 20px;
   height: 45px;
   & a {
      text-decoration: none;
   }
`
const FirsContentContainer = styled.div`
   width: 80%;
   padding-right: 85px;
`
const TopContentContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const SecondContentContainer = styled.div`
   width: 22%;
`
const TabContainer = styled.div`
   margin-top: 40px;
`
