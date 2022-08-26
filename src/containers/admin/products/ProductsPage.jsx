import React from 'react'

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
   return (
      <div>
         <Link to="addproducts">
            <Button variant="outlined" color="primary">
               Создать товар
            </Button>
         </Link>
      </div>
   )
}

export default ProductsPage
