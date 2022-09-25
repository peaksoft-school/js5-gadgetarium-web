import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'

import { getSingleProduct } from '../../../store/actions/CatalogActions'

import Product from './Product'
import ProductAbout from './ProductAbout'

const ProductInner = () => {
   const { category, productId } = useParams()
   const dispatch = useDispatch()
   const single = useSelector((state) => state.catalogSlice.single)
   useEffect(() => {
      dispatch(getSingleProduct(productId))
   }, [])
   const paths = [
      {
         name: 'Главная',
         path: '/',
      },
      {
         name: category,
         path: '/',
      },
      {
         name: single?.productName.toString(),
         path: single?.productName.toString(),
      },
   ]
   return (
      <Container>
         <Product
            article={single?.article}
            paths={paths}
            productImages={single?.productImages}
            brandIcon={single?.brandImage}
            ProductName={single?.productName}
            available={single?.quantity}
            stock={single?.stock}
            color={single?.color}
            price={single?.price}
            screen="53 (2340×1080) IPS"
            date="Март 2022"
            os="Android 12"
            memory="128GB"
            guarantee={single?.guarantee}
            proccessor="Exynos 1280 (5 nm)"
            characters={single?.characters}
         />
         <ProductAbout
            id={productId}
            video={single?.videoReview}
            name={single?.productName}
            description={single?.description}
            character={single?.characters}
         />
      </Container>
   )
}
export default ProductInner
const Container = styled.div`
   /* min-width: 1230px; */
   height: 100%;
   margin: 30px auto;
`
