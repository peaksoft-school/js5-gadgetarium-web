/* eslint-disable no-unused-vars */
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

import SamsungBrand from '../../../assets/images/brand.png'
import Samsung from '../../../assets/images/SamsungForSlider.png'
import BottomContent from '../../../components/admin/innerPageContent/BottomContent'
import ProductContent from '../../../components/admin/innerPageContent/ProductContent'
import BreadCrumbs from '../../../components/UI/Breadcrumbs'
import { getProductById } from '../../../store/actions/products/productsActions'

const paths = [
   {
      name: 'Товары',
      path: '/',
   },
   {
      name: 'Galaxy S21 5G',
      path: '/:productName',
   },
]

const images = [
   { images: Samsung, id: 2 },
   { images: Samsung, id: 3 },
   { images: Samsung, id: 4 },
]

const override = {
   display: 'block',
   margin: '150px auto 0 auto',
}

const ProductInnerPage = () => {
   const dispatch = useDispatch()
   const { product, loading } = useSelector((state) => state.adminPanel)
   const { productId } = useParams()

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
   return (
      <Container>
         <BreadCrumbs paths={paths} />
         <HeaderBrand>
            <img src={SamsungBrand} alt="samsung" />
         </HeaderBrand>
         <ProductContent images={images} />
         <BottomContent />
      </Container>
   )
}
export default ProductInnerPage

const Container = styled.div`
   height: auto;
   margin: 30px auto;
`
const HeaderBrand = styled.div`
   border-bottom: 1px solid #cdcdcd;
   margin: 30px 0px;
   & img {
      width: 141px;
      height: 28px;
      margin: 20px 0px;
   }
`
