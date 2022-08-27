import styled from 'styled-components'

import samsung from '../../../assets/icons/samsugn.svg'

import image from './image 33.png'
import Product from './Product'
import ProductAbout from './ProductAbout'

const ProductInner = () => {
   const images = [
      { images: image, id: 2 },
      { images: image, id: 3 },
      { images: image, id: 4 },
   ]
   const paths = [
      {
         name: 'Главная',
         path: 'Главная',
      },
      {
         name: 'Смартфоны',
         path: 'Смартфоны',
      },
      {
         name: 'Galaxy S21 5G',
         path: 'Galaxy S21 5G',
      },
   ]
   return (
      <Container>
         <Product
            paths={paths}
            productImages={images}
            brandIcon={samsung}
            ProductName="Galaxy S21 5G"
            available="34"
            color="Black"
            price="54 770 c"
            screen="53 (2340×1080) IPS"
            date="Март 2022"
            os="Android 12"
            memory="128GB"
            guarantee="12"
            proccessor="Exynos 1280 (5 nm)"
         />
         <ProductAbout />
      </Container>
   )
}
export default ProductInner
const Container = styled.div`
   width: 1530px;
   height: 100%;
   margin: 30px auto;
`
