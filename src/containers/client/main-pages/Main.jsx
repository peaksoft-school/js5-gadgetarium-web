import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Button from '../../../components/UI/Button'
import Card from '../../../components/UI/card/Card'
import Carousel from '../../../components/UI/Carousel'
import InfoCards from '../../../components/UI/InfoCards'
import {
   deleteProducts,
   postProducts,
} from '../../../store/actions/cartActions'
import {
   addToComparison,
   removeCompareProduct,
} from '../../../store/actions/comparisonActions'
import {
   getMainDiscountProduct,
   getMainNewProduct,
   getMainRecommendProduct,
} from '../../../store/actions/productActions'
import {
   addWishProducts,
   deleteWishProducts,
} from '../../../store/actions/wishListActions'

const MainPage = () => {
   const [size, setSize] = useState({
      new: 5,
      recommend: 5,
      discount: 5,
   })

   const { newProduct, discount, recommend } = useSelector(
      (state) => state.mainProducts
   )
   const { jwt, id } = useSelector((state) => state.auth.user)

   const dispatch = useDispatch()

   const compareProducts = (id, status) => {
      if (jwt) {
         if (status) {
            dispatch(removeCompareProduct({ productId: id }))
         } else {
            dispatch(addToComparison({ productId: id }))
         }
      } else {
         toast.error('Пожалуйста сначало авторизуйтесь')
      }
   }

   const addToFavorites = (productId, status) => {
      if (id) {
         if (status) {
            dispatch(deleteWishProducts({ id, productId }))
         } else {
            dispatch(addWishProducts({ id, productId }))
         }
      } else {
         toast.error('Пожалуйста сначало авторизуйтесь')
      }
   }
   const addProductsToCart = (productId, status) => {
      if (jwt) {
         if (status) {
            dispatch(deleteProducts({ productId }))
         } else {
            dispatch(postProducts({ productId }))
         }
      } else {
         toast.error('Пожалуйста сначало авторизуйтесь')
      }
   }

   useEffect(() => {
      dispatch(getMainDiscountProduct(size.discount))
   }, [size.discount])

   useEffect(() => {
      dispatch(getMainNewProduct(size.new))
   }, [size.new])

   useEffect(() => {
      dispatch(getMainRecommendProduct(size.recommend))
   }, [size.recommend])

   const loadMore = (type) => {
      const newSize = { ...size }
      newSize[type] += 5
      setSize(newSize)
   }

   const showLess = (type) => {
      setSize((prev) => {
         return {
            ...prev,
            [type]: 5,
         }
      })
   }

   const seeMoreDiscount = discount?.map((el) => el)
   const seeMoreNew = newProduct?.map((el) => el)
   const seeMoreRecommend = recommend?.map((el) => el)

   return (
      <div>
         <StyledSlider>
            <Carousel />
         </StyledSlider>
         <CardContainer>
            <Styled>Акции</Styled>
            <StyledCard>
               {discount?.map((data) => {
                  return (
                     <div key={data.productId}>
                        <Card
                           id={data.productId}
                           action={data.action}
                           sort={data.sort}
                           comparison={data.comparison}
                           compareProducts={() =>
                              compareProducts(
                                 data.productId,
                                 Boolean(data.comparison),
                                 data.sort
                              )
                           }
                           like={data.like}
                           addToFavorites={() =>
                              addToFavorites(
                                 data.productId,
                                 Boolean(data.like),
                                 data.sort
                              )
                           }
                           cart={data.cart}
                           addToCart={() =>
                              addProductsToCart(
                                 data.productId,
                                 Boolean(data.cart),
                                 data.sort
                              )
                           }
                           discount={data.discount}
                           img={data.image}
                           quantity={data.quantity}
                           status={data.status}
                           title={data.nameMemoryColor}
                           rating={data.stars}
                           actualprice={data.currentPrice}
                           noneactualprice={data.price}
                        />
                     </div>
                  )
               })}
            </StyledCard>
            <StyledButton>
               {Number(seeMoreDiscount?.length) % 5 === 0 ? (
                  <div key={seeMoreDiscount?.productId}>
                     <Button
                        variant="outlined"
                        width="300px"
                        onClick={() => loadMore('discount')}
                     >
                        Показать еще
                     </Button>
                  </div>
               ) : (
                  <Button
                     variant="outlined"
                     width="300px"
                     onClick={() => showLess('discount')}
                  >
                     Показать меньше
                  </Button>
               )}
            </StyledButton>
            <Styled>Новинки</Styled>
            <StyledCard>
               {newProduct?.map((data) => {
                  return (
                     <div key={data.productId}>
                        <Card
                           id={data.productId}
                           action={data.action}
                           sort={data.sort}
                           comparison={data.comparison}
                           compareProducts={() =>
                              compareProducts(
                                 data.productId,
                                 Boolean(data.comparison),
                                 data.sort
                              )
                           }
                           like={data.like}
                           addToFavorites={() =>
                              addToFavorites(
                                 data.productId,
                                 Boolean(data.like),
                                 data.sort
                              )
                           }
                           discount={data.discount}
                           img={data.image}
                           cart={data.cart}
                           addToCart={() =>
                              addProductsToCart(
                                 data.productId,
                                 Boolean(data.cart),
                                 data.sort
                              )
                           }
                           quantity={data.quantity}
                           status={data.status}
                           title={data.nameMemoryColor}
                           rating={data.stars}
                           actualprice={data.currentPrice}
                           noneactualprice={data.price}
                        />
                     </div>
                  )
               })}
            </StyledCard>
            <StyledButton>
               {Number(seeMoreNew?.length) % 5 === 0 ? (
                  <div key={seeMoreNew?.productId}>
                     <Button
                        variant="outlined"
                        width="300px"
                        onClick={() => loadMore('new')}
                     >
                        Показать еще
                     </Button>
                  </div>
               ) : (
                  <Button
                     variant="outlined"
                     width="300px"
                     onClick={() => showLess('new')}
                  >
                     Показать меньше
                  </Button>
               )}
            </StyledButton>
            <Styled> Мы рекомендуем</Styled>
            <StyledCard>
               {recommend?.map((data) => {
                  return (
                     <div key={data.productId}>
                        <Card
                           id={data.productId}
                           action={data.action}
                           sort={data.sort}
                           comparison={data.comparison}
                           compareProducts={() =>
                              compareProducts(
                                 data.productId,
                                 Boolean(data.comparison),
                                 data.sort
                              )
                           }
                           like={data.like}
                           addToFavorites={() =>
                              addToFavorites(
                                 data.productId,
                                 Boolean(data.like),
                                 data.sort
                              )
                           }
                           cart={data.cart}
                           addToCart={() =>
                              addProductsToCart(
                                 data.productId,
                                 Boolean(data.cart),
                                 data.sort
                              )
                           }
                           discount={data.discount}
                           img={data.image}
                           quantity={data.quantity}
                           status={data.status}
                           title={data.nameMemoryColor}
                           rating={data.stars}
                           actualprice={data.currentPrice}
                           noneactualprice={data.price}
                        />
                     </div>
                  )
               })}
            </StyledCard>
            <StyledButton>
               {Number(seeMoreRecommend?.length) % 5 === 0 ? (
                  <div key={seeMoreRecommend?.productId}>
                     <Button
                        variant="outlined"
                        width="300px"
                        onClick={() => loadMore('recommend')}
                     >
                        Показать еще
                     </Button>
                  </div>
               ) : (
                  <Button
                     variant="outlined"
                     width="300px"
                     onClick={() => showLess('recommend')}
                  >
                     Показать меньше
                  </Button>
               )}
            </StyledButton>
            <StyledContainer>
               <InfoCards />
            </StyledContainer>
         </CardContainer>
      </div>
   )
}
export default MainPage

const StyledSlider = styled('div')`
   margin-top: 30px;
   background: #dedfe7;
`
const CardContainer = styled('div')`
   margin: auto;
   margin-top: 120px;
`
const Styled = styled('h3')`
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 110%;
`
const StyledCard = styled('div')`
   margin-top: 40px;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: auto;
   grid-column-gap: 10px;
   grid-row-gap: 10px;
`
const StyledButton = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 40px;
   margin-bottom: 120px;
`
const StyledContainer = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 120px;
`
