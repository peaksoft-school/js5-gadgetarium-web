import React from 'react'

import styled from 'styled-components'

import Infographic from '../../components/admin/adminUI/Infographic'

const ReviewsPage = () => {
   return (
      <div>
         <Container>
            <SearchInput placeholder="Поиск по артикулу или ..." />
            <StyledButtonContainer> </StyledButtonContainer>
            <Infographic />
         </Container>
      </div>
   )
}

export default ReviewsPage

const SearchInput = styled.input`
   width: 559px;
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
`
