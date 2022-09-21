import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

import SamsungBrand from '../../../assets/images/brand.png'
import BottomContent from '../../../components/admin/innerPageContent/BottomContent'
import ProductContent from '../../../components/admin/innerPageContent/ProductContent'
import BreadCrumbs from '../../../components/UI/Breadcrumbs'
import {
   deleteProductById,
   getProductById,
} from '../../../store/actions/products/productsActions'

const override = {
   display: 'block',
   height: '100vh',
   margin: '150px auto 0 auto',
}

const ProductInnerPage = () => {
   const dispatch = useDispatch()
   const { product, loading } = useSelector((state) => state.adminPanel)
   const { productId } = useParams()
   const navigate = useNavigate()

   const paths = [
      {
         name: 'Товары',
         path: '/admin/products',
      },
      {
         name: product.productName,
         path: '/:productName',
      },
   ]

   useEffect(() => {
      if (productId) {
         dispatch(getProductById(productId))
      }
   }, [productId])

   const handleDelete = () => {
      dispatch(deleteProductById({ productId, navigate }))
   }
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
            <img src={product.brandImage || SamsungBrand} alt="samsung" />
         </HeaderBrand>
         <ProductContent handleDelete={handleDelete} data={product} />
         <BottomContent data={product} />
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
      object-fit: contain;
      margin: 20px 0px;
   }
`
