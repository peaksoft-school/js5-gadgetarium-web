import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

import EmptyIcon from '../../../assets/images/sammy-finance 1.png'
import ComparisonContent from '../../../components/client/ComparisonContent'
import Bredcrumbs from '../../../components/UI/Breadcrumbs'
import CustomizedTabs from '../../../components/UI/Tab'
import { postProducts } from '../../../store/actions/cartActions'
import {
   getCompareProducts,
   removeAllCompareProducts,
   removeCompareProduct,
} from '../../../store/actions/comparisonActions'

const override = {
   display: 'block',
   height: '100vh',
   margin: '150px auto 0 auto',
}

const ComparisonPage = () => {
   const { smartPhone, laptop, tablet, smartWatch, loading } = useSelector(
      (state) => state.compareProducts
   )
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCompareProducts())
   }, [])

   const handleDeleteById = (e, productId) => {
      e.stopPropagation()
      dispatch(removeCompareProduct({ productId }))
   }

   const addProductsToCart = (productId) => {
      dispatch(postProducts({ productId }))
   }

   const handleDeleteAllProducts = () => {
      dispatch(removeAllCompareProducts())
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

   const tabsArray = [
      {
         id: 1,
         value: 'Смартфоны',
         label: `Смартфоны(${smartPhone.compareProductResponse?.length || 0})`,
         Component: (
            <ComparisonContent
               type="SMARTPHONE"
               data={smartPhone.compareProductResponse}
               handleDelete={handleDeleteById}
               handleAllDelete={handleDeleteAllProducts}
               addProductsToCart={addProductsToCart}
            />
         ),
      },
      {
         id: 2,
         value: 'Ноутбуки',
         label: `Ноутбуки(${laptop.compareProductResponse?.length || 0})`,
         Component: (
            <ComparisonContent
               type="LAPTOP"
               data={laptop.compareProductResponse}
               handleDelete={handleDeleteById}
               handleAllDelete={handleDeleteAllProducts}
               addProductsToCart={addProductsToCart}
            />
         ),
      },
      {
         id: 3,
         value: 'Планшеты',
         label: `Планшеты(${tablet.compareProductResponse?.length || 0})`,
         Component: (
            <ComparisonContent
               type="TABLET"
               data={tablet.compareProductResponse}
               handleDelete={handleDeleteById}
               handleAllDelete={handleDeleteAllProducts}
               addProductsToCart={addProductsToCart}
            />
         ),
      },
      {
         id: 4,
         value: 'Смарт часы и браслеты',
         label: `Смарт часы и браслеты(${
            smartWatch.compareProductResponse?.length || 0
         })`,
         Component: (
            <ComparisonContent
               type="SMARTWATCHES"
               data={smartWatch.compareProductResponse}
               handleDelete={handleDeleteById}
               handleAllDelete={handleDeleteAllProducts}
               addProductsToCart={addProductsToCart}
            />
         ),
      },
   ]

   const pathsArray = [
      {
         path: '/',
         name: 'Главная',
      },
      {
         path: '/comparison',
         name: 'Сравнение',
      },
   ]

   return (
      <>
         <Container>
            <Bredcrumbs paths={pathsArray} />
            <ComparisonPageTitle>Сравнение товаров</ComparisonPageTitle>
         </Container>
         <Horizontal />
         {smartPhone.compareProductResponse?.length ||
         laptop.compareProductResponse?.length ||
         tablet.compareProductResponse?.length ||
         smartWatch.compareProductResponse?.length ? (
            <ComparisonPageContainer>
               <ComparisonPageTabs>
                  <CustomizedTabs
                     tabsArray={tabsArray}
                     baseValue="Смартфоны"
                     variant="variant"
                  />
               </ComparisonPageTabs>
            </ComparisonPageContainer>
         ) : (
            <StyledBlock>
               <StyledComponent>
                  <StyledEmptyIcon src={EmptyIcon} />
                  <StyledF2>Сравнивать пока нечего</StyledF2>
                  <StyledText>
                     Добавляйте сюда товары, чтобы сравнить их характеристики.
                     Так выбрать станет проще!
                  </StyledText>
               </StyledComponent>
            </StyledBlock>
         )}
      </>
   )
}

export default ComparisonPage

const StyledBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 120px 0px 120px 0px;
`
const StyledComponent = styled.div`
   width: 466px;
   height: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`

const Horizontal = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border: 1px solid #cdcdcd;
   transform: rotate(180deg);
   margin-bottom: 30px;
`
const StyledEmptyIcon = styled('img')`
   width: 300px;
`
const StyledF2 = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 110%;
   color: #292929;
`
const StyledText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 130%;
   display: flex;
   align-items: flex-end;
   text-align: center;
   color: #292929;
`

const ComparisonPageContainer = styled.div`
   /* background: #fff; */
`
const Container = styled.div`
   margin-bottom: 20px;
`

const ComparisonPageTitle = styled.h1`
   margin-top: 30px;
   font-family: 'Ubuntu';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   color: #292929;
`

const ComparisonPageTabs = styled.div`
   padding-bottom: 20px;
`
