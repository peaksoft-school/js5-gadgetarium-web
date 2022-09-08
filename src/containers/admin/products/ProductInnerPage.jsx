import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

import { getProductById } from '../../../store/actions/products/productsActions'

const override = {
   display: 'block',
   margin: '150px auto 0 auto',
}

const ProductInnerPage = () => {
   const dispatch = useDispatch()
   const { product, loading } = useSelector((state) => state.adminPanel)
   const { productId } = useParams()

   useEffect(() => {
      if (productId) {
         dispatch(getProductById(productId))
      }
   }, [productId])
   console.log(product)
   if (loading) {
      return (
         <RingLoader
            color="#cb11ab"
            cssOverride={override}
            speedMultiplier={1.2}
            size={120}
         />
      )
   }
   return <Container>ProductInnerPage</Container>
}

export default ProductInnerPage

const Container = styled.div``
