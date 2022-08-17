import React from 'react'

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Products = () => {
   return (
      <Container>
         <Link to="addproducts">
            <Button variant="outlined" color="primary">
               Создать товар
            </Button>
         </Link>
      </Container>
   )
}

export default Products

const Container = styled.div`
   margin: 146px 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
`
